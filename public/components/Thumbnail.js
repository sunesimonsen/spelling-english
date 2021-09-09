import { html } from "@depository/view";
import { css } from "stylewars";

const styles = css`
  & {
    border: thin solid #e1e1e1;
    border-radius: 5px;
    padding: 10px;
    background: white;
  }
`;

export class Thumbnail {
  render({ image }) {
    return html`
      <img src=${image.thumbnailUrl} alt=${image.name} class=${styles} />
    `;
  }
}
