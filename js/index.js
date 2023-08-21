document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("buttonText").addEventListener("click", () => {
        localStorage.setItem("dato", document.getElementById("inputText").value)
    });

});