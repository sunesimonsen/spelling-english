import { html } from "htm/preact";
import { css } from "stylewars";

const styles = css`
  & {
    display: inline-block;
    height: 80px;
    width: 80px;
    margin: 5px;
    font-size: 36px;
    text-transform: uppercase;
    border: thin black solid;
    background: white;
    border-radius: 16px;
    vertical-align: middle;
    line-height: 80px;
  }
`;

const ProposalLetter = ({ choice }) => html`
  <span class=${styles}>${choice && choice.letter}</span>
`;

export default ProposalLetter;
