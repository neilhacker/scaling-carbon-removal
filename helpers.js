
/*function to hide/show sidebar*/
function sidebar(idTag) {
    console.log(idTag)
    var elms=document.getElementsByClassName("marginnote-reactive");
    console.log(elms)
    for (let i = 0; i < elms.length; i++) {
        if(elms[i].id==idTag){
            if (elms[i].style.display === "block") {
                elms[i].style.display = "none";
            } else {
                console.log("bye", window.outerWidth)  
                elms[i].style.display = "block";
                if (window.outerWidth <= 660) {   
                    console.log("hi")  
                    elms[i].style.left = "1rem"
                    elms[i].style.width = "95%"
                    elms[i].style.margin = "1rem 2.5%"
                  } else {
                    elms[i].style.left = "none"
                    elms[i].style.width = "50%"
                    elms[i].style.margin = "none"
                    elms[i].style.marginRight = "-60%"
                    elms[i].style.marginTop = "0.3rem"
                    elms[i].style.marginBottom = "0"

                  }
            
            }
        } else {
            elms[i].style.display = "none";
        }
    }
}


    /* left: 1rem;
    width: 95%;
    margin: 1rem 2.5%; */
    // if ( $(window).width() <= 660) {     
    //     //Add your javascript for screens wider than or equal to 768 here
    //   }
    //   else {
    //     //Add your javascript for screens smaller than 768 here
    //   }