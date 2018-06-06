/* nav.js */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunction() {
    var nav = document.getElementById("main-top-nav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
} 
