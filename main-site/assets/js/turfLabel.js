'use strict';

$(function() {

  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */

  //print button starts disabled
  const printButton = document.getElementById('makePrintButton');
  printButton.disabled = true;

  //then we add checks for each input
  const turfName = document.getElementById('turfName');
  const dyeLot = document.getElementById('dyeLot');
  const rollStart = document.getElementById('rollStart');
  const rollEnd = document.getElementById('rollEnd');
  const containterNum = document.getElementById('containterNum');
  const rollFeet = document.getElementById('rollFeet');
  const soNum = document.getElementById('soNum');
  const turfTypesInput = document.getElementById('turfTypes')

  var isValidTurfName = false;
  var isValidDyeLot = false;
  var isValidRollStart = false;
  var isValidRollEnd = false;
  var isValidSoNum = false;
  var isValidContainerNum = false;
  var isValidRollFeet = false;

  //for testing
  // printButton.disabled = false;
  // turfName.value = "EVERNATURAL PREMIUM"
  // dyeLot.value = "CP326293"
  // rollStart.value = "01"
  // rollEnd.value = "07"
  // containterNum.value = "TGBU7792184"
  // soNum.value = "181258"
  // rollFeet.value = 100
  //
  var isValidTurfName = true;
  var isValidDyeLot = true;
  var isValidRollStart = true;
  var isValidRollEnd = true;
  var isValidSoNum = true;
  var isValidContainerNum = true;
  var isValidRollFeet = true;
  //comment out when not testing


  turfTypesInput.addEventListener('change', function () {
    const turfTypeSelected = turfTypesInput.value
    if (turfTypeSelected === "Evernatural Premium") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Evernatural Classic") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100

    } else if (turfTypeSelected === "Sequoia") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 75
    } else if (turfTypeSelected === "Sequoia Lite") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Coastal Plush") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Monte Verde") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Monte Verde Lite") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    }  else if (turfTypeSelected === "Willow") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Universal Play") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Legacy Putt") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Pacific Olive") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    }

    isValidTurfName = turfName.checkValidity();
    isValidRollFeet = rollFeet.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidSoNum && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      printButton.disabled = true;
    }

  });

  turfName.addEventListener('keyup', function (event) {
    isValidTurfName = turfName.checkValidity();
    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidSoNum && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      printButton.disabled = true;
    }
  });

  dyeLot.addEventListener('keyup', function (event) {
    isValidDyeLot = dyeLot.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidSoNum && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      printButton.disabled = true;
    }
  });

  rollStart.addEventListener('keyup', function (event) {
    isValidRollStart = rollStart.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidSoNum && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      printButton.disabled = true;
    }
  });

  rollEnd.addEventListener('keyup', function (event) {
    isValidRollEnd = rollEnd.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidSoNum && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      printButton.disabled = true;
    }
  });

  soNum.addEventListener('keyup', function (event) {
    isValidSoNum = soNum.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidSoNum && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      printButton.disabled = true;
    }
  });

  containterNum.addEventListener('keyup', function (event) {
    isValidContainerNum = containterNum.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidSoNum && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      printButton.disabled = true;
    }
  });

  rollFeet.addEventListener('keyup', function (event) {
    isValidRollFeet = rollFeet.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidSoNum && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      printButton.disabled = true;
    }
  });

});

function makeAndPrintTurfLabelPDF() {
  // const htmlContent = generateHTMLOutputForTurfLabel()
  //
  // const options = {
  //   jsPDF: { format: 'a4', orientation: 'landscape' }
  // };
  //
  // html2pdf().set(options).from(htmlContent).toPdf().output('blob').then((pdfBlob) => {
  //   const pdfUrl = URL.createObjectURL(pdfBlob);
  //   printJS({printable:pdfUrl, type:'pdf', showModal:true});
  // });

  //to improve DPI and quality
  const htmlContent = generateHTMLOutputForTurfLabel();

  // Scale factor (e.g., 2 for double size, which simulates increasing the DPI)
  const scaleFactor = 2;

  const options = {
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'landscape' },
    // Scale the html2pdf options, effectively increasing the "virtual" DPI
    html2canvas: { scale: scaleFactor },
    // Scale the viewport of the page
    windowWidth: 841.89 * scaleFactor, // A4 width in points
    windowHeight: 595.28 * scaleFactor // A4 height in points
  };

  html2pdf().set(options).from(htmlContent).toPdf().output('blob').then((pdfBlob) => {
    const pdfUrl = URL.createObjectURL(pdfBlob);
    printJS({ printable: pdfUrl, type: 'pdf', showModal: true });
  });
}

function leadingZeros(input) {
  if(!isNaN(input.value) && input.value.length === 1) {
    input.value = '0' + input.value;
  }
}

function generateHTMLOutputForTurfLabel() {
  //grab the form data
  var rollStart = document.querySelector('#rollStart').value;
  var rollEnd = document.querySelector('#rollEnd').value;

  //start the html
  var mergedHTML = setupHTMLBeginning()

  //add each pages html
  for (let i = rollStart; i <= rollEnd; i++) {
    if (i > 0) {
      var buffer = 0;
      if (rollStart != 1) {
        buffer = rollStart - 1
      }

      mergedHTML = mergedHTML + setupTurfLabel(i, buffer)
    }
  }

  //add ending html
  mergedHTML = mergedHTML + setupHTMLEnding()

  return mergedHTML;
}

