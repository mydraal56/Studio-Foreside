var mobileMenuBar = function() { 
    if(screen.width <= 500)
    {
       
       var v = document.getElementById("mdl-navigation").style.display;
       
        if(document.getElementById("mdl-navigation").style.display == 'none' || document.getElementById("mdl-navigation").style.display == '')
        {
            document.getElementById("mdl-navigation").style.display = 'block';
            document.getElementById("view").style.display = 'none';
        }
        else
        {
            document.getElementById("mdl-navigation").style.display = 'none';
            document.getElementById("view").style.display = 'block';
        }
    }
    else
        document.getElementById("mdl-navigation").style.display = 'block';
                
        
}