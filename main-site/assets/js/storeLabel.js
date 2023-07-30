'use strict';

$(function() {


  const excelInput = document.getElementById('customFileUpload')
  excelInput.addEventListener('change', function () {
    document.querySelector("#fileUploadLabel").textContent = this.files[0].name;

  });

});





function makeAndPrintTurfLabelPDF() {
  //const htmlContent = generateHTMLOutputForTurfLabel()

  const options = {
    jsPDF: { format: 'a4', orientation: 'landscape' }
  };

  html2pdf().set(options).from(htmlContent).toPdf().output('blob').then((pdfBlob) => {
    const pdfUrl = URL.createObjectURL(pdfBlob);
    printJS({printable:pdfUrl, type:'pdf', showModal:true});
  });
}
