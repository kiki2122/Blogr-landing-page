function headermenu(){
    var nav = document.getElementById("bars");
    var close = document.getElementById("close");
    var menu = document.getElementById("mob-menu");
    if (nav.style.display == "block"){
        nav.style.display = "none";
        close.style.display = "block";
        menu.style.display = "block";
    } else{
        close.style.display = "none";
        nav.style.display = "block";
        menu.style.display = "none";
    }
}


function product(){
    var productMenu = document.getElementById("mob-product-list");
    var companyMenu = document.getElementById("mob-company-list");
    var connectMenu = document.getElementById("mob-connect-list");
    var container = document.getElementById("mob-menu");
    var horzLine = document.getElementById("hr");
    var login = document.getElementById("mob-list2");
    if (productMenu.style.display === "none"){
        productMenu.style.display = "block";
        companyMenu.style.display = "none";
        connectMenu.style.display = "none";
        container.style.height = "80%";
        horzLine.style.top = "65%";
        login.style.top = "69%";
    } else{
        productMenu.style.display = "none";
        container.style.height = "55%";
        horzLine.style.top = "50%";
        login.style.top = "54%";
    }
    
}

function company(){
    var companyMenu = document.getElementById("mob-company-list");
    var connectMenu = document.getElementById("mob-connect-list");
    var container = document.getElementById("mob-menu");
    var horzLine = document.getElementById("hr");
    var login = document.getElementById("mob-list2");
    if (companyMenu.style.display === "none"){
        companyMenu.style.display = "block";
        connectMenu.style.display = "none";
        container.style.height = "80%";
        horzLine.style.top = "65%";
        login.style.top = "69%";
        
    } else{
        companyMenu.style.display = "none";
        container.style.height = "55%";
        horzLine.style.top = "50%";
        login.style.top = "54%";
    }
    
}

function connect(){
    var connectMenu = document.getElementById("mob-connect-list");
    var container = document.getElementById("mob-menu");
    var horzLine = document.getElementById("hr");
    var login = document.getElementById("mob-list2");
    if (connectMenu.style.display === "none"){
        connectMenu.style.display = "block";
        container.style.height = "76%";
        horzLine.style.top = "63%";
        login.style.top = "67%";
    } else{
        connectMenu.style.display = "none";
        container.style.height = "55%";
        horzLine.style.top = "50%";
        login.style.top = "54%";
    }
    
}