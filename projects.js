function salmon(event) {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#FA8072";
    }
    document.getElementById("header").style.backgroundColor = "#989797";
    document.getElementById("h1").style.backgroundColor = "#989797";
    document.getElementById("nav").style.backgroundColor = "#989797";
    document.getElementById("image").style.borderColor = "#71ee99";
    document.getElementById("video").style.borderColor = "#71ee99";
    var navigation = document.querySelectorAll("nav, h1, nav p, nav a");
    for (var i = 0; i < elements.length; i++) {
        navigation[i].style.backgroundColor = "#989797";
    }
}

function green(event) {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if (1 < 2) {
            elements[i].style.backgroundColor = "#61ffa5";
        }
    }
    document.getElementById("header").style.backgroundColor = "#989797";
    document.getElementById("h1").style.backgroundColor = "#989797";
    document.getElementById("nav").style.backgroundColor = "#989797";
    document.getElementById("video").style.borderColor = "#ce0076";
    document.getElementById("image").style.borderColor = "#ce0076";
    var navigation = document.querySelectorAll("nav, h1, nav p, nav a");
    for (var i = 0; i < elements.length; i++) {
        navigation[i].style.backgroundColor = "#989797";
    }
}

function blue(event) {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "lightblue";
    }
    document.getElementById("header").style.backgroundColor = "#989797";
    document.getElementById("h1").style.backgroundColor = "#989797";
    document.getElementById("nav").style.backgroundColor = "#989797";
    document.getElementById("video").style.borderColor = "#000000";
    document.getElementById("image").style.borderColor = "#000000";
    var navigation = document.querySelectorAll("nav, h1, nav p, nav a");
    for (var i = 0; i < elements.length; i++) {
        navigation[i].style.backgroundColor = "#989797";
    }
}
