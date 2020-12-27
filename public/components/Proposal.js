import { html } from "htm/preact";
import { connect } from "@depository/preact";
import {
  proposal,
  solution,
  completeProposal,
  correctProposal,
  nextExercise,
} from "../models/spelling.js";
import ProposalSlot from "./ProposalSlot.js";
import Confetti from "./Confetti.js";
import { css } from "stylewars";

const styles = css`
  & {
    text-align: center;
  }
`;

const status = (correctLetter, choice) =>
  correctLetter === choice.letter ? "correct" : "incorrect";

const Proposal = ({
  dispatch,
  proposal,
  solution,
  completeProposal,
  correctProposal,
}) => {
  const onConfettiEnd = () => {
    dispatch(nextExercise());
  };

  return html`
    <div class=${styles}>
      ${solution.map(
        (letter, i) =>
          html`<${ProposalSlot}
            status=${completeProposal ? status(letter, proposal[i]) : "none"}
            choice=${proposal[i]}
          />`
      )}
    </div>
    <${Confetti} show=${correctProposal} onEnd=${onConfettiEnd} />
  `;
};

export default connect(Proposal, {
  proposal,
  solution,
  completeProposal,
  correctProposal,
});
