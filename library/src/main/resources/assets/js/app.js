$(":button").click(function() {
    var isbn = this.id;
   // alert('About to report lost on ISBN ' + isbn);    
    $.ajax({        
        url: 'v1/books/'+isbn+'?status=lost',
        type: 'PUT'      
        //
    });
    
   
    this.disabled=true;
   
    $('#bookStatus_'+isbn).html("lost");    
    
    /*$('#tableId').each(function() {
    	$('#isbn').find('tr').each(function() {
    	
    		var customerId = $(this).find("td").eq(4).html();
            customerId="lost";
            $(this).find("td").eq(4).html(customerId);
            alert("changed"+$(this).find("td").eq(4).html());
            alert(customerId);
    	}
    }        
    });   
*/     
    
});
