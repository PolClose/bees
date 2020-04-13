document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let container = document.querySelector(".container");

//logo
    let logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "images/logo.jpg";

//menu
    let menu = document.createElement("div");
    menu.classList.add("menu");

    let button1 = document.createElement("div");
    let pasiekaP = document.createElement("p");
    pasiekaP.innerHTML =  " &nbsp;to&nbsp;";
    button1.appendChild(pasiekaP);
    button1.classList.add("button");
    button1.style.backgroundImage = "url(images/pasieka.jpg)";
    button1.addEventListener("click", (el) => {
      let removeel = document.querySelectorAll(".box > div");
      if (removeel.length > 0) {removeel[0].remove();};

      box.appendChild(boxpasieka);


      document.querySelector(".box > div").style.opacity = "0";
      setTimeout(function() {
          document.querySelector(".box > div").style.opacity = "1";
      }, 0);
    });

    let button2 = document.createElement("div");
    let labolatoryP = document.createElement("p");
    labolatoryP.innerHTML = " &nbsp;jest&nbsp; ";
    button2.appendChild(labolatoryP);
    button2.classList.add("button");
    button2.style.backgroundImage = "url(images/labolatory.jpg)";
    button2.style.backgroundPosition = "0px -40px";
    button2.addEventListener("click", (el) => {
      let removeel = document.querySelectorAll(".box > div");
      if (removeel.length > 0) {removeel[0].remove();};
      box.appendChild(boxlabolatory);
      document.querySelector(".box > div").style.opacity = "0";
      setTimeout(function() {
          document.querySelector(".box > div").style.opacity = "1";
      }, 0);
    });

    let button3 = document.createElement("div");
    let productsP = document.createElement("p");
    productsP.innerHTML = "&nbsp; me &nbsp;";
    button3.appendChild(productsP);
    button3.classList.add("button");
    button3.style.backgroundImage = "url(images/products.jpg)";
    button3.style.backgroundPosition = "0px -40px";
    button3.addEventListener("click", (el) => {
      let removeel = document.querySelectorAll(".box > div");
      if (removeel.length > 0) {removeel[0].remove();};
      box.appendChild(boxproducts);
      document.querySelector(".box > div").style.opacity = "0";
      setTimeout(function() {
          document.querySelector(".box > div").style.opacity = "1";
      }, 0);
    });

    let button4 = document.createElement("div");
    let contactP = document.createElement("p");
    contactP.innerHTML = "&nbsp; nu &nbsp;";
    button4.appendChild(contactP);
    button4.classList.add("button");
    button4.style.backgroundImage = "url(images/contact.jpg)";
    button4.addEventListener("click", (el) => {
      let removeel = document.querySelectorAll(".box > div");
      if (removeel.length > 0) {removeel[0].remove();};
      box.appendChild(boxcontact);
      document.querySelector(".box > div").style.opacity = "0";
      setTimeout(function() {
          document.querySelector(".box > div").style.opacity = "1";
      }, 0);
    });

    container.appendChild(logo);
    container.appendChild(menu);
    menu.appendChild(button1);
    menu.appendChild(button2);
    menu.appendChild(button3);
    menu.appendChild(button4);

    let buttons = document.querySelectorAll(".button");
    buttons.forEach(function(e){
      e.addEventListener("mouseenter", (el) => {
            e.style.height = "300px";
      })
    });
    buttons.forEach(function(e){
      e.addEventListener("mouseleave", (el) => {
            e.style.height = "100px";
      })
    });
    buttons.forEach(function(e){
      e.addEventListener("click", (el) => {
          if (e.clientHeight != 100) {
            e.style.height = "100px";
          }
      })
    });
    //box
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = "#FFFF99";
        container.appendChild(box);


    //pasieka
        let boxpasieka = document.createElement("div");
        boxpasieka.style.backgroundImage = "url(images/pasieka.jpg)";
        boxpasieka.style.height = "300px";
        box.appendChild(boxpasieka);

    //labolatory
        let boxlabolatory = document.createElement("div");
        boxlabolatory.style.backgroundImage = "url(images/labolatory.jpg)";
        boxlabolatory.style.height = "300px";

    //products
        let boxproducts = document.createElement("div");
        boxproducts.style.backgroundImage = "url(images/products.jpg)";
        boxproducts.style.height = "300px";

    //contact
        let boxcontact = document.createElement("div");
        boxcontact.style.backgroundImage = "url(images/contact.jpg)";
        boxcontact.style.height = "300px";



});
