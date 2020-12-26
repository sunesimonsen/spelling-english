import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { proposal } from "../models/spelling.js";
import ProposalLetter from "./ProposalLetter.js";
import BackspaceButton from "./BackspaceButton.js";

const Proposal = ({ proposal }) => html`
  <div>
    ${proposal.map((choice) => html`<${ProposalLetter} choice=${choice} />`)}
    <${BackspaceButton} />
  </div>
`;

export default connect(Proposal, { proposal });
