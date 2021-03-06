/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppCalculator {
        "initial": string;
    }
    interface AppRoot {
    }
    interface CalculatorButton {
        "clickHandler": (buttonName: string) => void;
        "name": string;
        "orange": boolean;
        "wide": boolean;
    }
    interface CalculatorButtonPanel {
        "clickHandler": (buttonName: string) => void;
    }
    interface CalculatorDisplay {
        "value": any;
    }
}
declare global {
    interface HTMLAppCalculatorElement extends Components.AppCalculator, HTMLStencilElement {
    }
    var HTMLAppCalculatorElement: {
        prototype: HTMLAppCalculatorElement;
        new (): HTMLAppCalculatorElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCalculatorButtonElement extends Components.CalculatorButton, HTMLStencilElement {
    }
    var HTMLCalculatorButtonElement: {
        prototype: HTMLCalculatorButtonElement;
        new (): HTMLCalculatorButtonElement;
    };
    interface HTMLCalculatorButtonPanelElement extends Components.CalculatorButtonPanel, HTMLStencilElement {
    }
    var HTMLCalculatorButtonPanelElement: {
        prototype: HTMLCalculatorButtonPanelElement;
        new (): HTMLCalculatorButtonPanelElement;
    };
    interface HTMLCalculatorDisplayElement extends Components.CalculatorDisplay, HTMLStencilElement {
    }
    var HTMLCalculatorDisplayElement: {
        prototype: HTMLCalculatorDisplayElement;
        new (): HTMLCalculatorDisplayElement;
    };
    interface HTMLElementTagNameMap {
        "app-calculator": HTMLAppCalculatorElement;
        "app-root": HTMLAppRootElement;
        "calculator-button": HTMLCalculatorButtonElement;
        "calculator-button-panel": HTMLCalculatorButtonPanelElement;
        "calculator-display": HTMLCalculatorDisplayElement;
    }
}
declare namespace LocalJSX {
    interface AppCalculator {
        "initial"?: string;
    }
    interface AppRoot {
    }
    interface CalculatorButton {
        "clickHandler"?: (buttonName: string) => void;
        "name"?: string;
        "orange"?: boolean;
        "wide"?: boolean;
    }
    interface CalculatorButtonPanel {
        "clickHandler"?: (buttonName: string) => void;
    }
    interface CalculatorDisplay {
        "value"?: any;
    }
    interface IntrinsicElements {
        "app-calculator": AppCalculator;
        "app-root": AppRoot;
        "calculator-button": CalculatorButton;
        "calculator-button-panel": CalculatorButtonPanel;
        "calculator-display": CalculatorDisplay;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-calculator": LocalJSX.AppCalculator & JSXBase.HTMLAttributes<HTMLAppCalculatorElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "calculator-button": LocalJSX.CalculatorButton & JSXBase.HTMLAttributes<HTMLCalculatorButtonElement>;
            "calculator-button-panel": LocalJSX.CalculatorButtonPanel & JSXBase.HTMLAttributes<HTMLCalculatorButtonPanelElement>;
            "calculator-display": LocalJSX.CalculatorDisplay & JSXBase.HTMLAttributes<HTMLCalculatorDisplayElement>;
        }
    }
}
