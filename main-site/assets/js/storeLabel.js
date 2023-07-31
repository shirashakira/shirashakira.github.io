'use strict';

// Variable to store the file data
let uploadedFileData;

$(function() {
  //deal with the file upload
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
        //console.log('Product of the first row:', parsedData[1][1]);

        // Store the parsed data in the variable
        uploadedFileData = parsedData;
        console.log("data parsed and saved");
      };

      // Read the file as an ArrayBuffer
      reader.readAsArrayBuffer(file);

      //to see if we should undisable the button
      checkInputs()
    }
  });

});

// Function to check if both file and dropdown are selected
function checkInputs() {
  const fileInput = document.getElementById('customFileUpload');
  const dropdown = document.getElementById('labelTypes');
  const button = document.getElementById('makePrintButton');

  // Enable the button only if both file and dropdown have values
  if (fileInput.files.length > 0 && dropdown.value !== '') {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function handleDropdownChange(dropdown) {
  // Access the selected value
  const selectedValue = dropdown.value;
  console.log('Selected Label Type:', selectedValue);

  // Call checkInputs to enable/disable the button based on the file and dropdown values
  checkInputs();
}

function makeAndPrintStoreLabelPDF() {
  if (uploadedFileData) {
    //console.log('Uploaded File Data:', uploadedFileData);
    makeLabelPDF()
    // You can now process the file data or perform any other actions here
  } else {
    console.log('No file uploaded yet!');
  }
}

function makeLabelPDF() {
  // Create a new PDF document using jsPDF
  const doc = new jsPDF('p', 'mm', 'letter');

  // Define the label template
  const labelTemplate = return5263HTML();

  const options = {
    jsPDF: { format: 'letter', orientation: 'portrait' } // Corrected the format value to 'letter'
  };

  html2pdf().set(options).from(labelTemplate).toPdf().output('blob').then((pdfBlob) => {
    const pdfUrl = URL.createObjectURL(pdfBlob);
    printJS({ printable: pdfUrl, type: 'pdf', showModal: true });
  });
}

function return5263HTML() {
  const labelTemplateStart = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>HTML & CSS Avery Labels (5263)</title>
      <style>
      body {
          width: 8.5in;
          margin: 0in .1875in;
          font-family: Calibri, sans-serif;
          }
      .label{
          /* Avery 5263 labels -- CSS and HTML*/
          width: 4.0in; /* plus .6 inches from padding */
          height: 2.0in; /* plus .125 inches from padding */
          padding: .125in .3in 0;
          margin-right: .125in; /* the gutter */
          float: left;

          text-align: left;
          overflow: hidden;

          }
      .label-size-22 {
        color: black;
        font-size: 22px;
        line-height: 28px;
      }
      .label-size-14 {
        color: black;
        font-size: 14px;
        line-height: 18px;
      }
      .page-break  {
          clear: left;
          display:block;
          page-break-after:always;
      }
      </style>

    </head>
    <body>
  `;

  const labelTemplateEnd = `
    </body>
    </html>
  `;

  // Generate label HTML based on data
  let labelHTML = labelTemplateStart;

  // Check if there is data available
  if (uploadedFileData && uploadedFileData.length > 0) {
    for (const rowData of uploadedFileData) {
      const productCode = rowData[1];
      const description = rowData[2];

      const label = `
        <div class="label">
          <span class="label-size-22">${productCode}</span><br>
          <span class="label-size-14">${description}</span>
        </div>
      `;

      labelHTML += label;
    }
  }

  labelHTML += labelTemplateEnd;

  return labelHTML;
}
