let link2 = "./json/geo.json";

function fetchContact(x) {
  fetch(x)
    .then(res => res.json())
    .then(fillHome);
}

function fillHome(json) {
  console.log(json);

  document.getElementById("scene");
  json.forEach(el => {
    let newMarker = document.createElement("a-marker");
    let newPlane = document.createElement("a-plane");
    let newText = document.createElement("a-text");

    newMarker.setAttribute("value", el.properties.id);
    newMarker.setAttribute("type", "barcode");

    newText.setAttribute("value", el.properties.id);
    newText.setAttribute("rotation", "-90 0 0");
    newText.setAttribute("z-offset", "1");
    newText.setAttribute("color", "green");

    newPlane.setAttribute("rotation", "-90 0 0");
    newPlane.setAttribute("material", "color: green; opacity: 0.4;");
    newPlane.setAttribute("position", "0 0.1 0");

    newMarker.appendChild(newText);
    newMarker.appendChild(newPlane);
    scene.appendChild(newMarker);
  });
}

fetchContact(link2);
