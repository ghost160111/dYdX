import "./assets/sass/style.scss";
import Main from "./components/App.ts";
import FadeTransition from "./plugins/ReactiveElement/Classes/FadeTransition.ts"

new FadeTransition(document.body);
new Main().startApp();
