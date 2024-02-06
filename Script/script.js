var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
  
    document.getElementById("loading").style.display = "none";
   

}, 4000);



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