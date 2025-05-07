let items = [
  {
    title: "Title 1",
    content: "Content 1 | lorem...",
  },
  {
    title: "Title 2",
    content: "Content 2 | lorem...",
  },
  {
    title: "Title 3",
    content: "Content 3 | lorem...",
  },
];

const wrapper = document.querySelector(".wrapper");

loadContent();
function loadContent() {
  let content = "";
  items.forEach((item) => {
    content += `<div class="item">
        <div class="title">${item.title}<i class="fa-solid fa-caret-down"></i></div>
        <div class="content">${item.content}</div>
      </div>`;
  });

  wrapper.innerHTML = content;
}

// show accordion after click on title
const titles = document.querySelectorAll(".wrapper .title");

wrapper.onclick = (e) => {
  parent = e.target.closest("div.title");
  if (e.target.closest("div.title")) {
    if (parent.parentElement.classList.contains("show")) {
      parent.parentElement.classList.remove("show");
    } else {
      const all_items = wrapper.querySelectorAll(".item");
      all_items.forEach((el) => el.classList.remove("show"));
      parent.parentElement.classList.add("show");
    }
  }
};
