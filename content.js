function run()
{
    var checkExist = setInterval(function() 
    {
        if (document.getElementsByClassName("style-scope ytd-video-primary-info-renderer").length) {
            var elements = document.getElementsByClassName("style-scope ytd-video-primary-info-renderer");
            
            var element = elements[6];
            
            var node = element.childNodes[0];
            var new_title = "";
            var new_title = document.title.replace(" - YouTube", "");

            if (typeof node != "undefined")
            {
                if (node.nodeType === 3) 
                {
                    element.textContent = new_title;
                }
            }
            clearInterval(checkExist);
        }
    }, 100);
}

setInterval(run, 1000);