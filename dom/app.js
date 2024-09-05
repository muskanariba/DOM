var mainContent = document.getElementById("main-content");
console.log(mainContent); 
var childElements = mainContent.children;
console.log(childElements); // This will log the list of child elements inside the "main-content".

var render = document.getElementsByClassName("render")
for (var i = 0; i < render.length; i++) {
    console.log(render[i].innerHTML); }

    var fname = document.getElementById("first-name").value = "Alex";
    console.log(fname);
    var email = document.getElementById("email").value = "alexbank@example.com";
    console.log(email);
    var lname =document.getElementById("last-name").value = "bank"
    console.log(lname)

var formcontent = document.getElementById("form-content")
    console.log(formcontent.nodeType)

    var lname_ =document.getElementById("last-name")
    console.log(lname_.nodeType)

    console.log(mainContent.firstChild)
    console.log(mainContent.lastChild)
    console.log(lname_.nextSibling)
    console.log(lname_.previousSibling)

    var email_ = document.getElementById("email")
    console.log(email_.parentNode)
    console.log(email_.nodeType)

