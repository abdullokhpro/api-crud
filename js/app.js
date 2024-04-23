const API_URL = "https://dummyjson.com/users";
const wrapper = document.querySelector(".wrapper");

async function fetchApi(url) {
  let data = await fetch(url, {
    method: "GET",
  });

  data
    .json()
    .then((res) => spredApi(res))
    .catch((res) => console.log(res));
}

fetchApi(API_URL);

function spredApi(data) {
  let book = "";
  data.users.forEach((element) => {
    book += `
        <div class="book">
          <div class="book__content">
            <p class="book__address book-text">${
              element.address.address + " " + element.address.city
            }</p>
            <p class="book__card book-text">${element.bank.cardNumber}</p>
            <p class="book__blood book-text">${element.bloodGroup}</p>
            <p class="book__company book-text">${element.company.name}</p>
            <p class="book__crypto book-text">${element.crypto.coin}</p>
            <p class="book__height book-text">${element.height}</p>
            <p class="book__weight book-text">${element.weight}</p>
          </div>
          <div class="cover">
            <div class="cover__img">
              <img src="${element.image}" alt="" />
            </div>
            <div class="cover__content">
              <p class="cover__firstname">${element.firstName}</p>
              <p class="cover__surname">${element.lastName}</p>
              <p class="cover__maideName">${element.maidenName}</p>
              <p class="cover__age">${element.age}</p>
              <p class="cover__university">${element.university}</p>
              <p class="cover__phone">${element.phone}</p>
              <p class="cover__email">${element.email}</p>
              <p class="cover__gender">${element.gender}</p>
            </div>

            <h4 class="cover__title">Hover the Card</h4>
          </div>
        </div>
    `;
  });

  wrapper.innerHTML = book;
}
