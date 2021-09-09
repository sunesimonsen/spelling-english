import { html } from "@depository/view";
import { css } from "stylewars";
import { backspace } from "../models/spelling.js";

const styles = css`
  & {
    border-radius: 100%;
    height: 65px;
    width: 65px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    border: 3px solid #a1a1a1;
    margin: 5px;
  }

  &:hover {
    background: #e1e1e1;
  }
  &:focus,
  &:active,
  &:visited {
    overline: none;
  }

  &:active {
    background: #d6d6d6;
  }
`;

export class BackspaceButton {
  constructor() {
    this.onBackspace = () => {
      this.dispatch(backspace());
    };
  }

  render() {
    return html`<button @click=${this.onBackspace} class=${styles}>⌫</button>`;
  }
}
