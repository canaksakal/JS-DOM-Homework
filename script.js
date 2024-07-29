const containerElement = document.getElementById("container");

const topPart = document.createElement("div");
const bottomPart = document.createElement("div");

const firstDiv = document.createElement("div");
const secondDiv = document.createElement("div");
const thirdDiv = document.createElement("div");

topPart.classList.add("top-part");
bottomPart.classList.add("bottom-part");

firstDiv.classList.add("first-div");
secondDiv.classList.add("second-div");
thirdDiv.classList.add("third-div");

containerElement.appendChild(topPart)
containerElement.appendChild(bottomPart)

bottomPart.appendChild(firstDiv);
topPart.appendChild(secondDiv);
bottomPart.appendChild(thirdDiv);
