'use strict';

$(function() {
  console.log("test1234556")


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
