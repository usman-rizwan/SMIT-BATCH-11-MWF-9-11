// ==== callback ====

// function fetchData(callback) {
//   setTimeout(function () {
//     callback("data fetched");
//   }, 1000);
// }

// fetchData(function (data) {
//   console.log(data);
// });

// ==== promise ====

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data aa gaya");
//     }, 1000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error-->", err);
//   });

// ===== async await ======

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data mil gaya");
//     }, 1000);
//   });
// };

// const getData = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (err) {
//     console.log("error-->", err);
//   }
// };

// getData();

// ==== fetch data from api ====

let divData = document.getElementById("divData");

const fetchApiData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    for (let key of data) {
      divData.innerHTML += `
      <div>
          <p><strong>Name</strong> : ${key.name}</p>
          <p><strong>Email</strong>: ${key.email}</p>
          <p><strong>Number</strong>: ${key.phone}</p>
        </div>
      `;
    }
  } catch (err) {
    console.log(err);
  }
};

fetchApiData();
