var students = [
  { name: "Bilal" },
  { name: "Ahmed" },
  { name: "Hassan" },
  { name: "Usman" },
  { name: "Usama" },
];

var list = document.getElementById("list");
function renderData() {
  list.innerHTML = "";
  students.forEach(function (data, index) {
    //   console.log("index=>", index, "Data=>", data);
    //   console.log(data.name);
    var ele = ` <li id=${index}> <span>${data.name}</span>  <button onclick="editObj(this)">Edit</button> <button onclick="deleteObj(this)">Delete</button></li>`;

    list.innerHTML += ele;
  });
}
renderData();

function editObj(ele) {
  console.log(ele.parentElement.id);
  students[ele.parentElement.id].name = prompt("Username");
  console.log(students);
  renderData();
}
function deleteObj(ele) {
  students.splice(ele.parentElement.id, 1);
  console.log("After delete=>", students);
  renderData();
}

// students[0].name = "Bilal Raza";
// students.splice(1, 1);
// console.log(students);

// for (var i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }
