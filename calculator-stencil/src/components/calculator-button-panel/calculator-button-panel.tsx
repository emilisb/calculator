import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'calculator-button-panel',
  styleUrl: 'calculator-button-panel.css',
  shadow: true,
})
export class CalculatorButtonPanel {
  @Prop() clickHandler: (buttonName: string) => void;

  handleClick = (buttonName: string) => {
    this.clickHandler(buttonName);
  };

  render() {
    return (
      <div class="component-button-panel">
        <div>
          <calculator-button name="AC" clickHandler={this.handleClick} />
          <calculator-button name="+/-" clickHandler={this.handleClick} />
          <calculator-button name="%" clickHandler={this.handleClick} />
          <calculator-button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <calculator-button name="7" clickHandler={this.handleClick} />
          <calculator-button name="8" clickHandler={this.handleClick} />
          <calculator-button name="9" clickHandler={this.handleClick} />
          <calculator-button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <calculator-button name="4" clickHandler={this.handleClick} />
          <calculator-button name="5" clickHandler={this.handleClick} />
          <calculator-button name="6" clickHandler={this.handleClick} />
          <calculator-button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <calculator-button name="1" clickHandler={this.handleClick} />
          <calculator-button name="2" clickHandler={this.handleClick} />
          <calculator-button name="3" clickHandler={this.handleClick} />
          <calculator-button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <calculator-button name="0" clickHandler={this.handleClick} wide />
          <calculator-button name="." clickHandler={this.handleClick} />
          <calculator-button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
