if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(res => console.log("Registered"))
      .catch(err => console.log(err));
  });
}
