window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.getElementById("name");

  const saveData = document.getElementById("save");
  saveData.onclick = save;

  const removeData = document.getElementById("remove");
  removeData.onclick = remove;

  const currentData = JSON.parse(localStorage.getItem("savedData"));

  const showData = document.getElementById("displayData");

  if (currentData) {
    showData.innerText = currentData;
  } else {
    showData.innerText = "Form must be completed";
  }
});

const save = () => {
  const name = document.getElementById("name");
  localStorage.setItem("savedData", JSON.stringify(name.value));
};

const remove = () => {
  localStorage.removeItem("savedData");
};
