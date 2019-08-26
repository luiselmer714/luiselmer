



 
    
 
    var section = document.querySelector('section');
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
      masvisitados(superHeroes);

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
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Descripcion: ' + heroes[i].Descripcion;
        myPara2.textContent = 'Age: ' + heroes[i].age;
      
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
       
        
        section.appendChild(myArticle);
      }
    }



    function masvisitados(jsonObj) {
      var heroes = jsonObj['SitiosVisitados'];
      for(var i = 0; i < heroes.length; i++) {
     
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Descripcion: ' + heroes[i].Descripcion;
        myPara2.textContent = 'Age: ' + heroes[i].age;
      
        footer.appendChild(myH2);
        footer.appendChild(myPara1);
        footer.appendChild(myPara2);
       
        
        footer.appendChild(myArticle);
      }
    }