

    
    var section = document.querySelector('section');
    var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      var superHeroesText = request.response;
      var superHeroes = JSON.parse(superHeroesText);
      populateHeader(superHeroes);
      showHeroes(superHeroes);
    }
  
    function showHeroes(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj['Gastronomia'];
        section.appendChild(myH1);
      


      var ComidasGastronomicas = jsonObj['ComidasGastronomicas'];
      for(var i = 0; i < ComidasGastronomicas.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Descripcion: ' + ComidasGastronomicas[i].Descripcicon;
      
      
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        section.appendChild(myArticle);
      }
    }

