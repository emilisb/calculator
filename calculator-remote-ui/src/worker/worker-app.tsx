import React, { useState } from "react";
import { render } from "@remote-ui/react";
import { onRender } from "./api";
import Display from "./display";
import calculate, { CalculatorState } from "./calculate";
import ButtonPanel from "./button-panel";

onRender((root) => {
  render(<WorkerApp />, root);
});

function WorkerApp() {
  const [state, setState] = useState<CalculatorState>({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName: string) => {
    const result = calculate(state, buttonName);
    setState((oldState) => ({ ...oldState, ...result }));
  };

  return (
    // @ts-expect-error
    <div style={style}>
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

const style = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  height: "100%",
  width: "535px",
};
