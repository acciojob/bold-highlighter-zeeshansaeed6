function highlight() {
    let strongTags = document.querySelectorAll("strong");
    strongTags.forEach((element) => {
        element.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    let strongTags = document.querySelectorAll("strong");
    strongTags.forEach((element) => {
        element.style.color = "rgb(0, 0, 0)";
    });
}