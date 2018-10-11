$().ready(function() {

    var url = "http://Localhost:8080/Vendor/List";

    $.getJSON(url)
    .then(function(jsonResponse) {
        console.log(jsonResponse);

    });

});

function render (jsonResponse) {
    var tbody = $("#tbody");
    var vendors  = jsonResponse.data;
    for(var vendor of vendors) {
        var row = "<tr>";
        
        row += "<td>" + vendor.id + "</td>";
        row += "<td>" + vendor.code + "</td>";
        row += "<td>" + vendor.name + "</td>";
        row += "<td>" + vendor.address + "</td>";
        row += "</tr>";
        tbody.append(row);


    }
}