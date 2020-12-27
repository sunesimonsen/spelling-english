import { html } from "htm/preact";
import SpellingExercise from "./SpellingExercise.js";
import { css } from "stylewars";

const styles = css`
  & {
    background: #f3ccff;
    flex: 1;
  }
`;

const RootView = () => html`
  <section class=${styles}>
    <${SpellingExercise} />
  </section>
`;

export default RootView;
