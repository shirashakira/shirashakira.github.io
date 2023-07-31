'use strict';

$(function() {


  const excelInput = document.getElementById('customFileUpload');
  excelInput.addEventListener('change', function () {
    document.querySelector("#fileUploadLabel").textContent = this.files[0].name;

    const file = this.files[0]; // Get the selected file (the first file in the list)

    if (file) {
      // Create a new FileReader instance
      const reader = new FileReader();

      // Define a function to handle the file reading completion
      reader.onload = function (e) {
        const arrayBuffer = e.target.result;

        // Parse the Excel data using SheetJS
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });

        // Assuming the first sheet is the one containing the data
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert the worksheet to an array of objects
        const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        //console.log('Parsed data:', parsedData);

        // You can now access the data as an array of objects
        // Each row in the spreadsheet will be an object in the array
        // For example, to access the first row's "Product" value:
        //shows up like:
        //['Ln#', 'Product', 'Description', 'Qty Ord']
        //[1, 401005, '1/2" SCH 40 PVC TEE FITTING SXSXS FOR IRRIGATION', 25]
        console.log('Product of the first row:', parsedData[1][1]);
      };

      // Read the file as an ArrayBuffer
      reader.readAsArrayBuffer(file);
    }
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
