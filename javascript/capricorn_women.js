const allWomenOver30 = randomPersonData.filter(
  (person) => person.gender === "female" && person.age > 30
);

const sortByName = (name1, name2) => {
  const nameA = name1.name.toUpperCase();
  const nameB = name2.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

const checkForCapricorn = (list) => {
  const allCapricornWomanOver30 = [];
  list.forEach((item) => {
    //knip de birthday.dmy in 3 stukken en stop in een array
    const date = item.birthday.dmy.split("/");
    //check for capricorn groter of gelijk aan 22 12 --OF-- kleiner of gelijk aan 19 01
    if ((date[0] >= 22 && date[1] == 12) || (date[0] <= 19 && date[1] == 1)) {
      allCapricornWomanOver30.push(item);
    }
  });
  return allCapricornWomanOver30;
};

const addCapricornWomanOver30ToHTML = function () {
  const sortedByName = allWomenOver30.sort(sortByName);
  const list = checkForCapricorn(sortedByName);
  parent = document.getElementById("list-capricorn-women");
  list.forEach((item) => {
    const newImg = document.createElement("img");
    newImg.src = item.photo;

    const newSpan = document.createElement("span");
    newSpan.innerHTML = item.name + " " + item.surname;

    const newLi = document.createElement("li");
    newLi.appendChild(newImg);
    newLi.appendChild(newSpan);

    parent.appendChild(newLi);
  });
};

//eventlistener
document
  .getElementById("capricorn-women-btn")
  .addEventListener("click", addCapricornWomanOver30ToHTML);
