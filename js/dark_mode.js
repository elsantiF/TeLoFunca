document.addEventListener("readystatechange", function(){

    var cookies = getCookies();
    //if(!cookies.get("darkMode")){
    //    document.cookie = "darkMode=false; expires=31 Dec 6666 23:59:59 UTC; path=/";
    //}

    if(cookies.get("darkMode") == "true"){
        //console.log("d");
        //document.getElementById("body_div").classList.add("dark_mode_c");
        document.getElementById('dark_mode_ck').checked = true;
        changeToDrakMode(true);
    }else{
        //document.getElementById("body_div").classList.remove("dark_mode_c");
        document.getElementById('dark_mode_ck').checked = false;
        changeToDrakMode(false);
    }

    setInterval(function(){
        var elements = document.body.getElementsByTagName("*");
        for(var i = 0; i < elements.length; i++){
                elements[i].classList.add("trans_fliter");
        }
    }, 500);
});

document.getElementById("dark_mode_s").onchange = function(){
    if(document.getElementById('dark_mode_ck').checked){
        changeToDrakMode(true);
    }else{
        changeToDrakMode(false);
    }
}

function changeToDrakMode(active){
    var elements = document.body.getElementsByTagName("*");
    for(var i = 0; i < elements.length; i++){
        if(active){
            elements[i].classList.add("dark_mode");
            document.cookie = "darkMode=true; expires=31 Dec 6666 23:59:59 UTC; path=/";
        }else{
            elements[i].classList.remove("dark_mode");
            document.cookie = "darkMode=false; expires=31 Dec 6666 23:59:59 UTC; path=/";
        }
    }
}

function getCookies(){
    var cookieMap = new Map();
    var cookies   = document.cookie.split(";");

    cookies.forEach(function(str){
        try{
            var cookie = str.split("=");
            cookieMap.set(cookie[0].trim(), cookie[1].trim());
        }catch{}
    });

    return cookieMap;
}