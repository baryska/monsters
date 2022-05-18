const template = document.querySelector(".template");
const cardList = document.querySelector(".card-list");

const getMonsters = async () => {
  const response = await fetch(
    "https://628516f23060bbd347447ea0.mockapi.io/monsters"
  );
  const data = await response.json();
  return data;
};

const generateCards = (monsters) => {
  let i = 0;
  while (i < monsters.length) {
    const clone = template.cloneNode(true);
    const monsterImage = clone.querySelector(".monster-img");
    monsterImage.src = `https://robohash.org/${i}?set=set1`;
    cardList.appendChild(clone);
    console.log(monsterImage);
    i++;
  }
};

const init = async () => {
  const monsters = await getMonsters();
  generateCards(monsters);
};

init();
