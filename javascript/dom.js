// Accessing Specific nodes in respect to their parent
const parentNode = document.querySelector("#parent");
parentNode.firstElementChild;
parentNode.lastElementChild;

// Query Selectors are used to return the first or all
// nodes matching the query
document.querySelector("div"); // Select the first div element
document.querySelectorAll("div"); // Selects all the divs in the document

// Element Creation, Insertion, Deletion
document.createElement("div");
document.parentElement.appendChild(node);
document.parentElement.insertBefore(node, target);
document.parentElement.removeChild(node);

// Adding inline styles
const elem = document.createElement("p");
elem.style.color = "blue";
elem.style.cssText = "color:blue; background:white";
elem.setAttribute("style", "color:blue;background:white");
//elem.style.background-color = "This does not work...";
elem.style.backgroundColor = "white"; // Works
elem.style["background-color"] = "white"; // Also works

elem.id = "SomeId";
elem.setAttribute("id", "AnotherId");
elem.id == "AnotherId";
elem.getAttribute("id") == "AnotherId";
elem.removeAttribute("id");

elem.classList.add("oneClass twoClass");
elem.classList.remove("redClass blueClass");
elem.classList.toggle("markImportant");

// You can make sure that a JavaScript file will run _after_ your HTML document loads by
// using the 'defer' tag in the element's definition, like so:
<script src="func.js" defer></script>;
