// from data.js
var tableData = data;

//YOUR CODE HERE!
//Select the dataset 
var tbody = d3.select("tbody");

 // Loop through each field in the datarow to use Arrow Functions!
 //each value as a table cell (td)
  tableData.forEach(ufoSighting => {
     row = d3.select("tbody").append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      console.log(key, value);
      cell = row.append("td").text(value);

    });
  });

// Select the button
var button = d3.select("button");
var form = d3.select("form");
// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(event) {

  d3.event.preventDefault();

 // Select the input element value property 
   var inputElement = d3.select("#datetime");
   // Get the value property of the input element
   var inputValue = inputElement.property("value");
        
 
 // Print the value to the console
     console.log(inputValue);
    
// remove any existing data from the table
   tbody.html("");

// Apply filter to the table data to keep the rows where the dateTime value matches the filter value
    var data = tableData.filter(sighting => sighting.datetime === inputValue);
        console.log(data);

// Display the filtered dataset
  data.forEach(selections => {
  console.log(selections);
  row = d3.select("tbody").append("tr");
  Object.entries(selections).forEach(([key,value]) => {
    console.log(key, value);
    cell = row.append("td").text(value);
  });
});
}



