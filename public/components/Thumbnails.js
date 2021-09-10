import { html } from "@depository/view";
import { css } from "stylewars";
import { loadImages, query } from "../models/spelling.js";
import { Thumbnail } from "./Thumbnail.js";

const styles = css`
  & {
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin: 20px;
  }
`;

export class Thumbnails {
  data() {
    return { query, images: "images" };
  }

  didMount() {
    this.dispatch(loadImages(this.props.query));
  }

  didUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.dispatch(loadImages(this.props.query));
    }
  }

  render({ images }) {
    return html`
      <div class=${styles}>
        ${images.map(
          (image) => html`<${Thumbnail} key=${image.id} image=${image} />`
        )}
      </div>
    `;
  }
}
