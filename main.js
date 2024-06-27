function drinkMe()
 {    let name = prompt("What's your name?");
        let coffee = prompt("Do you like coffee?");  
      coffee = coffee.toLowerCase();    coffee = coffee.trim();  
      if (coffee === "yes") {      let favoriteDrink = prompt("What's your favorite drink?");
              alert(    "Your cool! Let's be friends "       ); 
       } else {      alert(        "What are you even doing here?! "      );
         }  }  let button = document.querySelector("button");  button.addEventListener("click", drinkMe);