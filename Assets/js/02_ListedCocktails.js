const container = document.getElementById('cocktail-cards');

//this is the fetch request which will derive search results for the cocktail receipes using a public API listed below

function getDrinkApi(drinkName) {
  const drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;


  //Fetches information and converts the data (response) into JSON which is a string form of data the system can interpret to promise an answer to the user

  fetch(drinkApi)
    .then(function (response) {
      return response.json();
    })

    //once the data is transferred the function now begins a loop to create the cocktail cards depending on the number of coctails or results available
    // (if 6 cocktails of same name) then the loop will create 6 cards)

    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.drinks.length; i++) {

        // this is the length of i in the loop (like explained above -> (if 6 cocktails containing keyword search name) then the loop will create 6 cards))

        var item = data.drinks[i];

        //creates a div element and set its arritubes to "class" named tile is-2 is-parent (which is the css framework method of bulma)

        var divEl = document.createElement("div");

        divEl.setAttribute("class", "tile is-2 is-parent");

        // thereafter within the div elemnt create a section element and set its arritubes to "class" named tile is-child box

        var sectionEl = document.createElement("section");

        sectionEl.setAttribute("class", "tile is-child box");

        // inside the section, the loop wil creat a h2 element which will contain the name of the of the cocktail and this name is derived from the item.strDrink of API 

        var h2El = document.createElement("h2");

        h2El.setAttribute("class", "title is-size-7 has-text-centered");

        h2El.innerHTML = item.strDrink;

        // After the heading of the cocktail we will display the image of the cocktail by creating a image element and using the source of this image from item.strDrinkThumb which is in the API information

        var imgEl = document.createElement("img");

        imgEl.setAttribute("src", item.strDrinkThumb);

        // the loop will then create a UL Elment which will include a list (li) of ingredients that the cocktail has, e.g. tequila, triple sec, lime juice.

        var ulEl = document.createElement('ul');

        // create a button named "more" so the user can click this button and get more information regarding this drink

        var detailBtnEl = document.createElement("button");

        detailBtnEl.setAttribute("class", "button is-info");

        detailBtnEl.innerHTML = " more ";

        // display to the html
        //container is the whole container named cocktail cards, and we must append the elements we created so it can appear on our html successfully
        container.appendChild(divEl);
        divEl.appendChild(sectionEl);
        sectionEl.appendChild(h2El);
        sectionEl.appendChild(imgEl);
        sectionEl.appendChild(ulEl);

        // for (var i = 1; i < 8; i++) {
        //   createLi(ulEl, item["strIngredient" + i], item["strMeasure" + i]);
        // }

        // function createLi(ulElInput, ingrdientName, measure) {
        //   if (!ingrdientName || !measure) {
        //     return;
        //   }
        //   var li = document.createElement('li');
        //   li.innerHTML = `<strong>${ingrdientName} </strong><span class="has-text-danger">${measure}<span>`;
        //   ulElInput.appendChild(li);
        // }

        //* pls decide if this should be here or the next page
        ulEl.innerHTML += `
                              <li><strong>${item.strIngredient1} </strong><span class="has-text-danger">${item.strMeasure1}<span></li>
                              <li><strong>${item.strIngredient2} </strong><span class="has-text-danger">${item.strMeasure2}<span></li>
                              <li><strong>${item.strIngredient3} </strong><span class="has-text-danger">${item.strMeasure3}<span></li>
                              <li><strong>${item.strIngredient4} </strong><span class="has-text-danger">${item.strMeasure4}<span></li>
                              <li><strong>${item.strIngredient5} </strong><span class="has-text-danger">${item.strMeasure5}<span></li>
                              <li><strong>${item.strIngredient6} </strong><span class="has-text-danger">${item.strMeasure6}<span></li>
                              <li><strong>${item.strIngredient7} </strong><span class="has-text-danger">${item.strMeasure7}<span></li>`;
            
        //add an event listener to the detailBtnEl we created above named "more"
        //when user clicks this button the document.location changes to "./03_Detail.html?id=" + item.idDrink;
        // the item.idDrink is then used to navigate to the next API which is getting in-depth information using the ID of the drink

        detailBtnEl.addEventListener('click', function (event) {
          document.location = "./03_Detail.html?id=" + item.idDrink;
        });
        //detailBtnEl is then appended to be considered part of the sectionEl (cocktail-cards)
        sectionEl.appendChild(detailBtnEl);
      }
    });
}

//get the drinkname and split it from the 2nd poition (0,1) and use this split tpo include the name the user searched 
var drinkName = document.location.search.split("=")[1];

//runs the whole loop and this input becomes the drinkName and the whole function is repeated again
getDrinkApi(drinkName);