'use strict';

$(function() {

  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  page.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: '',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Google reCAPTCHA
    |--------------------------------------------------------------------------
    |
    | reCAPTCHA protects you against spam and other types of automated abuse.
    | Please signup for an API key pair and insert your `Site key` value to the
    | following variable.
    |
    | http://www.google.com/recaptcha/admin
    |
    */

    reCaptchaSiteKey:  '6Ldaf0MUAAAAAHdsMv_7dND7BSTvdrE6VcQKpM-n',

    // See available languages: https://developers.google.com/recaptcha/docs/language
    reCaptchaLanguage: '',

    /*
    |--------------------------------------------------------------------------
    | Disable AOS on mobile
    |--------------------------------------------------------------------------
    |
    | If true, the Animate On Scroll animations don't run on mobile devices.
    |
    */

    disableAOSonMobile: true,

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: true,

  });





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

  turfTypes.addEventListener('change', function () {
    console.log("test")
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
      rollFeet.value = 75
    } else if (turfTypeSelected === "Monte Verde Lite") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    }  else if (turfTypeSelected === "Willow") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Professional Play") {
      turfName.value = this.value.toUpperCase();
      rollFeet.value = 100
    } else if (turfTypeSelected === "Performance Putt") {
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
    console.log("test")
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
  const htmlContent = generateHTMLOutputForTurfLabel()

  const options = {
    jsPDF: { format: 'a4', orientation: 'landscape' }
  };

  html2pdf().set(options).from(htmlContent).toPdf().output('blob').then((pdfBlob) => {
    const pdfUrl = URL.createObjectURL(pdfBlob);
    printJS(pdfUrl);
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

  var mergedHTML = setupHTMLBeginning()
  for (let i = rollStart; i <= rollEnd; i++) {
    if (i > 0) {
      let pageBreak = '<div style="page-break-before: always;"> </div>'

      if (i < 2) {
        mergedHTML = mergedHTML + setupTurfLabel(i)
      } else {
        mergedHTML = mergedHTML + pageBreak + setupTurfLabel(i)
      }
    }
  }

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
          }
          #turfTtitle {
              font-family: Arial, Helvetica, sans-serif;
              font-size: 40px;
          }

          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
          }
          th, td {
            padding: 5px;
            padding-bottom: 17px;
            text-align: left;
            color: black;
          }

      </style>
    </head>
    <body>
  `
  return html
}

function setupHTMLEnding() {
  const html = `
        </body>
      </html>`
  return html
}

function setupTurfLabel(rollNumber) {
  var name = document.querySelector('#turfName').value;
  var dyeLot = document.querySelector('#dyeLot').value;
  var containerNumber = document.querySelector('#containterNum').value;
  var rollFeet = document.querySelector('#rollFeet').value;
  var soNum = document.querySelector('#soNum').value;

  const html = `
      <div id="turfWrapper" style="margin-top: 40px; margin-left: 20px;">
          <div id="turfFirst" style="">
              <div style="color: black; font-size: 20px; font-family: Calibri, Helvetica, sans-serif;"><b>NAME</b></div>
              <div style="color: black; font-size: calc(2vw + 15px); font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${name}</div>
              <br>
              <div style="color: black; font-size: 20px; font-family: Calibri, Helvetica, sans-serif;"><b>DYE LOT</b></div>
              <div style="color: black; font-size: 7.5vw; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${dyeLot}</div>
              <br>
              <div style="color: black; font-size: 20px; font-family: Calibri, Helvetica, sans-serif;"><b>ROLL #</b></div>
              <div style="margin-top:-30px; text-align: center; color: black; font-size: 180px; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${rollNumber.toString().padStart(2,'0')}</div>
          </div>
          <div id="turfSecond">
            <div style="color: black; font-size: 20px; font-family: Calibri, Helvetica, sans-serif;"><b>NAME</b></div>
            <div style="color: black; font-size: calc(2vw + 15px); font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${name}</div>
            <br>
            <div style="color: black; font-size: 20px; font-family: Calibri, Helvetica, sans-serif;"><b>DYE LOT</b></div>
            <div style="color: black; font-size: 7.5vw; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${dyeLot}</div>
            <br>
            <div style="color: black; font-size: 20px; font-family: Calibri, Helvetica, sans-serif;"><b>ROLL #</b></div>
            <div style="margin-top: -30px; text-align: center; color: black; font-size: 180px; font-family: Calibri, Helvetica, sans-serif; font-weight: bold;">${rollNumber.toString().padStart(2,'0')}</div>
          </div>
      </div>

      <div style="page-break-before: always;"> </div>

      <div style="margin-top: 40px; margin-left: 20px;">

          <table style="width:35%">
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
  `;

  return html
}
