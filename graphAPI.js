function getAllStrikePrices(){
    $.ajax({
        url:"http://localhost:8080/getAllStrikePrices", // path to file
        dataType: 'json', // type of file (text, json, xml, etc)
        success: function(data) { // callback for successful completion
            var anchors = [];
            for (var i = 0; i < data.length; i++) {
                anchors.push(data[i].toString());
                // addItem(data[i].toString(), !i);
            }
            return anchors;
           // reloadUI(anchors);
        },
        error: function() { // callback if there's an error
         // alert("error");
        }
    });  
}