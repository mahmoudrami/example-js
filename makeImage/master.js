function downloadAsImage() {
  const element = document.getElementById("capture");

  element.classList.add("print-style");
  html2canvas(element).then((canvas) => {
    const link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = canvas.toDataURL();
    link.click();
  });

  // html2canvas(document.getElementById("capture"), {
  //   scale: 2,
  //   backgroundColor: "#ffffff",
  // }).then((canvas) => {
  //   const link = document.createElement("a");
  //   link.download = "my-image.jpg";
  //   link.href = canvas.toDataURL("image/jpeg", 0.95);
  //   link.click();
  // });
}
