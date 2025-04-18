document.getElementById("generatePdf").onclick = () => {
  const data = new FormData(document.getElementById("resumeForm"));
  for (let [key, value] of data.entries()) {
    console.log(`${key}: ${value}`);
  }
  alert("Form data logged to console!");
};
