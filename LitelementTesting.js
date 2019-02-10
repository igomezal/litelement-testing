import { html, LitElement } from 'lit-element';

export default class LitelementTesting extends LitElement {
  static get properties() {
    return {
      header: String,
    };
  }

  constructor() {
    super();
    this.header = 'My Example';
  }

  render() {
    return html`
      <style>
        :host {
          background: grey;
          display: block;
          padding: 25px;
        }

        h1 {
          color: white;
          font-size: 25px;
          margin: 0;
        }

        :host(.right)  {
          background: green;
          text-align: right;
        }

        :host(.right) h1 {
          color: orange;
          text-align: right;
        }

        :host(.right) div {
          text-align: right;
        }
      </style>
      <h1>${this.header}</h1>
      <div>
        <slot></slot>
      </div>
    `;
  }
}
