// from data.js
var tableData = data;

//YOUR CODE HERE!
//Select the dataset 
tbody = d3.select("tbody")

function ufoSightings(datarow) {
// Loop through each field in the datarow to use Arrow Functions!
//each value as a table cell (td)
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");
    Object.entries(datarow).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
};

// Display the entire dataset as default
tableData.forEach(ufoSightings);

// Select the button
var enter = d3.select("#filter-button");

// Create event handlers for clicking the button or pressing the enter key
enter.on("click", function() {

// remove any existing data from the table
d3.select("tbody").html("");

// Prevent the page from refreshing
    d3.event.preventDefault();
    
 // Select the input element value property 
   var inputElement = d3.select("#dateTime");
   // Get the value property of the input element
   var inputValue = inputElement.property("value");
 
 // Print the value to the console
    console.log(dateTime);
    console.log(inputValue);

// Apply filter to the table data to keep the rows where the dateTime value matches the filter value
    var filteredData = tableData.filter(datarow => datarow.datetime === dateTime);
        console.log(filteredData)

// Display the filtered dataset
data.forEach(row => {
  row = d3.select("tBody").append("tr");
  Object.entries(row).forEach(([key,value]) => {
      cell = row.append("td").text(value);
  });
});
})
    


