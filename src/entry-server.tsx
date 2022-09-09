import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function render(url: string, context: any) {
  console.log(context);
  
  return ReactDOMServer.renderToString(
    // @ts-ignore
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );
}
