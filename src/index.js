import "./assets/sass/style.scss";
import App from "./components/App.ts";
import animate from "./plugins/ReactiveElement/Utils/Animate.ts";

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

const app = new App();
app.main();

setTimeout(() => {
  app.deleteApp();
}, 5000);
