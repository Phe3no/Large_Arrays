const uniqueCountries = [];

const getAllCountriesSortedByName = () => {
  randomPersonData.forEach((elem) => {
    if (!uniqueCountries.includes(elem.region)) {
      uniqueCountries.push(elem.region);
    }
  });
  uniqueCountries.sort();
  console.log(uniqueCountries);
};

const addAllCountriesSortedByName = () => {
  uniqueCountries.forEach((countrie) => {
    const parent = document.getElementById("list-sorted-countries");
    const newLi = document.createElement("li");
    const newLiContent = document.createTextNode(countrie);
    newLi.appendChild(newLiContent);
    parent.appendChild(newLi);
  });
};

const addAllCountriesSortedByNameListener = () => {
  const btn = document.getElementById("lsc-btn");
  btn.addEventListener("click", () => {
    addAllCountriesSortedByName();
  });
};

getAllCountriesSortedByName();
addAllCountriesSortedByNameListener();
