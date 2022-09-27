const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

const adults = randomPersonData.filter((adult) => {
  x = adult.birthday.dmy.split("/");
  if (!x[0] < day && !x[1] < month && x[2] >= year + 18) console.log(adult);
});
console.log(adults);

const expirationDate = function () {
  const cCardsExpireWithinYear = randomPersonData.filter((date) => {
    const x = date.credit_card.expiration.split("/");
    if (
      (x[0] >= month && 20 + x[1] == year) ||
      (x[0] <= month && 20 + x[1] == year + 1)
    )
      return x;
  });
  return cCardsExpireWithinYear;
};

const sortOnExpirationDate = expirationDate().sort((sortering) => {
  console.log("Hello world");
});

console.log(expirationDate());
