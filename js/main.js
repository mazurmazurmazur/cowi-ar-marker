let link2 = "./json/geo.json";

function fetchContact(x) {
  fetch(x)
    .then(res => res.json())
    .then(fillHome);
}

function fillHome(json) {
  console.log(json);

  document.getElementById("scene");
  json.features.forEach(el => {
    let newMarker = document.createElement("a-marker");
    let newPlane = document.createElement("a-plane");
    let newText = document.createElement("a-text");

    newMarker.setAttribute("value", el.properties.id);
    newMarker.setAttribute("type", "barcode");

    // newText.setAttribute("value", el.properties.id);
    // newText.setAttribute("rotation", "-90 0 0");
    // newText.setAttribute("z-offset", "1");
    // newText.setAttribute("color", "green");

    // newPlane.setAttribute("rotation", "-90 0 0");
    // newPlane.setAttribute("material", "color: green; opacity: 0.4;");
    // newPlane.setAttribute("position", "0 0.1 0");

    newMarker.addEventListener("markerFound", e => {
      document.getElementById(
        "descriptionH1"
      ).innerHTML = `Drive ${el.properties.id}`;
      document.getElementById("descriptionDiv").style.display = "block";

      console.log(`Here is what you scanned: ${e}`);
    });

    // newMarker.appendChild(newText);
    // newMarker.appendChild(newPlane);
    scene.appendChild(newMarker);
  });
}

fetchContact(link2);

function showDrive() {
  // let newDiv =
}

function closeDesc() {
  document.getElementById("descriptionDiv").style.display = "none";
}

// let cowiMarker = document.getElementById("cowiMarker");
// cowiMarker.addEventListener("markerFound", e => {
//   console.log(cowiMarker.childNodes[4]);
//   document.getElementById("scene").appendChild(cowiMarker.childNodes[4]);
// });

let cowiMarker = document.getElementById("cowiMarker");
cowiMarker.addEventListener("markerFound", e => {});
