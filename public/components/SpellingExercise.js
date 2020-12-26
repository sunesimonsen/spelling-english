import { html } from "htm/preact";
import Choices from "./Choices.js";
import Proposal from "./Proposal.js";

const SpellingExercise = ({ choices, solution }) =>
  html`
    <section>
      <${Choices} />
      <${Proposal} />
    </section>
  `;

export default SpellingExercise;
