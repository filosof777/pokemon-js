let elPokTemp = document.querySelector('.pok-template').content;
let elPokemon = document.querySelector('.pakman');


function pocedexFunc(i) {
  let elClone = elPokTemp.cloneNode(true);
  elClone.querySelector('.pok-img').src = i.img;
  elClone.querySelector('.pok-title').textContent = i.name;
  elClone.querySelector('.pok-text').textContent = `#${i.num}`;
  elPokemon.append(elClone);
}

function pocedexSort(start, end){
  elPokemon.innerHTML = "";
  for(i of pokemons) {
    if (i.id >= start && i.id <= end)pocedexFunc(i);
  } 
}

let elPagination = document.querySelector('.pagination');
console.log(elPagination.length);
elPagination.addEventListener('click', (e) => {
  if (e.target.textContent == 1) {pocedexSort(1, 20)}
  else if (e.target.textContent == 2) {pocedexSort(21, 40)}
  else if (e.target.textContent == 3) {pocedexSort(41, 60)}
  else if (e.target.textContent == 4) {pocedexSort(61, 80)}
  else if (e.target.textContent == 5) {pocedexSort(81, 100)}
});

pocedexSort(1, 100);