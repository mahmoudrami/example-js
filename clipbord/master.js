const btns = document.querySelectorAll(".copy");

// content.oncopy = () => {
//   navigator.clipboard.writeText(location.href + "\n\n" + getSelection());
// };

btns.forEach((btn) => {
  btn.onclick = (e) => {
    let text = btn.previousElementSibling.innerHTML;
    navigator.clipboard.writeText(text + "mahmoud rami write this code");
  };
});
