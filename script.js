//TASK 1

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

// Convert objects to JSON strings
var obj1String = JSON.stringify(obj1);
var obj2String = JSON.stringify(obj2);

// Compare JSON strings
if (obj1String === obj2String) {
    console.log("Objects have the same properties (order insensitive).");
} else {
    console.log("Objects do not have the same properties.");
}


//TASK 2

// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate through each country object
    data.forEach(country => {
      // Check if the country object has a flag
      if (country.flags) {
        // Print the flag URL to the console
        console.log(country.flags.svg); // Assuming we want SVG flags
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  //TASK 3

  // Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Iterate through each country object
  data.forEach(country => {
    // Extract desired information
    const name = country.name.common;
    const region = country.region;
    const subRegion = country.subregion;
    const population = country.population;

    // Print the information to the console
    console.log(`Country: ${name}`);
    console.log(`Region: ${region}`);
    console.log(`Sub-region: ${subRegion}`);
    console.log(`Population: ${population.toLocaleString()}`); // Format population with commas
    console.log('-------------------------'); // Separator for better readability
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
});