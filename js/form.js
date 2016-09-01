
function member(mythis)
  	{

  		var name=$('#name').val();
  		var email=$('#email').val();
  		var phone=$('#phone').val();
  		var area=$('#area').val();
      var affiliation=$('#affiliation').val();
      var street = $('#street').val();
      var address_line2 = $('#address_line2').val();
      var city=$('#city').val();
      var state = $('#state').val();
      var country=$('#country').val();
      var mobile=$('#mobile').val();
      var closter_area=$('#closter_area').val();
      var code=$('#code').val();
  		var form= $(mythis).data('form');
		 // alert('hai');
	// alert(form);
		if(name == '' || email == '' || phone == '' || area == ''){
			myApp.alert('Details Missing!','Please fill all fields');
			return false;
		}
		
     
      var subject = "Membership Information form";
      		//console.log(contact);
  		$.ajax({
  			url: "http://gicebmedia.com/sahana/temple/membership_form.php?query=mail",
  			type:'POST',
  			data:{name: name, email:email, phone:phone, area:area,affiliation:affiliation,street:street,address_line2:address_line2,city:city,state:state,country:country,mobile:mobile,closter_area:closter_area,code:code},
  			success: function(result){
  				if(result == 1)
  				alert('Your mail has been sent successfully!');
  				else
  				alert('Mail sending failed');
  				
  			},
        error: function(){
          alert('Unable to send email at this moment!');
        }
  		})
  	}
 
     	
   function check(mythis)
    {

      var name=$('#name').val();
      var street=$('#street').val();
      var email=$('#email').val();
      var phone=$('#phone') .val();
      var persons=$('#persons').val();
      var english_name=$('#english_name').val();


      var person_mother=$('#person_mother').val();
      var ill_person=$('#ill_person').val();
      var person_father=$('#person_father').val();
      var relationship=$('#relationship').val();
      var location=$('#location').val();

      var form= $(mythis).data('form');
    // alert(form);
    
    if(name == '' || email == '' || phone == '' || persons == ''){
      myApp.alert('Details Missing!','Please fill all fields');
      return false;
    }
    
     
      var subject = "Mi Sheberach List";
          //console.log(contact);
      $.ajax({
        url: "http://gicebmedia.com/sahana/temple/mi-sheberach_form.php?query=mail",
        type:'POST',
        data:{name: name,street:street, email:email, phone:phone, persons:persons,english_name:english_name,ill_person:ill_person,person_father:person_father,person_mother:person_mother,relationship:relationship,location:location},
        success: function(result){
          if(result == 1)
          alert('Your mail has been sent successfully!');
          else
          alert('Mail sending failed');
          
        },
        error: function(){
          alert('Unable to send email at this moment!');
        }
      })
    }


 //function showRSS(str) {

 //           if (str.length == 0) { 
 //              document.getElementById("output").innerHTML = "";
 //              return;
 //           }
         
 //           if (window.XMLHttpRequest) {
 //              xmlhttp = new XMLHttpRequest();
 //           }else {
 //              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 //           }

 //           xmlhttp.onreadystateclick = function() { 
 //              alert();
 //              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
 //                 alert();
 //                 document.getElementById("output").innerHTML = "test";//xmlhttp.responseText;
 //              }
 //           }
            
 //           xmlhttp.open("GET","rss.php?q="+str,true);
 //           xmlhttp.send();
 //           // alert();
 //        }
      
