import React, { useMemo, useEffect } from "react";
import { createWorkerFactory } from "@remote-ui/web-workers";
import {
  RemoteReceiver,
  RemoteRenderer,
  useWorker,
} from "@remote-ui/react/host";
import proxyComponentsFactory from "./proxy-components";
import "./WorkerRenderer.css";

const createWorker = createWorkerFactory(
  () => import(/* webpackChunkName: 'sandbox' */ "./sandbox")
);

export function WorkerRenderer({ script }: { script: URL }) {
  const components = useMemo(() => proxyComponentsFactory(), []);
  const receiver = useMemo(() => new RemoteReceiver(), []);
  const worker = useWorker(createWorker);

  useEffect(() => {
    worker.run(script.href, receiver.receive);
  }, [receiver, worker, script]);

  return <RemoteRenderer receiver={receiver} components={components} />;
}
