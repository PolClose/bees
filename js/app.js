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
    pasiekaP.innerHTML =  " &nbsp;tak&nbsp;";
    button1.appendChild(pasiekaP);
    button1.classList.add("button");
    button1.style.backgroundImage = "url(images/pasieka.jpg)";
    button1.addEventListener("click", (el) => {
document.querySelector(".boxInBox").style.opacity = "0";
      document.querySelectorAll(".boxInBox img").forEach(function (e) {
        e.classList.add("hide");
      });
      setTimeout(function() {
        document.querySelector(".pasieka").classList.remove("hide")
          document.querySelector(".boxInBox").style.opacity = "1";
      }, 200);
    });

    let button2 = document.createElement("div");
    let labolatoryP = document.createElement("p");
    labolatoryP.innerHTML = " &nbsp;jest&nbsp; ";
    button2.appendChild(labolatoryP);
    button2.classList.add("button");
    button2.style.backgroundImage = "url(images/labolatory.jpg)";
    button2.style.backgroundPosition = "0px -40px";
    button2.addEventListener("click", (el) => {
      document.querySelector(".boxInBox").style.opacity = "0";
      document.querySelectorAll(".boxInBox img").forEach(function (e) {
        e.classList.add("hide");
      });
      setTimeout(function() {
        document.querySelector(".labolatory").classList.remove("hide")
          document.querySelector(".boxInBox").style.opacity = "1";
      }, 200);
    });

    let button3 = document.createElement("div");
    let productsP = document.createElement("p");
    productsP.innerHTML = "&nbsp; proszę &nbsp;";
    button3.appendChild(productsP);
    button3.classList.add("button");
    button3.style.backgroundImage = "url(images/products.jpg)";
    button3.style.backgroundPosition = "0px -40px";
    button3.addEventListener("click", (el) => {
      document.querySelector(".boxInBox").style.opacity = "0";
      document.querySelectorAll(".boxInBox img").forEach(function (e) {
        e.classList.add("hide");
      });
      setTimeout(function() {
        document.querySelector(".products").classList.remove("hide")
          document.querySelector(".boxInBox").style.opacity = "1";
      }, 200);
    });

    let button4 = document.createElement("div");
    let contactP = document.createElement("p");
    contactP.innerHTML = "&nbsp; Pana &nbsp;";
    button4.appendChild(contactP);
    button4.classList.add("button");
    button4.style.backgroundImage = "url(images/contact.jpg)";
    button4.addEventListener("click", (el) => {
      document.querySelector(".boxInBox").style.opacity = "0";
      document.querySelectorAll(".boxInBox img").forEach(function (e) {
        e.classList.add("hide");
      });
      setTimeout(function() {
        document.querySelector(".contact").classList.remove("hide")
          document.querySelector(".boxInBox").style.opacity = "1";
      }, 200);
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
        box.style.backgroundColor = "orange";
        container.appendChild(box);
        let boxInBox = document.createElement("div");
        boxInBox.classList.add("boxInBox");
        box.appendChild(boxInBox);

        let pasieka = document.createElement("img");
        pasieka.src = "images/pasieka.jpg";
        pasieka.classList.add("hide");
        pasieka.classList.add("pasieka");
        boxInBox.appendChild(pasieka);

        let labolatory = document.createElement("img");
        labolatory.src = "images/labolatory.jpg";
        labolatory.classList.add("hide");
        labolatory.classList.add("labolatory");
        boxInBox.appendChild(labolatory);

        let productsBox = document.createElement("div");
        let products = document.createElement("img");
        let products2 = document.createElement("div");
        products2.backgroundColor = "green";
        products2.style.width = "100px";
        products2.style.height = "100px";
        products.src = "images/products.jpg";
        products.classList.add("hide");
        products.classList.add("products");
        productsBox.appendChild(products);
        productsBox.appendChild(products2);
        boxInBox.appendChild(productsBox);

        let contact = document.createElement("img");
        contact.src = "images/contact.jpg";
        contact.classList.add("hide");
        contact.classList.add("contact");
        boxInBox.appendChild(contact);


});
