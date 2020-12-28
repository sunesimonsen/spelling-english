import { html } from "htm/preact";
import { Store } from "@depository/store";
import { StoreProvider } from "@depository/preact";
import RootView from "./RootView.js";
import { promiseMiddleware } from "@depository/promise-middleware";
import { statusMiddleware } from "@depository/status-middleware";
import { words } from "../words.js";
import * as api from "../api.js";

const store = new Store({
  currentExercise: api.retrieveExercise(),
  proposal: [],
  words,
  images: [],
});

store.useMiddleware(promiseMiddleware(api));
store.useMiddleware(statusMiddleware(api));

const Application = () => html`
  <${StoreProvider} value=${store}>
    <${RootView} />
  <//>
`;

export default Application;
