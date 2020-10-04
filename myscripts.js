let recipe = {
    "context": "https://tasty.co/recipe/mille-crepe-cake",
    "name": "Gateau Mille Crepes Cake",
    "author": "Jody Duits & Hannah Williams",
    "post":"Jing Dong",
    "cookTime": "1-1.5 hour",
    "datePublished": "2020-09-25",
    
    
    "description": "Gateau Mille Crepes is a classic French cake that translates to thousand crepe cake. The crepes are layered with maple-scotch pastry cream to form a layer cake, and the top of the cake is covered in a thin layer of crisp caramelized sugar.",
    
    
   "crepe": {
  "a":"1 cup heavy cream",
  "b":"4 tablespoons sugar",
  "c":"6 oz chocolate",
  "d":"1 tablespoon butter",
  "e":"1/4 cup powdered sugar, optional for topping"
    },
    
   "ganache": {
  "a":"6 tablespoons butter",
  "b":"3 cups milk",
  "c":"6 eggs",
  "d":"1.5 cups flour",
  "e":"2/3 cup cocoa powder",
  "f":"7 tablespoons sugar",
  "g":"4 cups whipped cream"
    },
    
    
    "nutrition": {
      "@type": "NutriInfo",
      "calories": "658 (8 servings)",
      "fat": "42g",
      "carbs":"58g",
      "fiebr":"3g",
      "sugar":"35g",
      "protein":"1g"
    },
    "prepTime": "15 Minutes",
    "Instructions": {
     "a": "Make the crepes by melting the butter and allowing it to brown slightly. Set aside.",
     "b": "In the same pot, warm the milk. Remove from heat.",
     "c": "In a bowl, whisk flour, cocoa powder, and sugar. Mix in eggs.",
     "d": "Gradually mix in butter and warm milk. Chill.",
     "e": "On a nonstick skillet over medium heat, pour ¼ cup (60 ml) of crepe batter, and tip the pan to cover the entire bottom surface. Cook until bottom surface of crepe begins to brown, then flip.",
     "f": "Cool crepe. Repeat until all of the crepe batter is used.",
     "g": "Stack crepes on top of each other, with whipped cream between each layer. Once assembled, trim edges for a cleaner look, if desired.",
     "h": "For the ganache, bring the heavy cream and sugar to a boil, and pour over chocolate and butter. Let cool.",
     "i": "Spread over the crepe cake.",   
     "j": "Top with sifted powdered sugar (optional).",
     "k":"enjoy!"
    },
    "recipeYield": "8 Serving",
  }
  document.getElementById("recipeYield").innerText = recipe.recipeYield;
  document.getElementById("context").innerText = recipe.context;
  document.getElementById("name").innerText = recipe.name;
  document.getElementById("description").innerText = recipe.description;
  document.getElementById("author").innerText = recipe.author;
  document.getElementById("post").innerText = recipe.post;
  document.getElementById("cookTime").innerText = recipe.cookTime;
  document.getElementById("datePublished").innerText = recipe.datePublished;
  document.getElementById("prepTime").innerText=recipe.prepTime;
  
  document.getElementById("crepe.a").innerText = recipe.crepe.a;
  document.getElementById("crepe.b").innerText = recipe.crepe.b;
  document.getElementById("crepe.c").innerText = recipe.crepe.c;
  document.getElementById("crepe.d").innerText = recipe.crepe.d;
  document.getElementById("crepe.e").innerText = recipe.crepe.e;
  
  document.getElementById("ganache.a").innerText = recipe.ganache.a;
  document.getElementById("ganache.b").innerText = recipe.ganache.b;
  document.getElementById("ganache.c").innerText = recipe.ganache.c;
  document.getElementById("ganache.d").innerText = recipe.ganache.d;
  document.getElementById("ganache.e").innerText = recipe.ganache.e;
  document.getElementById("ganache.f").innerText = recipe.ganache.f;
  document.getElementById("ganache.g").innerText = recipe.ganache.g;
  
  document.getElementById("Instructions.a").innerText = recipe.Instructions.a;
  document.getElementById("Instructions.b").innerText = recipe.Instructions.b;
  document.getElementById("Instructions.c").innerText = recipe.Instructions.c;
  document.getElementById("Instructions.d").innerText = recipe.Instructions.d;
  document.getElementById("Instructions.e").innerText = recipe.Instructions.e;
  document.getElementById("Instructions.f").innerText = recipe.Instructions.f;
  document.getElementById("Instructions.g").innerText = recipe.Instructions.g;
  document.getElementById("Instructions.h").innerText = recipe.Instructions.h;
  document.getElementById("Instructions.i").innerText = recipe.Instructions.i;
  document.getElementById("Instructions.j").innerText = recipe.Instructions.j;
  document.getElementById("Instructions.k").innerText = recipe.Instructions.k;
  
  
  