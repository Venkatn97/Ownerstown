function addData(data){// pass your data in method
     $.ajax({
             type: "POST",
             url: "http://localhost:3000/",
             data: JSON.stringify(data),// now data come in this function
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             success: function (data, status, jqXHR) {
             	 if(data.length===0)
             	{
             		alert("Enter a valid superhero code");
             	}
             	else
             	{

                  $("#result").html($("#result").html()+'<br>'+data);
              }
             
             
             },

             error: function (jqXHR, status) {
                 // error handler
                 console.log(jqXHR);
                 alert('fail' + status.code);
             }
          });
    }

var display=document.getElementById("output");
var fired_button="";
$("button").click(function() {
    
    
    
     if($(this).val()==="#")
    {
    	$('#output').val($('#output').val()+" ");
    }
    else if($(this).val()==="*")
    {
    	if($('#output').val().length>3)
    	{
    	if($('#output').val()[0]==='0' && $('#output').val()[1]===" " && Number($('#output').val()[2])!==NaN)
    	{
    	 

    	 addData($('#output').val());
          $('#output').val("");
      

    	}
    	else
    	{
    		

    		alert("Enter the valid code");
    		$('#output').val("");
    	}
    }
    else
    {
    	alert("Enter the valid input");
    	$('#output').val("");

    }
}
    else 
    {
    	$('#output').val($('#output').val()+$(this).val());
    }



    

    });
