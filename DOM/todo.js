const input_text_element = document.querySelector("#input_text");
const ul_lists_element = document.querySelector("#ul_lists");
const sumbitList = () => {
  const value = input_text_element.value;
  input_text_element.value = "";

  if(!value.trim() ){
    alert("Should not be empty")
    return
  }

  const new_li = document.createElement("li");

  new_li.innerHTML = value;

  new_li.setAttribute("id", "li_" + value);
  ul_lists_element.append(new_li);
};

document.querySelector("#button_submit").addEventListener("click", () => sumbitList());
document.querySelector("#input_text").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sumbitList();
  }
});

document.querySelector("#ul_lists").addEventListener("dblclick", (e) => {
  const target = e.target;
  if (target.matches("li")) document.getElementById(target.getAttribute("id")).remove();
});
