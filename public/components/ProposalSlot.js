import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: inline-block;
    height: 80px;
    width: 80px;
    margin: 5px;
    font-size: 36px;
    text-transform: uppercase;
    border: thin black solid;
    background: white;
    border-radius: 16px;
    vertical-align: middle;
    line-height: 80px;
  }

  &.correct {
    background: #baefba;
    border: thin green solid;
  }

  &.incorrect {
    background: #ffd4d4;
    border: thin red solid;
  }
`;

export class ProposalSlot {
  render({ choice, status }) {
    return html`
      <span class=${classes(styles, status)}>${choice && choice.letter}</span>
    `;
  }
}
