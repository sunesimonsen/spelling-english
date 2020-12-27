import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { choices } from "../models/spelling.js";
import Choice from "./Choice.js";
import { css } from "stylewars";

const styles = css`
  & {
    text-align: center;
  }
`;

const Choices = ({ choices }) => html`
  <div class=${styles}>
    ${choices.map((choice) => html`<${Choice} choice=${choice} />`)}
  </div>
`;

export default connect(Choices, { choices });
