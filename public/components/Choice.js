import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { completeProposal, pickChoice } from "../models/spelling.js";

const Choice = ({ dispatch, choice, completeProposal }) => {
  const onClick = () => {
    dispatch(pickChoice(choice));
  };

  return html`
    <button disabled=${completeProposal} onClick=${onClick}>
      ${choice.letter}
    </button>
  `;
};

export default connect(Choice, { completeProposal });
