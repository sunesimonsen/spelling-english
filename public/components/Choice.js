import { html } from "@depository/view";
import { css } from "stylewars";
import {
  completeProposal,
  pickChoice,
  choiceIsUsed,
} from "../models/spelling.js";

const styles = css`
  & {
    display: inline-block;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    border-radius: 100%;
    height: 65px;
    width: 65px;
    margin: 15px;
    text-align: center;
    text-transform: uppercase;
    background: #f1f1f1;
    border: 3px solid #a1a1a1;
    text-align: center;
    line-height: 40px;
    user-select: none;
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

export class Choice {
  constructor({ choice }) {
    this.onClick = () => {
      this.dispatch(pickChoice(this.props.choice));
    };
  }

  data({ choice }) {
    return {
      completeProposal,
      used: choiceIsUsed(choice.id),
    };
  }

  render({ choice, used, completeProposal }) {
    return html`
      <button
        class=${styles}
        disabled=${completeProposal || used}
        @click=${this.onClick}
      >
        ${choice.letter}
      </button>
    `;
  }
}
