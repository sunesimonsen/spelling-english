import { html } from "htm/preact";
import { css } from "stylewars";

const styles = css`
  & {
    border: thin solid #e1e1e1;
    border-radius: 5px;
    padding: 10px;
    background: white;
  }
`;

const Thumbnail = ({ image }) => html`
  <img src=${image.thumbnailUrl} alt=${image.name} class=${styles} />
`;

export default Thumbnail;
