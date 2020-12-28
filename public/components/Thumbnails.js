import { html, Component } from "htm/preact";
import { connect } from "@depository/preact";
import { loadImages, images, query } from "../models/spelling.js";
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
    this.props.dispatch(loadImages(this.props.query));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.props.dispatch(loadImages(this.props.query));
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

export default connect(Thumbnails, { query, images });
