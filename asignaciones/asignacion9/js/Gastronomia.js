

    
    var section = document.querySelector('section');
    var requestURL = 'https://luiselmer714.github.io/luiselmer/asignaciones/asignacion9/js/gastronomia.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      var superHeroesText = request.response;
      var superHeroes = JSON.parse(superHeroesText);
  
      showHeroes(superHeroes);
    }
  
    function showHeroes(jsonObj) {
       
      


      var ComidasGastronomicas = jsonObj['ComidasGastronomicas'];
      for(var i = 0; i < ComidasGastronomicas.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Descripcion: ' + ComidasGastronomicas[i].Descripcion;
      
      
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        section.appendChild(myArticle);
      }
    }

