document.getElementById("generatePdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Get form values manually
  const fullName = document.querySelector('input[name="fullName"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const education = document.querySelector('input[name="education"]').value;
  const experience = document.querySelector('input[name="experience"]').value;

  // Add content to PDF
  doc.text(`Full Name: ${fullName}`, 10, 20);
  doc.text(`Email: ${email}`, 10, 30);
  doc.text(`Phone: ${phone}`, 10, 40);
  doc.text(`Education: ${education}`, 10, 50);
  doc.text(`Experience: ${experience}`, 10, 60);

  // Save the PDF
  doc.save("resume.pdf");
});
