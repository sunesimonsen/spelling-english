import { html } from "@depository/view";
import { Choices } from "./Choices.js";
import { Proposal } from "./Proposal.js";
import { Thumbnails } from "./Thumbnails.js";

export class SpellingExercise {
  render() {
    return html`
      <${Choices} />
      <${Proposal} />
      <${Thumbnails} />
    `;
  }
}
