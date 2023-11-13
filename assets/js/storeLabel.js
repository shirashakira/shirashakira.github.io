'use strict';

// Global Variables
let uploadedFileData;
var selectedOption;

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

function handleDropdownChange() {
  // Access the selected value
  const dropdown = document.getElementById('labelTypes');
  selectedOption = dropdown.value;
  console.log('Selected Label Type:', selectedOption);

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
  //const doc = new jsPDF('p', 'mm', 'letter');
  const doc = new jsPDF('p', 'pt', 'letter'); // Use points (pt) for precision

  // Scale factor (e.g., 2 for double size, which simulates increasing the DPI)
  const scaleFactor = 2;
  // Adjust the internal scale of jsPDF
  doc.internal.scaleFactor = scaleFactor;

  // Define the label template
  const labelTemplate = return5263HTML();

  // const options = {
  //   jsPDF: { format: 'letter', orientation: 'portrait' } // Corrected the format value to 'letter'
  // };
  const options = {
    jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' },
    // Scale the html2pdf options, effectively increasing the "virtual" DPI
    html2canvas: { scale: scaleFactor },
    // Scale the viewport of the page
    windowWidth: doc.internal.pageSize.getWidth() * scaleFactor,
    windowHeight: doc.internal.pageSize.getHeight() * scaleFactor
  };

  html2pdf().set(options).from(labelTemplate).toPdf().output('blob').then((pdfBlob) => {
    const pdfUrl = URL.createObjectURL(pdfBlob);
    printJS({ printable: pdfUrl, type: 'pdf', showModal: false });
  });
}

function return5263HTML() {
  console.log('Selected Label Type:', selectedOption);

  const labelTemplateStart = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <style>
        body {
          width: 8.5in;
          height: 11in;
          font-family: "Calibri (Body)", Calibri, sans-serif;
          font-weight: 600;
        }
        .label {
          width: 4.0in;
          height: 2.0in;
          margin-left: .15625in;
          float: left;
          overflow: hidden;
        }
        .label-size-22 {
          margin-left:.375in;
          color: black;
          font-size: 20pt;
          line-height: 24pt;
        }
        .label-size-14 {
          color: black;
          font-size: 12pt;
          line-height: 16pt;
          letter-spacing: -0.15px;
        }

        .page-break {
          clear: left;
          display: block;
          page-break-after: always;
        }
      </style>
    </head>
    <body>
    <div style="height:.5in;"></div>
  `;

  const labelTemplateEnd = `
    </body>
    </html>
  `;

  // Generate label HTML based on data
  let labelHTML = labelTemplateStart;

  // Check if there is data available
  if (uploadedFileData && uploadedFileData.length > 0) {

    //for the page break logic
    let labelCount = 0;
    let labelsPerPage;
    if (selectedOption === '2 x 4 (with quantities)') {
      labelsPerPage = 10;
    } else if (selectedOption === '2 x 4 (without quantities)') {
      labelsPerPage = 10;
    } else if (selectedOption === '3 x 4') {
      labelsPerPage = 6;
    }

    for (const rowData of uploadedFileData.slice(1)) {
      const productCode = rowData[1];
      const description = rowData[2];
      const quantity = rowData[3];

      if (selectedOption === '2 x 4 (with quantities)') {
        const label = return2x4LabelWithQuanties(productCode, description, quantity);
        labelHTML += label;
      } else if (selectedOption === '2 x 4 (without quantities)') {
        const label = return2x4LabelWithoutQuantities(productCode, description);
        labelHTML += label;
      } else if (selectedOption === '3 x 4') {
        const label = return3x4LabelWithoutQuantities(productCode, description);
        labelHTML += label;
      }

      labelCount++;

      // Add a page break after every X labels
      if (labelCount === labelsPerPage) {
        labelHTML += '<div class="page-break"></div>';
        labelHTML += '<div style="height:.5in;"></div>'
        labelCount = 0;
      }

    }
  }

  labelHTML += labelTemplateEnd;

  return labelHTML;
}

function return2x4LabelWithQuanties(productCode, description, quantity) {
  const label = `
    <div class="label">
      <div style="height:.375in;"></div>
      <span class="label-size-22">${productCode}</span>
      <div style="height:.1875in;"></div>
      <span class="label-size-14" style="display: block; margin-left:.375in; margin-right:.1875in;">${description}</span>
      <div style="height:.25in;"></div>
      <div style="text-align: right; margin-right:.325in;"><span class="label-size-14">QTY: ${quantity}</span></div>
    </div>
  `;
  return label
}

function return2x4LabelWithoutQuantities(productCode, description) {
  const label = `
    <div class="label">
      <div style="height:.375in;"></div>
      <span class="label-size-22">${productCode}</span>
      <div style="height:.1875in;"></div>
      <span class="label-size-14" style="display: block; margin-left:.375in; margin-right:.1875in;">${description}</span>
    </div>
  `;
  return label
}

function return3x4LabelWithoutQuantities(productCode, description) {
  const label = `
    <div class="label" style="height: 3.33in;">
      <div style="height:.5in;"></div>
      <span class="label-size-22" style="font-size: 32pt; line-height: 40px;">${productCode}</span>
      <div style="height:.35in;"></div>
      <span class="label-size-14" style="font-size: 20pt; display: block; margin-left:.375in; margin-right:.2in; line-height: 32px;">${description}</span>
    </div>
  `;
  return label
}
