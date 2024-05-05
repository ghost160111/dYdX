import "./assets/sass/style.scss";
import App from "./components/App.ts";
import StyleMargins from "./plugins/ReactiveElement/Utils/StyleMargins.ts";
import Fonts from "./plugins/ReactiveElement/Utils/Fonts.ts";
import { SetDynamicCSS } from "./plugins/ReactiveElement/Functions/SetDynamicCSS.ts";
import { PlayFadeInAnimation } from "./plugins/ReactiveElement/Functions/PlayFadeInAnimation.ts";

SetDynamicCSS("margins", StyleMargins);
SetDynamicCSS("fonts", Fonts);

PlayFadeInAnimation(document.body);

const app = new App();
app.main();
