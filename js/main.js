let link2 = "./json/geo.json";

function fetchContact(x) {
  fetch(x)
    .then(res => res.json())
    .then(fillHome);
}

function fillHome(json) {
  console.log(json);

  let jsonFE = json.features ? json.features : json;

  document.getElementById("scene");
  jsonFE.forEach(el => {
    let newMarker = document.createElement("a-marker");
    let newText = document.createElement("a-text");

    if (el.first_name) {
      newMarker.setAttribute("value", el.id);
      newText.setAttribute("value", el.first_name);
    } else {
      newMarker.setAttribute("value", el.properties.id);
      newText.setAttribute("value", el.id);
    }

    newMarker.setAttribute("type", "barcode");

    newText.setAttribute("rotation", "-90 0 0");
    newText.setAttribute("z-offset", "1");
    newText.setAttribute("geometry", "primitive:plane");
    newText.setAttribute("color", "red");
    newMarker.appendChild(newText);
    scene.appendChild(newMarker);
  });
}

fetchContact(link2);
