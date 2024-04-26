import "./assets/sass/style.scss";
import App from "./components/App.ts";
import FadeTransition from "./plugins/ReactiveElement/Classes/FadeTransition.ts"

new FadeTransition(document.body);
new App().main();
