// Access jsPDF
const { jsPDF } = window.jspdf;

// When the user clicks "Generate PDF"
document.getElementById("generatePdf").onclick = () => {
  const form = document.getElementById("resumeForm");
  const data = new FormData(form);
  
  const doc = new jsPDF();
  let y = 20; // Y position to start writing text

  // Write each form field into the PDF
  for (let [key, value] of data.entries()) {
    doc.text(`${capitalize(key)}: ${value}`, 10, y);
    y += 10;
  }

  doc.save("resume.pdf"); // Download the generated PDF
};

// Helper function to capitalize field names
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
