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

        let item = data.drinks[i];

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

        var ulElInput = document.createElement('ul');

        // create a button named "more" so the user can click this button and get more information regarding this drink

        var detailBtnEl = document.createElement("button");

        detailBtnEl.setAttribute("class", "button is-info");
        detailBtnEl.setAttribute('data-drink-id', item.idDrink);

       // detailBtnEl.setAttribute("id", item.idDrink);

        detailBtnEl.innerHTML = " more ";

       // var drinkID = document.getElementById("item.idDrink");

        // display to the html
        //container is the whole container named cocktail cards, and we must append the elements we created so it can appear on our html successfully
        container.appendChild(divEl);
        divEl.appendChild(sectionEl);
        sectionEl.appendChild(h2El);
        sectionEl.appendChild(imgEl);
        sectionEl.appendChild(ulElInput);

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

        var ingredient1li = document.createElement('li');
        var ingredient2li = document.createElement('li');
        var ingredient3li = document.createElement('li');
        var ingredient4li = document.createElement('li');
        var ingredient5li = document.createElement('li');
        var ingredient6li = document.createElement('li');
        var ingredient7li = document.createElement('li');
        var ingredient8li = document.createElement('li');
        var ingredient9li = document.createElement('li');
        var ingredient10li = document.createElement('li');
        var ingredient11li = document.createElement('li');
        var ingredient12li = document.createElement('li');
        var ingredient13li = document.createElement('li');
        var ingredient14li = document.createElement('li');
        var ingredient15li = document.createElement('li');

        ingredient1li.innerHTML = `<strong>${item.strIngredient1} </strong><span class="has-text-danger">${item.strMeasure1}<span>`;
        ingredient2li.innerHTML = `<strong>${item.strIngredient2} </strong><span class="has-text-danger">${item.strMeasure2}<span>`;
        ingredient3li.innerHTML = `<strong>${item.strIngredient3} </strong><span class="has-text-danger">${item.strMeasure3}<span>`;
        ingredient4li.innerHTML = `<strong>${item.strIngredient4} </strong><span class="has-text-danger">${item.strMeasure4}<span>`;
        ingredient5li.innerHTML = `<strong>${item.strIngredient5} </strong><span class="has-text-danger">${item.strMeasure5}<span>`;
        ingredient6li.innerHTML = `<strong>${item.strIngredient6} </strong><span class="has-text-danger">${item.strMeasure6}<span>`;
        ingredient7li.innerHTML = `<strong>${item.strIngredient7} </strong><span class="has-text-danger">${item.strMeasure7}<span>`;
        ingredient8li.innerHTML = `<strong>${item.strIngredient8} </strong><span class="has-text-danger">${item.strMeasure8}<span>`;
        ingredient9li.innerHTML = `<strong>${item.strIngredient9} </strong><span class="has-text-danger">${item.strMeasure9}<span>`;
        ingredient10li.innerHTML = `<strong>${item.strIngredient10} </strong><span class="has-text-danger">${item.strMeasure10}<span>`;
        ingredient11li.innerHTML = `<strong>${item.strIngredient11} </strong><span class="has-text-danger">${item.strMeasure11}<span>`;
        ingredient12li.innerHTML = `<strong>${item.strIngredient12} </strong><span class="has-text-danger">${item.strMeasure12}<span>`;
        ingredient13li.innerHTML = `<strong>${item.strIngredient13} </strong><span class="has-text-danger">${item.strMeasure13}<span>`;
        ingredient14li.innerHTML = `<strong>${item.strIngredient14} </strong><span class="has-text-danger">${item.strMeasure14}<span>`;
        ingredient15li.innerHTML = `<strong>${item.strIngredient15} </strong><span class="has-text-danger">${item.strMeasure15}<span>`;

        if (item.strIngredient1 && item.strMeasure1){
          ulElInput.appendChild(ingredient1li)
        }

        if (item.strIngredient2 && item.strMeasure2){
          ulElInput.appendChild(ingredient2li)
        }

        if (item.strIngredient3 && item.strMeasure3){
          ulElInput.appendChild(ingredient3li)
        }

        if (item.strIngredient4 && item.strMeasure4){
          ulElInput.appendChild(ingredient4li)
        }

        if (item.strIngredient5 && item.strMeasure5){
          ulElInput.appendChild(ingredient5li)
        }

        if (item.strIngredient6 && item.strMeasure6){
          ulElInput.appendChild(ingredient6li)
        }

        if (item.strIngredient7 && item.strMeasure7){
          ulElInput.appendChild(ingredient7li)
        }

        if (item.strIngredient8 && item.strMeasure8){
          ulElInput.appendChild(ingredient8li)
        }

        if (item.strIngredient9 && item.strMeasure9){
          ulElInput.appendChild(ingredient9li)
        }

        if (item.strIngredient10 && item.strMeasure01){
          ulElInput.appendChild(ingredient10li)
        }

        if (item.strIngredient11 && item.strMeasure11){
          ulElInput.appendChild(ingredient11li)
        }

        if (item.strIngredient12 && item.strMeasure12){
          ulElInput.appendChild(ingredient12li)
        }

        if (item.strIngredient13 && item.strMeasure13){
          ulElInput.appendChild(ingredient13li)
        }

        if (item.strIngredient14 && item.strMeasure14){
          ulElInput.appendChild(ingredient14li)
        }

        if (item.strIngredient15 && item.strMeasure15){
          ulElInput.appendChild(ingredient15li)
        }
         
        //* pls decide if this should be here or the next page
        //ulEl.innerHTML += `
        //                      <li><strong>${item.strIngredient1} </strong><span class="has-text-danger">${item.strMeasure1}<span></li>
        //                      <li><strong>${item.strIngredient2} </strong><span class="has-text-danger">${item.strMeasure2}<span></li>
        //                      <li><strong>${item.strIngredient3} </strong><span class="has-text-danger">${item.strMeasure3}<span></li>
        //                      <li><strong>${item.strIngredient4} </strong><span class="has-text-danger">${item.strMeasure4}<span></li>
        //                      <li><strong>${item.strIngredient5} </strong><span class="has-text-danger">${item.strMeasure5}<span></li>
        //                      <li><strong>${item.strIngredient6} </strong><span class="has-text-danger">${item.strMeasure6}<span></li>
        //                      <li><strong>${item.strIngredient7} </strong><span class="has-text-danger">${item.strMeasure7}<span></li>`;
            
        //add an event listener to the detailBtnEl we created above named "more"
        //when user clicks this button the document.location changes to "./03_Detail.html?id=" + item.idDrink;
        // the item.idDrink is then used to navigate to the next API which is getting in-depth information using the ID of the drink

        console.log(item.idDrink, detailBtnEl);
        detailBtnEl.addEventListener('click', function (event) {
          event.preventDefault();
          document.location = "./03_Detail.html?id=" + event.target.getAttribute('data-drink-id');
        });
        //detailBtnEl is then appended to be considered part of the sectionEl (cocktail-cards)
        sectionEl.appendChild(detailBtnEl);
      }
    });
}


//btns = document.getElementsByClassName("saveBtn");
//for (var i = 0; i < btns.length; i++) {
//    btns[i].addEventListener("click", function () {
  //Add function here
//    });
//}


//get the drinkname and split it from the 2nd poition (0,1) and use this split tpo include the name the user searched 
var drinkName = document.location.search.split("=")[1];

//runs the whole loop and this input becomes the drinkName and the whole function is repeated again
getDrinkApi(drinkName);