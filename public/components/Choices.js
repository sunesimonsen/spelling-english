import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { choices } from "../models/spelling.js";
import Choice from "./Choice.js";

const Choices = ({ choices }) => html`
  <div>${choices.map((choice) => html`<${Choice} choice=${choice} />`)}</div>
`;

export default connect(Choices, { choices });
