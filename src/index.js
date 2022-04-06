function component() {
  const element = document.createElement("div");
  // Lodash, currently include via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
