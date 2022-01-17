import { retain, createRemoteRoot, RemoteChannel } from "@remote-ui/core";
import { RenderCallback } from "./worker/api";

let renderCallback: RenderCallback | undefined;

Reflect.defineProperty(self, "onRender", {
  value: (callback: RenderCallback) => {
    renderCallback = callback;
  },
  writable: false,
});

export function run(script: string, channel: RemoteChannel) {
  retain(channel);

  importScripts(script);

  if (renderCallback == null) {
    throw new Error(
      `The ${script} script did not register a callback to render UI. Make sure that code runs self.onRender().`
    );
  }

  const root = createRemoteRoot(channel, { components: [] });

  renderCallback(root);
}
