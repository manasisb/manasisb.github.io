 
function actions(){
    table = document.getElementById("events").getElementsByTagName("tbody")[0];
     events.map(function(s,i,arr){
                    // Insert a row in the table at row index 0
                      var newRow   = table.insertRow(table.rows.length);
                      // Insert a cell in the row at index 0
                      var Cell1  = newRow.insertCell(0);
                      var Cell2  = newRow.insertCell(1);

                      // Append a text node to the cell
                      var Text1  = document.createTextNode(arr[i].name);
                      var Text2  = document.createTextNode(arr[i].dates);
                     
                      //Append in cell
                      Cell1.appendChild(Text1);
                      Cell2.appendChild(Text2);
                   });   
}
window.onload = actions();