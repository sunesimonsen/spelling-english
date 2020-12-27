import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { proposal, solution } from "../models/spelling.js";
import ProposalSlot from "./ProposalSlot.js";
import { css } from "stylewars";

const styles = css`
  & {
    text-align: center;
  }
`;

const Proposal = ({ proposal, solution }) => html`
  <div class=${styles}>
    ${solution.map(
      (letter, i) => html`<${ProposalSlot} choice=${proposal[i]} />`
    )}
  </div>
`;

export default connect(Proposal, { proposal, solution });
