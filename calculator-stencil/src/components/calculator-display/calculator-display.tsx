import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'calculator-display',
  styleUrl: 'calculator-display.css',
  shadow: true,
})
export class CalculatorDisplay {
  @Prop() value;

  render() {
    return (
      <div class="component-display">
        <div>{this.value}</div>
      </div>
    );
  }
}
