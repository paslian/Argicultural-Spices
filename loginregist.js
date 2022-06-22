$(".form input").on("focus", function () {
    $(this).addClass("focus");
  });
  $(".form input").on("blur", function () {
    if ($(this).val() == "")
      $(this).removeClass("focus");
  });

  function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" && password == ""){
        alert("please fill in your username and password");
        return false;
    }
    else{
        window.location.href="index.html";
        alert("login succsesfully");
    }
}

    function confirm(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var password1 = document.getElementById("password1").value;
        var handphone = document.getElementById("handphone").value;
        if (username == "" && password == "" && password1 == "" && handphone == ""){
            alert("please nothing is not filled in!");
            return false;
        }
        else if (password !== password1){
            alert("the password you entered is not the same");
            return ;
        }
        else if (handphone.length > 13){
            alert("your mobile number is more than 12");
            return ;
        }
        else{
            window.location.href="Login.html";
            alert("register succsesfully");
        }
  }