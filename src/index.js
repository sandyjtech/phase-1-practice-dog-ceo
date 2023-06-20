const imgUrl = "image/random/4";
const breedUrl = "list/all";
//Challenge 1
//This repository includes an index.html file that loads an index.js file.
//const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//Add JavaScript that:
//on page load, fetches the images using the url above ⬆️
//parses the response as JSON
//adds image elements to the DOM for each 🤔 image in the array
document.addEventListener("DOMContentLoaded", () => {
  //   function fetchDogs() {
  //     fetch(`https://dog.ceo/api/breeds/${imgUrl}`)
  //       .then((response) => response.json())
  //       .then((data) => postDogs(data.message));
  //   }
  function fetchBreeds() {
    fetch(`https://dog.ceo/api/breeds/${breedUrl}`)
      .then((response) => response.json())
      .then((data) => postBreeds(Object.keys(data.message)));
  }
  //   function postDogs(dogsImages) {
  //     //Find the container where we attach everything to
  //     const dogContainer = document.getElementById("dog-image-container");
  //     const dogLists = document.getElementById("dog-breeds");

  //     dogsImages.forEach((dog) => {
  //       //Create all necessary elements
  //       let dogImage = document.createElement("img");
  //       //Attach to src attribute
  //       dogImage.src = dog;
  //       //Attach to parent element
  //       dogContainer.appendChild(dogImage);
  //     });
  //   }
  function postBreeds(breeds) {
    const dogBreeds = document.getElementById("dog-breeds");

    breeds.forEach((breed) => {
      const breedItem = document.createElement("li");
      breedItem.textContent = breed;
      dogBreeds.appendChild(breedItem);

      const breedName = breedItem.innerHTML.toLowerCase();

      breedItem.addEventListener("click", () => {
        breedItem.style.color = "pink";
      });

      //add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown
      const dropDownContainer = document.getElementById("breed-dropdown");

      dropDownContainer.addEventListener("change", () => {
        if (breedName.startsWith(dropDownContainer.value)) {
          breedItem.style.display = "block";
        } else {
          breedItem.style.display = "none";
        }
      });
    });
  }

  fetchBreeds();
});
