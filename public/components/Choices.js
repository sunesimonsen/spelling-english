import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { visibleChoices } from "../models/spelling.js";
import Choice from "./Choice.js";

const Choices = ({ visibleChoices }) => html`
  <div>
    ${visibleChoices.map((choice) => html`<${Choice} choice=${choice} />`)}
  </div>
`;

export default connect(Choices, { visibleChoices });
