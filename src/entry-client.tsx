import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElment: Element = document.getElementById("root") as Element;

ReactDOM.hydrateRoot(
  rootElment,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// if (process.env.NODE_ENV === "production") {
//   ReactDOM.hydrateRoot(
//     rootElment,
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// } else {
//   ReactDOM.createRoot(document.getElementById("root") as Element).render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }
