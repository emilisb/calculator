import { RemoteRoot } from "@remote-ui/core";

export type RenderCallback = (root: RemoteRoot) => void;

export interface GlobalApi {
  onRender(renderer: RenderCallback): void;
}

export function onRender(renderer: RenderCallback) {
  return (self as any as GlobalApi).onRender(renderer);
}
