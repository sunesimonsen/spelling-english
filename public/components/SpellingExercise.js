import { html } from "htm/preact";
import Choices from "./Choices.js";
import Proposal from "./Proposal.js";
import Thumbnails from "./Thumbnails.js";

const SpellingExercise = ({ choices, solution }) =>
  html`
    <${Choices} />
    <${Proposal} />
    <${Thumbnails} />
  `;

export default SpellingExercise;
