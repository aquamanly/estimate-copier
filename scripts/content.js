console.log("starting up!!");

function getPhoneNumber() {
  // Select the anchor tag that contains the phone number
  var phoneNumberElement = document.querySelector('.custAddress a[href^="tel:"]');
  
  // Check if the element exists
  if (phoneNumberElement) {
      // Get the phone number text content
      var phoneNumber = phoneNumberElement.textContent.trim();
      return phoneNumber;
  } else {
      return null;
  }
}


function getFormValues() {
  // Select the main container element
  // Extract the innerText from the DOM element
  const rawText = document.querySelector("#DetailsInfoCard > section > div.read-only > div > div.col-md-7 > div > div").innerText;

  // Split the text into individual lines
  const lines = rawText.split('\n').map(line => line.trim());

  // Regex to match the city, state, and zip code part
  const addressRegex = /(.+),\s+(\w{2})\s+(\d{5})$/;

  // Extract the name and the address components
  const name = lines[0];
  const address = lines[1];
  const match = lines[2].match(addressRegex);
  const email = document.querySelector("#DetailsInfoCard > section > div.read-only > div > div.col-md-7 > div > a").innerHTML;
  // Example usage
  const phone = getPhoneNumber();
  if (phone) {
    //alert('Phone Number:', phone);
  } else {
  //alert('Phone number not found.');
}
  if (!match) {
    throw new Error('Address format is incorrect');
  }

  const [, city, state, zip] = match;

  // Create the resulting JSON object
  const result = {
    name,
    email,
    address,
    city,
    state,
    zip,
    phone
  };


    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
  
}

getFormValues();