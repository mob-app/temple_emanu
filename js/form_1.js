
function check(mythis)
    {

      var name=$('#name').val();
      var email=$('#email').val();
      var phone=$('#phone').val();
      var check=$('#check').val();
      var location=$('#location').val();
      var form= $(mythis).data('form');
    
    
    if(name == '' || email == '' || phone == '' || check == ''){
      myApp.alert('Details Missing!','Please fill all fields');
      return false;
    }
    
      if(form = mi_sheberach) {  
      var subject = "Mi Sheberach List";
          //console.log(contact);
      $.ajax({
        url: "mi-sheberach_form.php?query=mail",
        type:'POST',
        data:{name: name, email:email, phone:phone, check:check,location:location},
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

    else
    {
      var subject = "Membership Information Form";
      $.ajax({
        url: "mi-sheberach_form.php?query=mail",
        type:'POST',
        data:{name: name, email:email, phone:phone, check:check,location:location},
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
    }
 
      