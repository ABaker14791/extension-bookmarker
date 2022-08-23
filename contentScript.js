const init = function () {
  const buttonContainer = document.querySelector(
    "main div section div div section"
  );
  const injectElement = document.createElement("div");
  injectElement.className = "save-button";
  injectElement.textContent = "Save to Extension";
  buttonContainer.appendChild(injectElement);
};
const delayLoad = setTimeout(init, 200);

function addToBookmarks() {
  console.log("Hello");
}
