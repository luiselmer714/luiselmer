



 
    
 
    var section = document.querySelector('section');
    var aside=document.querySelector('aside');
    var footer=document.querySelector('footer');
    var requestURL = 'https://luiselmer714.github.io/luiselmer/asignaciones/asignacion9/js/gastronomia.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      var superHeroesText = request.response;
      var superHeroes = JSON.parse(superHeroesText);
      populateHeader(superHeroes);
      gastronomia(superHeroes);
      titulo(superHeroes);
      masvisitados(superHeroes);
      titulofestividad(superHeroes);
      festividad(superHeroes);
    }
  

    function populateHeader(jsonObj) {
      var myH1 = document.createElement('h1');
      myH1.textContent = jsonObj['Gastronomia'];
      section.appendChild(myH1);
     
      
    }


    function gastronomia(jsonObj) {
      var heroes = jsonObj['ComidasGastronomicas'];
      for(var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
     
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Descripcion: ' + heroes[i].Descripcion;
        myPara2.textContent = 'Age: ' + heroes[i].age;
      
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
       
        
        section.appendChild(myArticle);
      }
    }

    
    function titulo(jsonObj) {
      var myH1 = document.createElement('h1');
      myH1.textContent = jsonObj['sitiosmasvisitados'];
    footer.appendChild(myH1);
     
      
    }


    function masvisitados(jsonObj) {
      var heroes = jsonObj['SitiosVisitados'];
      for(var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
      
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Descripcion: ' + heroes[i].Descripcion;
      
      
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
       
       
        
        footer.appendChild(myArticle);
      }
    }
    function titulofestividad(jsonObj) {
      var myH1 = document.createElement('h1');
      myH1.textContent = jsonObj['festividad'];
    aside.appendChild(myH1);
     
      
    }

    function festividad(jsonObj) {
      var heroes = jsonObj['festivida'];
      for(var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
      
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Descripcion: ' + heroes[i].Descripcion;
      
      
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
       
       
        
        aside.appendChild(myArticle);
      }
    }