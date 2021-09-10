import { html } from "@depository/view";
import { css, classes } from "stylewars";
import { ProposalSlot } from "./ProposalSlot.js";
import { Confetti } from "./Confetti.js";
import { BackspaceButton } from "./BackspaceButton.js";

import {
  solution,
  completeProposal,
  correctProposal,
  nextExercise,
  retryExercise,
} from "../models/spelling.js";

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

export class Proposal {
  constructor() {
    this.onConfettiEnd = () => {
      this.dispatch(nextExercise());
    };

    this.onAnimationend = () => {
      setTimeout(() => {
        this.dispatch(retryExercise());
      }, 750);
    };
  }

  data() {
    return {
      proposal: "proposal",
      solution,
      completeProposal,
      correctProposal,
    };
  }

  render({ proposal, solution, completeProposal, correctProposal }) {
    return html`
      <div
        class=${classes(
          styles,
          completeProposal && !correctProposal && "incorrect"
        )}
        @animationend=${this.onAnimationend}
      >
        ${solution.map(
          (letter, i) =>
            html`
              <${ProposalSlot}
                status=${completeProposal
                  ? status(letter, proposal[i])
                  : "none"}
                choice=${proposal[i]}
              />
            `
        )}
        <${BackspaceButton} />
      </div>
      <${Confetti} show=${correctProposal} onEnd=${this.onConfettiEnd} />
    `;
  }
}
