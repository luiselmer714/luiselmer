//hora
function startTime()
{
    today=new Date();

    h=today.getHours();

    m=today.getMinutes();

    s=today.getSeconds();

    m=checkTime(m);

    s=checkTime(s);

    document.getElementById('reloj').innerHTML=h+":"+m+":"+s;

    t=setTimeout('startTime()',500);
}



 function checkTime(i)
  
 {if (i<10)
    {

    i="0" + i;
    
    }
    
    return i;
 }

 window.onload=function()
  {
     startTime();
  }



var mm=new Date();
var m2 = mm.getDay() + 1;
var mesok = (m2 < 5) ? '0' + m2 : m2;
var mesok=new Array(7);
mesok[0]="Domingo";
mesok[1]="Lunes";
mesok[2]="Martes";
mesok[3]="Miercoles";
mesok[4]="Jueves";
mesok[5]="Viernes";
mesok[6]="Sabado";

document.write("Dia: " + mesok[mm.getDay()]);


var d = new Date();
document.write(' Fecha: '+d.getDate(),' Año: '+d.getFullYear() );

var mm=new Date();
var m2 = mm.getMonth() + 1;
var mesok = (m2 < 10) ? '0' + m2 : m2;
var mesok=new Array(12);
mesok[0]="Enero";
mesok[1]="Febrero";
mesok[2]="Marzo";
mesok[3]="Abril";
mesok[4]="Mayo";
mesok[5]="Junio";
mesok[6]="Julio";
mesok[7]="Agosto";
mesok[8]="Septiembre";
mesok[9]="Octubre";
mesok[10]="Noviembre";
mesok[11]="Diciembre";
document.write("Mes: " + mesok[mm.getMonth()]);




