var detailCard = document.getElementById("detail_card");

function getdetailAPI(drinkID) {
    var detailAPI = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;
      //this is the fetch request will get us the search results for the cocktail and meal receipes
  
      fetch(detailAPI)
        .then(function (response) {
          return response.json();
        })
        .then (function (data){ 
          console.log(data);

          var nameEl = data.drinks[0].strDrink;
          var imgEl = data.drinks[0].strDrinkThumb;
          var infoEl = data.drinks[0].strInstructions;

          //ingredients element could be relocated from cocktails.js

          console.log(nameEl);
          console.log(imgEl);

          var imgCard = document.createElement("div");
          imgCard.setAttribute("class", "tile is-parent is-4")

          var displayImg = document.createElement("img");
          displayImg.setAttribute("class", "tile is-child box has-text-centered")
          displayImg.setAttribute("src", imgEl);

          var detailEl = document.createElement("div");
          detailEl.setAttribute("class", "tile is-vertical is-parent is-8");

          var descriptionEl = document.createElement("div");
          descriptionEl.setAttribute("class", "tile is-child box")

          var nameCard = document.createElement("p");
          nameCard.setAttribute("class", "title");
          nameCard.innerHTML = nameEl;

          var heartEl = document.createElement("strong");
          heartEl.setAttribute("id", "saveBtn")
          heartEl.innerHTML = " ❤️ ";
          nameCard.appendChild(heartEl); 

          var moreInfo = document.createElement("p");
          moreInfo.setAttribute("class", "subtitle");
          moreInfo.innerHTML = infoEl;
        
detailCard.appendChild(detailEl);
detailEl.appendChild(descriptionEl);
descriptionEl.appendChild(nameCard);
descriptionEl.appendChild(moreInfo);
detailCard.appendChild(imgCard);
imgCard.appendChild(displayImg);

var favourites = JSON.parse(localStorage.getItem('favourites')) || [];
console.log(favourites);

heartEl.addEventListener("click", function() { 
  
  var cocktail = {
    cocktail: nameEl,
  };
  
  favourites.push(cocktail);
  console.log(favourites);
  favourites.splice(12);
  localStorage.setItem("favourites",JSON.stringify(favourites));

  document.location = "./04_Favourites.html"
})

})
}



//var drinkID = document.getElementbyId("drinkID");

//getdetailAPI(drinkID);

var drinkID = document.location.search.split("=")[1];

console.log(drinkID);

getdetailAPI(drinkID);