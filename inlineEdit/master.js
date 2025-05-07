const edits = document.querySelectorAll(".edit");

edits.forEach((el) => {
  el.onclick = (e) => {
    if (el.innerText == "Done") {
      let row = e.target.closest("tr");
      row.querySelectorAll(".content").forEach((item) => {
        item.contentEditable = false;
        el.innerText = "edit";
      });
    } else {
      let row = e.target.closest("tr");
      row.querySelectorAll(".content").forEach((item) => {
        item.contentEditable = true;
        el.innerText = "Done";
      });
    }
  };
});

let contents = document.querySelectorAll(".content");

contents.forEach((el) => {
  el.ondblclick = () => {
    el.contentEditable = true;
  };
  el.onblur = () => {
    el.contentEditable = false;
  };
});
