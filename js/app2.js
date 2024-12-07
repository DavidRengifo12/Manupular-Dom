var header = document.querySelector("#header")
console.log(header)

var nav = document.createElement('nav')
header.appendChild(nav)



var nav1 = document.createElement('nav')
header.appendChild(nav1)


var h3 = document.createElement('h3')
h3.innerText='MANIPULACION DEL DOM (DOCUMENT OBJECT MODEL)'
nav1.appendChild(h3)

var nav2 = document.createElement('nav')
header.appendChild(nav2)

var img = document.createElement('img')
img.src = 'img/dom.png'
nav2.appendChild(img)

var ul = document.createElement('ul')
nav.appendChild(ul)

var li = document.createElement('li')
ul.appendChild(li)

var li2 = document.createElement('li')
ul.appendChild(li2)

var li3 = document.createElement('li')
ul.appendChild(li3)

var a = document.createElement('a')
a.href ='https://www.facebook.com/?locale=es_LA'
a.textContent = 'IR A FACEBOOK'
li.appendChild(a)


var a1 = document.createElement('a')
a1.href ='https://www.youtube.com/watch?v=JtldCLGKqJ8'
a1.textContent = 'IR A YOUTUBE'
li2.appendChild(a1)

var a2 = document.createElement('a')
a2.href ='https://www.instagram.com/db_worldes/?igsh=MXVwdTJubHI5ajN4Yw%3D%3D#'
a2.textContent = 'IR A INSTAGRAM'
li3.appendChild(a2)







//ESTILOS HEADER
a.style.color = 'white'
a1.style.color = 'white'
a2.style.color = 'white'

img.style.width = '100px'
img.style.borderRadius='15px'
img.style.margin='10px'

header.style.borderRadius="15px"
header.style.display= 'flex'
header.style.flexWrap='wrap'
header.style.justifyContent= 'space-around'
header.style.backgroundColor='black'
h3.style.color='white'
nav.style.backgroundColor = 'rgba(169, 169, 169, 0.6)'

nav.style.margin ='15px'
nav.style.borderRadius='15px'
ul.style.display ='flex'
ul.style.flexWrap = 'wrap'
ul.style.justifyContent ='space-around'

li.style.margin='10px'
li2.style.margin='10px'
li3.style.margin='10px'



li.style.listStyle='none'
li2.style.listStyle='none'
li3.style.listStyle='none'



//MAIN
var main = document.querySelector('#main')
console.log(main)

var h1 = document.createElement("h1")
console.log(h1)

var tituloh1=document.createTextNode('PRODUCTOS');
console.log(tituloh1);
main.appendChild(h1);
h1.appendChild(tituloh1)

var section = document.createElement("section");
console.log(section)
main.appendChild(section)

var article = document.createElement('article')
section.appendChild(article)

var article2 = document.createElement('article')
section.appendChild(article2)


var article3 = document.createElement('article')
section.appendChild(article3)



var parrafo1 = document.createTextNode('Hola soy Goku!! en el parrafo 1 y articulo1 ')

var parrafo2 = document.createTextNode('Hola soy  Vegeta!! en el parrafo 2 y articulo2  ')


var parrafo3 = document.createTextNode('Hola soy Piccolo!! en el parrafo 3 y articulo3 ')

var p1 = document.createElement('p')
article.appendChild(p1)
p1.appendChild(parrafo1)


var p2 = document.createElement('p')
article2.appendChild(p2)
p2.appendChild(parrafo2)

var p3 = document.createElement('p')
article3.appendChild(p3)
p3.appendChild(parrafo3)






var img2 = document.createElement('img');
img2.src = 'img/goku.avif'; 
article.appendChild(img2)

img2.style.width= '300px'


var img3 = document.createElement('img')
img3.src = 'img/vegeta.jpg'
article2.appendChild(img3)

img3.style.width='300px'


var img4 = document.createElement('img')
img4.src = 'img/picolo.jpg'
article3.appendChild(img4)

img4.style.width='300px'


var section2 = document.createElement("section");
console.log(section2)
main.appendChild(section2)

var article4 = document.createElement('article')

var article5 = document.createElement('article')
section2.appendChild(article4)
section2.appendChild(article5)


var article6 = document.createElement('article')
section2.appendChild(article6)


var img5 = document.createElement('img');
img5.src = 'img/goten.avif'; 
article4.appendChild(img5)

img5.style.width= '300px'


var img6 = document.createElement('img')
img6.src = 'img/trunks.jpg'
article5.appendChild(img6)

img6.style.width='300px'


var img7 = document.createElement('img')
img7.src = 'img/gohan.avif'
article6.appendChild(img7)

img7.style.width='305px'



//ESTILOS MAIN
main.style.backgroundColor = 'rgba(144, 238, 144, 0.6)';
main.style.border = "1px solid lightblue"
main.style.borderRadius='12px'
main.style.width = "100%"
h1.style.color = "lightyellow";
h1.style.textAlign = "center"

section.style.borderRadius = "15px ";
section.style.margin = "10px";
section.style.display = "flex";
section.style.backgroundColor = 'rgba(173, 216, 230, 0.6)';
section.style.display= 'flex'
section.style.flexWrap='wrap'
section.style.justifyContent= 'space-around'

article.style.margin = "12px"
article2.style.margin = "10px"
article3.style.margin = "10px"


section2.style.borderRadius = "15px";
section2.style.margin = "10px";
section2.style.display = "flex";
section2.style.backgroundColor = "rgba(173, 216, 230, 0.6)";
section2.style.display= 'flex'
section2.style.flexWrap='wrap'
section2.style.justifyContent= 'space-around'


article4.style.margin = '10px'
article5.style.margin = '10px'

article6.style.margin = '10px'
article6.style.borderRadius='18px'



img2.style.borderRadius='12px'
img3.style.borderRadius='12px'
img4.style.borderRadius='12px'
img5.style.borderRadius='12px'
img6.style.borderRadius='12px'
img7.style.borderRadius='12px'




//EL FOOTER
var footer = document.querySelector('#footer');
console.log(footer);

var h1 = document.createElement("h1");
console.log(h1);

var tituloh1 = document.createTextNode('CONTACTOS');
footer.appendChild(h1);
h1.appendChild(tituloh1);

var section3 = document.createElement('section');
console.log(section3);
footer.appendChild(section3);

var article7 = document.createElement('article');
section3.appendChild(article7);

var article8 = document.createElement('article');
section3.appendChild(article8);

// Crear un span para poder aplicar estilo al texto
var texto = document.createElement('span');
texto.textContent = 'rengifodavi30@gmail.com';
article7.appendChild(texto);

var texto2 = document.createElement('span');
texto2.textContent = '3205403565';
article8.appendChild(texto2);

// ESTILOS FOOTER
footer.style.display = 'flex'; 
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
footer.style.flexDirection = 'column';
footer.style.borderRadius ='12px' 

h1.style.color = 'white';
h1.style.textAlign = 'center';

section3.style.display = 'flex';
section3.style.justifyContent = 'center';
section3.style.margin = '10px'; 

article7.style.border = '1px solid white';
article7.style.borderRadius='5px'
article7.style.textAlign = 'center';
article7.style.margin = '5px'; // Espacio entre los artículos

article8.style.border = '1px solid white';
article8.style.borderRadius='5px'
article8.style.textAlign = 'center';
article8.style.margin = '5px'; // Espacio entre los artículos

// Estilos para el texto dentro de los spans
texto.style.color = 'white';
texto.style.fontWeight = 'bold';

texto2.style.color = 'white';
texto2.style.fontWeight = 'bold';
