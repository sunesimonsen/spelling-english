import { html } from "@depository/view";
import { choices } from "../models/spelling.js";
import { Choice } from "./Choice.js";

export class Choices {
  data() {
    return { choices };
  }

  render({ choices }) {
    return html`
      <div>
        ${choices.map((choice) => html`<${Choice} choice=${choice} />`)}
      </div>
    `;
  }
}
