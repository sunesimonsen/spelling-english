import { html, Component } from "htm/preact";
import { connect } from "@depository/preact";
import { loadImages, images } from "../models/spelling.js";
import Thumbnail from "./Thumbnail.js";
import { css } from "stylewars";

const styles = css`
  & {
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin: 20px;
  }
`;

class Thumbnails extends Component {
  componentDidMount() {
    this.props.dispatch(loadImages());
  }

  render({ images }) {
    console.log(images);
    return html`
      <div class=${styles}>
        ${images.map(
          (image) => html`<${Thumbnail} key=${image.id} image=${image} />`
        )}
      </div>
    `;
  }
}

export default connect(Thumbnails, { images });
