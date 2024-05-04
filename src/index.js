import "./assets/sass/style.scss";
import App from "./components/App.ts";
import animate from "./plugins/ReactiveElement/Utils/Animate.ts";
import DynamicCSS from "./plugins/ReactiveElement/Classes/DynamicCSS.ts";
import StyleMargins from "./plugins/ReactiveElement/Utils/StyleMargins.ts";
import Fonts from "./plugins/ReactiveElement/Utils/Fonts.ts";
import { sharedState } from "./plugins/ReactiveElement/Classes/ReactiveElement.ts";

const jsCodeList = [
  /*js*/`
    self.addEventListener("message", (event) => {
      console.log("Message received in worker: ", event.data);

      if (event.data === "this") {
        self.postMessage("Response from Web worker!");
      }
    });
  `
];

const blob = new Blob(jsCodeList, { type: "text/javascript" });
const url = URL.createObjectURL(blob);
const script = document.createElement("script");

script.src = url;
document.head.appendChild(script);

const worker = new Worker(url);

worker.postMessage("this");
worker.addEventListener("message", (event) => {
  console.log("Message from worker: ", event.data);
});

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
