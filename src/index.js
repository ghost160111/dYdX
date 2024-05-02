import "./assets/sass/style.scss";
import App from "./components/App.ts";
import animate from "./plugins/ReactiveElement/Utils/Animate.ts";
import DynamicCSS from "./plugins/ReactiveElement/Classes/DynamicCSS.ts";
import StyleMargins from "./plugins/ReactiveElement/Utils/StyleMargins.ts";
import Fonts from "./plugins/ReactiveElement/Utils/Fonts.ts";
import { sharedState } from "./plugins/ReactiveElement/Classes/ReactiveElement.ts";

const marginsCSS = new DynamicCSS(StyleMargins);
const fontsCSS = new DynamicCSS(Fonts);

sharedState.setCSSURL("margins", marginsCSS.url);
sharedState.setCSSURL("fonts", fontsCSS.url);

const app = new App();
app.main();

animate({
  node: document.body,
  keyframes: [
    { opacity: 0 },
    { opacity: 1 }
  ],
  options: {
    easing: "ease",
    duration: 1000
  }
});