function setupHTMLBeginning() {
  const html = `
  <!DOCTYPE html>
  <html">
    <head>
      <style>
          #turfWrapper {
              height:95%;
              width:100%;
              overflow: hidden; /* will contain if #first is longer than #second */
          }
          #turfFirst {
              width: 49%;
              float:left; /* add this */
          }
          #turfSecond {
              width: 49%;
              overflow: hidden; /* if you don't want #second to wrap below #first */
              padding-left: 20px;
          }
          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
          }
          th, td {
            padding: 5px;
            padding-bottom: 19px;
            text-align: left;
            color: black;
          }

          @media print {
            .fixed-element {
              position: fixed;
              top: 25px;
              left: 20px;
            }
          }

      </style>
    </head>
    <body>
  `
  return html;
}

function setupHTMLEnding() {
  const html = `
        </body>
      </html>`
  return html;
}

function setupTurfLabel(rollNumber, buffer) {
  var name = document.querySelector('#turfName').value;
  var dyeLot = document.querySelector('#dyeLot').value;
  var containerNumber = document.querySelector('#containterNum').value;
  var rollFeet = document.querySelector('#rollFeet').value;
  var soNum = document.querySelector('#soNum').value;

  var frontTop = 20 + (0 + ((1586 + 1.5) * ((rollNumber - buffer) - 1)))
  var backTop = 20 + (793 + ((1586 + 1.5) * ((rollNumber - buffer) - 1)))

  const html = `
      <div id="turfWrapper" style="top:${frontTop}px; margin-left: 20px; position:absolute;">
          <div id="turfFirst" style="">
              <div style="color: black; font-size: 25px; font-family: Calibri, Helvetica, sans-serif;"><b>NAME</b></div>
              <div style="color: black; font-size: 30pt; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${name}</div>
              <br>
              <div style="color: black; font-size: 25px; font-family: Calibri, Helvetica, sans-serif;"><b>DYE LOT</b></div>
              <div style="color: black; font-size: 6vw; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${dyeLot}</div>
              <br>
              <div style="color: black; font-size: 25px; font-family: Calibri, Helvetica, sans-serif;"><b>ROLL #</b></div>
              <div style="margin-top:-120px; text-align: center; color: black; font-size: 200pt; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${rollNumber.toString().padStart(2,'0')}</div>
          </div>
          <div id="turfSecond">
            <div style="color: black; font-size: 25px; font-family: Calibri, Helvetica, sans-serif;"><b>NAME</b></div>
            <div style="color: black; font-size: 30pt; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${name}</div>
            <br>
            <div style="color: black; font-size: 25px; font-family: Calibri, Helvetica, sans-serif;"><b>DYE LOT</b></div>
            <div style="color: black; font-size: 6vw; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${dyeLot}</div>
            <br>
            <div style="color: black; font-size: 25px; font-family: Calibri, Helvetica, sans-serif;"><b>ROLL #</b></div>
            <div style="margin-top: -120px; text-align: center; color: black; font-size: 200pt; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${rollNumber.toString().padStart(2,'0')}</div>
          </div>
      </div>

      <div style="page-break-before: always;"> </div>


      <div style="margin-left: 20px; top:${backTop}px; position:absolute;">

          <table style="width:35%;">
            <tr>
              <th>TYPE:</th>
              <td>${name}</td>
            </tr>
            <tr>
              <th>SO #:</th>
              <td>${soNum}</td>
            </tr>
            <tr>
              <th>CONTAINER #:</th>
              <td>${containerNumber}</td>
            </tr>
          </table>

          <div style="color:black; margin-top: 20px; border: 3px solid black; max-width: 25%; text-align: center; padding-bottom: 10px; padding-top: 10px;">STARTED WITH <b>${rollFeet}</b> LINEAR FEET</div>

          <table style="margin-top: 20px;">
              <thead>
              <tr>
                  <th></th>
                  <th style="padding-left:60px;padding-right:60px;">&nbsp;&nbspDATE &nbsp;&nbsp;</th>
                  <th style="padding-left:50px;padding-right:50px;">&nbsp;&nbsp;INVOICE # / TRANSFER #&nbsp;&nbsp;</th>
                  <th>&nbsp;&nbsp;TOTAL LINEAR FEET CUT&nbsp;&nbsp;</th>
                  <th>&nbsp;&nbsp;TOTAL LINEAR FEET LEFT&nbsp;&nbsp;</th>
                  <th>&nbsp;&nbsp;CUTTER (INITIALS)&nbsp;&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>1</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
              <tr>
                  <td>4</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
              <tr>
                  <td>5</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
              <tr>
                  <td>6</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
              <tr>
                  <td>7</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
              <tr>
                  <td>8</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
              <tbody>
          </table>

      </div>

      <div style="page-break-before: always;"></div>
  `;

  return html
}
