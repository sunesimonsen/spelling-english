import { html } from "@depository/view";
import { css } from "stylewars";
import { SpellingExercise } from "./SpellingExercise.js";

const styles = css`
  & {
    flex: 1;
    text-align: center;
  }
`;

export class Application {
  render() {
    return html`
      <section class=${styles}>
        <${SpellingExercise} />
      </section>
    `;
  }
}
