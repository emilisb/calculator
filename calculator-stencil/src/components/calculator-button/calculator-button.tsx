import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'calculator-button',
  styleUrl: 'calculator-button.css',
  shadow: true,
})
export class CalculatorButton {
  @Prop() name: string;
  @Prop() orange: boolean;
  @Prop() wide: boolean;
  @Prop() clickHandler: (buttonName: string) => void;

  handleClick = () => {
    this.clickHandler(this.name);
  };

  render() {
    const className = ['component-button', this.orange ? 'orange' : '', this.wide ? 'wide' : '', this.name];

    return (
      <div class={className.join(' ').trim()}>
        <button class={this.name} onClick={this.handleClick}>
          {this.name}
        </button>
      </div>
    );
  }
}
