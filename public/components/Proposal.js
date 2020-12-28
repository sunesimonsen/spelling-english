import { html } from "htm/preact";
import { connect } from "@depository/preact";
import {
  proposal,
  solution,
  completeProposal,
  correctProposal,
  nextExercise,
  retryExercise,
} from "../models/spelling.js";
import ProposalSlot from "./ProposalSlot.js";
import Confetti from "./Confetti.js";
import { css, classes } from "stylewars";

const styles = css`
  &.incorrect {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
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

  const onAnimationend = () => {
    setTimeout(() => {
      dispatch(retryExercise());
    }, 750);
  };

  return html`
    <div
      class=${classes(
        styles,
        completeProposal && !correctProposal && "incorrect"
      )}
      onAnimationend=${onAnimationend}
    >
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
