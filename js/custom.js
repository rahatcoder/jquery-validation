$(function() {
  $("#registration").validate({
    rules: {
      name: "required",
      phone: "required",
      email:{
          required: true,
          email: true
        },
      username:{
          required: true,
          minlength: 5,
          maxlength:10
        },
      pass: "required",
      repass:{
          required: true,
          equalTo: "#pass"
        },
    },
   
    messages: {
      name: "Please enter your name.",
      phone: "Please enter phone number.",
      email:{
          required: "Please enter email address.",
          email: "Please enter a valid email address."
        },
      username:{
          required: "Please enter username.",
        },
      pass: "Please enter password'",
      repass:{
          required: "Please enter confirm password",
          equalTo: "Password and confirm password didn't match"
        },
    },
    
    submitHandler: function(form) {
      form.submit();
    }
  });
});