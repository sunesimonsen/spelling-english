import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { proposal, removeLastProposalLetter } from "../models/spelling.js";
import ProposalLetter from "./ProposalLetter.js";
import BackspaceButton from "./BackspaceButton.js";

const Proposal = ({ dispatch, proposal }) => {
  const onClick = () => {
    dispatch(removeLastProposalLetter());
  };

  return html`
    <button disabled=${proposal.length === 0} onClick=${onClick}>⌫</button>
  `;
};

export default connect(Proposal, { proposal });
