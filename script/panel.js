
let dropDown = document.getElementsByClassName("dropdown-btn");
let i;
for (i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
