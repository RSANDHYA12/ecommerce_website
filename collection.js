var enteredvalue=""
var productContainer = document.getElementById("product")
var search = document.getElementById("search")
var elements = productContainer.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    for (var i = 0; i < elements.length; i++) {
        var productname=elements[i].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            elements[i].style.display = "none"
        }
        else {
            elements[i].style.display = "block"
        }
    }
})