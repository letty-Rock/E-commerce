var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
  
    document.getElementById("loading").style.display = "none";
   

}, 4000);

function toggleMenu() {
    var menuBox = document.getElementById('menu-button');    
    if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
      menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "block";
    }
  }

/*
$(document).ready(function()
{
    $(window).scroll(function()
    {
        if($(this).scrollTop() > 10)
        {

            $('.navbar').removeClass('solid');
           
        }
        else
        {
            $('.navbar').addClass('solid');
        }
    });
});*/