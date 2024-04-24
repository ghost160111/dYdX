import "./assets/styles/style.scss";
import Main from "./components/App.ts";
import FadeTransition from "./plugins/FadeTransition/FadeTransition.ts";

new FadeTransition(document.body);
new Main().startApp();
