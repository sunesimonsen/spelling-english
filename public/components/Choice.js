import { html } from "htm/preact";
import { connect } from "@depository/preact";
import {
  completeProposal,
  pickChoice,
  choiceIsUsed,
} from "../models/spelling.js";
import { css } from "stylewars";

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
    border: none;
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
`;

const Choice = ({ dispatch, choice, used, completeProposal }) => {
  const onClick = () => {
    dispatch(pickChoice(choice));
  };

  return html`
    <button
      class=${styles}
      disabled=${completeProposal || used}
      onClick=${onClick}
    >
      ${choice.letter}
    </button>
  `;
};

export default connect(Choice, ({ choice }) => ({
  completeProposal,
  used: choiceIsUsed(choice.id),
}));
