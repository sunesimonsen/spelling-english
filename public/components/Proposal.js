import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { proposal, solution, completeProposal } from "../models/spelling.js";
import ProposalSlot from "./ProposalSlot.js";
import { css } from "stylewars";

const styles = css`
  & {
    text-align: center;
  }
`;

const status = (correctLetter, choice) =>
  correctLetter === choice.letter ? "correct" : "incorrect";

const Proposal = ({ proposal, solution, completeProposal }) => html`
  <div class=${styles}>
    ${solution.map(
      (letter, i) =>
        html`<${ProposalSlot}
          status=${completeProposal ? status(letter, proposal[i]) : "none"}
          choice=${proposal[i]}
        />`
    )}
  </div>
`;

export default connect(Proposal, { proposal, solution, completeProposal });
