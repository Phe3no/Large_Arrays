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
  getAllCountriesSortedByName();
  uniqueCountries.forEach((countrie) => {
    const parent = document.getElementById("list-sorted-countries");

    const newLi = document.createElement("li");
    const newLiContent = document.createTextNode(countrie);
    newLi.appendChild(newLiContent);

    parent.appendChild(newLi);
  });
};

document
  .getElementById("lsc-btn")
  .addEventListener("click", addAllCountriesSortedByName);
