



 
    
 
    var section = document.querySelector('section');
    var aside=document.querySelector('aside');
    var footer=document.querySelector('footer');
    var requestURL = 'https://luiselmer714.github.io/luiselmer/asignaciones/asignacion9/js/gastronomia.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      var turista = request.response;
      var sitiosturisticos = JSON.parse(turista);
      populateHeader(sitiosturisticos);
      gastronomia(sitiosturisticos);
      titulo(sitiosturisticos);
      masvisitados(sitiosturisticos);
      titulofestividad(sitiosturisticos);
      festividad(sitiosturisticos);
      
    }
  

    function populateHeader(jsonObj) {
      var mititulo = document.createElement('h1');
      mititulo.textContent = jsonObj['Gastronomia'];
      section.appendChild(mititulo);
     
    }


    function gastronomia(jsonObj) {
      var descripc = jsonObj['ComidasGastronomicas'];
      for(var i = 0; i < descripc.length; i++) {
        var miArticulo = document.createElement('article');
        var nombre = document.createElement('h2');
        var Descripcio = document.createElement('p');
        nombre.textContent = descripc[i].name;
        Descripcio.textContent = 'Descripcion: ' + descripc[i].Descripcion;
        miArticulo.appendChild(nombre);
        miArticulo.appendChild(Descripcio); 
        section.appendChild(miArticulo);
      }
    }

    
    function titulo(jsonObj) {
      var mititulo = document.createElement('h1');
      mititulo.textContent = jsonObj['sitiosmasvisitados'];
    footer.appendChild(mititulo);
     
      
    }


    function masvisitados(jsonObj) {
      var descripc  = jsonObj['SitiosVisitados'];
      for(var i = 0; i < descripc .length; i++) {
        var miArticulo = document.createElement('article');
        var titulo = document.createElement('h2');
        var descrip = document.createElement('p');
      
        titulo.textContent = descripc [i].name;
        descrip.textContent = 'Descripcion: ' + descripc [i].Descripcion;
      
      
        miArticulo.appendChild(titulo);
        miArticulo.appendChild(descrip);
       
       
        
        footer.appendChild(miArticulo);
      }
    }
    function titulofestividad(jsonObj) {
      var mititulo = document.createElement('h1');
      mititulo.textContent = jsonObj['festividad'];
    aside.appendChild(mititulo);
     
      
    }

    function festividad(jsonObj) {
      var descripc  = jsonObj['festivida'];
      for(var i = 0; i < descripc .length; i++) {
        var miArticulo = document.createElement('article');
        var nombre = document.createElement('h2');
        var Descripcio = document.createElement('p');
        nombre.textContent = descripc [i].name;
        Descripcio.textContent = 'Descripcion: ' + descripc [i].Descripcion;
        miArticulo.appendChild(nombre);
        miArticulo.appendChild(Descripcio);
        aside.appendChild(miArticulo);
      }
    }