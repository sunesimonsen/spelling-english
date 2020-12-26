import { html } from "htm/preact";
import SpellingExercise from "./SpellingExercise.js";

const RootView = () => html`
  <section>
    <${SpellingExercise} />
  </section>
`;

export default RootView;
