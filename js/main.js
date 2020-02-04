let link =
  "https://cmv.cowi.com/geoserver/cmv/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cmv:dk_wfs_annotation_naithani&maxFeatures=50&outputFormat=application%2Fjson";

function fetchContact(x) {
  fetch(x)
    .then(res => res.json())
    .then(fillHome);
}

function fillHome(json) {
  console.log(json);
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
