const container = document.getElementById('container');

function getDrinkApi(drinkName) {
  const drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;
    //this is the fetch request will get us the search results for the cocktail and meal receipes

    fetch(drinkApi)
      .then(function (response) {
        return response.json();
      })
      .then (function (data){ 
        console.log(data);
        for (var i = 0; i < data.drinks.length; i++) {
            var div = document.createElement("div");

            var item = data.drinks[i];

            // display to html teh results
            div.innerHTML += `
                <div class="tile is-2 is-vertical is-parent"> <!-- https://bulma.io/documentation/layout/tiles/ and use javascript for it-->
                    <div style = "display: block; width: auto" class="tile is-child box">
                        <p class="title">${item.strDrink}</p>
                            <figure class="image is-256x256"> <!-- https://bulma.io/documentation/elements/image/ -->
                                <img src="${item.strDrinkThumb}"></img> <!--replace it with the photo from the API-->
                            </figure>
                            
                            <ul> 
                                <li>AAAAA</li> <!--pls remove it and use javascript for the listed item-->
                                <li>BBBBB</li> <!--pls remove it and use javascript for the listed item-->
                                <li>CCCCC</li> <!--pls remove it and use javascript for the listed item-->
                                <li>DDDDD</li> <!--pls remove it and use javascript for the listed item-->
                            </ul>
                    </div>       
                </div>`;

            container.append(div);
        }
        
      });
}


  var drinkName = document.location.search.split("=")[1];

  getDrinkApi(drinkName);

// // // fetchButton.addEventListener('click', getApi);

// // // local storage

// function getParameter () {

//         let params 
// }

