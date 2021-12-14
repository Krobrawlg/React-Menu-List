import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { MenuContextProvider } from "./Store/menu-context";

ReactDOM.render(
  <MenuContextProvider>
    <App />
  </MenuContextProvider>,
  document.getElementById("root")
);
