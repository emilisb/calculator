import { Component, h, Prop, State } from '@stencil/core';
import calculate from './calculate';

@Component({
  tag: 'app-calculator',
  styleUrl: 'app-calculator.css',
  shadow: true,
})
export class AppCalculator {
  @Prop() initial: string = '0';

  @State() state = {
    total: null,
    next: null,
    operation: null,
  };

  clickHandler = (buttonName: string) => {
    const result = calculate(this.state, buttonName);
    this.state = { ...this.state, ...result };
  };

  render() {
    return (
      <div class="calculator">
        <calculator-display value={this.state.next || this.state.total || this.initial} />
        <calculator-button-panel clickHandler={this.clickHandler} />
      </div>
    );
  }
}
