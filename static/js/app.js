// from data.js
var tableData = data;

// YOUR CODE HERE!

//--a--Pull data from input field.....b--filter data....c--Append data of each cell using foreach command
var button = d3.select("#filter-btn");

button.on("click", function(){

    d3.event.preventDefault();

    var query = d3.select("#datetime").property("value");
    console.log(query);
    var filtered_results = tableData.filter(d => d.datetime === query)
    console.log(filtered_results);

    var tbody = d3.select("tbody");

    filtered_results.forEach(function(entry) {
        var row = tbody.append("tr")
        Object.entries(entry).forEach(function([key,value]) {
          row.append("td").text(value);
        });
    });
    

});
