self.addEventListener("message", (event) => {
  console.log("Message received in worker: ", event.data);

  if (event.data === "this") {
    self.postMessage("Response from Web worker!");
  }
});

// in other words, through this manipulations you can create some kinda
// parallel programming pattern!
