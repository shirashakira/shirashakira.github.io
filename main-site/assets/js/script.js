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
  //printButton.disabled = true;

  //then we add checks for each input
  const turfName = document.getElementById('turfName');
  const dyeLot = document.getElementById('dyeLot');
  const rollStart = document.getElementById('rollStart');
  const rollEnd = document.getElementById('rollEnd');
  const containterNum = document.getElementById('containterNum');
  const rollFeet = document.getElementById('rollFeet');

  var isValidTurfName = false;
  var isValidDyeLot = false;
  var isValidRollStart = false;
  var isValidRollEnd = false;
  var isValidContainerNum = false;
  var isValidRollFeet = false;

  turfName.addEventListener('keyup', function (event) {
    isValidTurfName = turfName.checkValidity();
    console.log("test")
    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      //printButton.disabled = true;
    }
  });

  dyeLot.addEventListener('keyup', function (event) {
    isValidDyeLot = dyeLot.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      //printButton.disabled = true;
    }
  });

  rollStart.addEventListener('keyup', function (event) {
    isValidRollStart = rollStart.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      //printButton.disabled = true;
    }
  });

  rollEnd.addEventListener('keyup', function (event) {
    isValidRollEnd = rollEnd.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      //printButton.disabled = true;
    }
  });

  containterNum.addEventListener('keyup', function (event) {
    isValidContainerNum = containterNum.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
      //printButton.disabled = true;
    }
  });

  rollFeet.addEventListener('keyup', function (event) {
    isValidRollFeet = rollFeet.checkValidity();

    if (isValidTurfName && isValidDyeLot && isValidRollStart && isValidRollEnd && isValidContainerNum && isValidRollFeet) {
      printButton.disabled = false;
    } else {
    //  printButton.disabled = true;
    }
  });

});

function makeAndSaveTurfLabel() {
  const htmlContent = '<html><body><h1>Hello, World!</h1></body></html>';
  const fileName = 'example.html';

  generateAndSaveHTMLToMachine(htmlContent, fileName);
}

function makeAndPrintTurfLabelPDF() {
  //Max write your function to take the form data and turn that into PDFs that look like the example given to us.
  //Save it to the turfdocs folder and then we can print from there using the last line on this function

  //grab the form data
  var name = document.querySelector('#turfName').value;
  console.log("name: " + name)

  var dyeLot = document.querySelector('#dyeLot').value;
  console.log("dyeLot: " + dyeLot)

  var rollStart = document.querySelector('#rollStart').value;
  console.log("rollStart: " + rollStart)

  var rollEnd = document.querySelector('#rollEnd').value;
  console.log("rollEnd: " + rollEnd)

  var containerNumber = document.querySelector('#containterNum').value;
  console.log("containerNumber: " + containerNumber)

  var rollFeet = document.querySelector('#rollFeet').value;
  console.log("rollFeet: " + rollFeet)

  /*
  //for roll in rollStart...rollEnd {
    //make the PDF
  }
  */
  //printJS('../turfdocs/example.pdf')
  const htmlContent = `
          <html>
            <body>
              <h1>Turf Name: ${name}</h1>
              <h2>Roll Start: ${rollStart}</h2>
            </body>
          </html>
        `;

  const options = {
    jsPDF: { format: 'a4', orientation: 'landscape' }
  };

  html2pdf().set(options).from(htmlContent).toPdf().output('blob').then((pdfBlob) => {
    const pdfUrl = URL.createObjectURL(pdfBlob);
    printJS(pdfUrl);
  });

  //generateAndSaveHTMLToFileStructure()
}

function leadingZeros(input) {
  if(!isNaN(input.value) && input.value.length === 1) {
    input.value = '0' + input.value;
  }
}

//this is if we want to save it to the machine
function generateAndSaveHTMLToMachine(htmlContent, fileName) {
  // Create a blob object with the HTML content
  const blob = new Blob([htmlContent], { type: 'text/html' });

  // Create a URL for the blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  // Simulate a click on the link to trigger the file download
  link.click();

  // Clean up the URL object
  URL.revokeObjectURL(url);
}

//this is if we want to save it to the file structure
function generateAndSaveHTMLToFileStructure(htmlContent, fileName) {
  fs.writeFile(fileName, htmlContent, (err) => {
    if (err) {
      console.error('Error saving HTML file:', err);
      return;
    }
    console.log('HTML file saved successfully!');
  });
}
