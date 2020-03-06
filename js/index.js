const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Task 1: Create selectors to point your data into elements
 //Create selectors by using any of the DOM element's methods
 // Note that IDs have been used on all images. Use the IDs to update src path content



//images
let ctaImg = document.getElementById("cta-img"); 
let mainImg = document.getElementById("middle-img");

//nav
let headerNav = document.querySelector("header nav"); 

//CTA
let ctaHeadline = document.querySelector(".cta-text h1"); 
let ctaButton = document.querySelector(".cta-text button");

//main content
let mainH4 = document.querySelectorAll(".text-content h4");
let mainText = document.querySelectorAll(".text-content p");

//contact
let contactHeader = document.querySelector(".contact h4");
let contactText = document.querySelectorAll(".contact p");

//footer
let footerText = document.querySelector("footer p");

//Task 2: Update the HTML with the JSON data
 //Remember, NO direct updating of the HTML source is allowed.
 //Using your selectors, update the content to match the example file.
 //Remember to update the src attributes on images

//update images
ctaImg.src = siteContent["cta"]["img-src"];
mainImg.src = siteContent["main-content"]["middle-img-src"];
 

//header nav
headerNav.children[0].text = siteContent["nav"]["nav-item-1"];
headerNav.children[1].text = siteContent["nav"]["nav-item-2"];
headerNav.children[2].text = siteContent["nav"]["nav-item-3"];
headerNav.children[3].text = siteContent["nav"]["nav-item-4"];
headerNav.children[4].text = siteContent["nav"]["nav-item-5"];
headerNav.children[5].text = siteContent["nav"]["nav-item-6"];


//CTA content
ctaHeadline.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];

//main content

mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];

mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"];
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

//contact
contactHeader.textContent = siteContent["contact"]["contact-h4"];

contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

//footer
footerText.textContent = siteContent["footer"]["copyright"]


// Task 3: Add new content
//  Change the color of the navigation text to be green.

for (i = 0; i < headerNav.children.length; i++) {
  headerNav.children[i].style.color = "green";
}


//  Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you w
const headerChild1 = document.createElement("a");
const headerChild2 = document.createElement("a");

headerChild1.textContent = "Hi there!";
headerChild2.textContent = "well, hello!";

headerNav.appendChild(headerChild1);
headerNav.prepend(headerChild2);


//  Check your work by looking at the original html in the browser