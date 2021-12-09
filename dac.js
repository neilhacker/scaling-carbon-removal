

/*function to hide/show sidebar*/
function sidebar(idTag) {
    var elms=document.getElementsByClassName("marginnote-reactive");
    for (let i = 0; i < elms.length; i++) {
    // console.log(elms[i].id)
    if(elms[i].id==idTag){
        if (elms[i].style.display === "block") {
        elms[i].style.display = "none";
        } else {
        elms[i].style.display = "block";
        }
    } else {
        elms[i].style.display = "none";
    }
    }
}

/*function to highlight all elements of same class on hover*/
function hoverByClass(classname,colorover,colorout="transparent"){
    var elms=document.getElementsByClassName(classname);
    for(var i=0;i<elms.length;i++){
        elms[i].onmouseover = function(){
            for(var k=0;k<elms.length;k++){
                elms[k].style.backgroundColor=colorover;
            }
        };
        elms[i].onmouseout = function(){
            for(var k=0;k<elms.length;k++){
                elms[k].style.backgroundColor=colorout;
            }
        };
    }
}


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
            }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
        }
    }
};
