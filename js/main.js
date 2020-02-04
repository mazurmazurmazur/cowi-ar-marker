let link = "https://my.api.mockaroo.com/users.json?key=a99e7550";

function fetchContact(x) {
  fetch(link)
    .then(res => res.json())
    .then(fillHome);
}

function fillHome(json) {
  console.log(json);

  document.getElementById("scene");
  json.forEach(el => {
    let newMarker = document.createElement("a-marker");
    let newText = document.createElement("a-text");

    newMarker.setAttribute("type", "barcode");
    newMarker.setAttribute("value", el.id);
    newText.setAttribute("value", el.first_name);
    newText.setAttribute("rotation", "-90 0 0");
    newText.setAttribute("geometry", "primitive:plane");
    newText.setAttribute("color", "red");
    newMarker.appendChild(newText);
    scene.appendChild(newMarker);
  });
  // let acf = json[0].acf;
  // let infographics = Object.entries(acf.infographics);
  // //selecting json area
  // let topTitleJSON = json[0].acf.main_title;
  // let buttonNextJSON = acf.next_page;

  // let homeDescJSON = json[0].acf.main_description;
  // //assigning json content to DOM
  // topTitle.innerHTML = topTitleJSON;
  // homeDesc.innerHTML = homeDescJSON;
  // buttonNext.innerHTML = buttonNextJSON;
  // let aboutContent = document.getElementById("about-content");

  // infographics.forEach(infographic => {
  //   //creating DOM Elements
  //   let newGridItem = document.createElement("div");
  //   let newIGTitle = document.createElement("p");
  //   let newIG = document.createElement("img");

  //   //inserting elements inside containerDiv
  //   newGridItem.appendChild(newIGTitle);
  //   newGridItem.appendChild(newIG);

  //   //assigning classnames
  //   newGridItem.classList.add("grid-item");
  //   newGridItem.classList.add("double");

  //   newIGTitle.classList.add("sectionTitle");
  //   newIGTitle.classList.add("subtitle");
  //   newIGTitle.classList.add("centred");

  //   //assigning content to DOM Elements
  //   if (infographic[1].image) {
  //     newIG.src = infographic[1].image;
  //     newIGTitle.innerHTML = infographic[1].title;
  //     aboutContent.appendChild(newGridItem);
  //   }
  // });
}

fetchContact(link);
