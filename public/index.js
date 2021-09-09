import { html, render } from "@depository/view";
import { Application } from "./components/Application.js";
import { Store } from "@depository/store";
import { promiseMiddleware } from "@depository/promise-middleware";
import { statusMiddleware } from "@depository/status-middleware";
import { exercises } from "./exercises.js";
import * as api from "./api.js";

const store = new Store({
  currentExercise: api.retrieveExercise(),
  proposal: [],
  exercises,
  images: [],
});

if (window.__DEPOSITORY__) {
  store.use(window.__DEPOSITORY__.plugin({ name: "spelling-app-eng" }));
}

store.useMiddleware(promiseMiddleware(api));
store.useMiddleware(statusMiddleware(api));

render(html`<${Application} />`, store, document.body);
