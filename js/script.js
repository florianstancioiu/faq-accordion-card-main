const listItems = document.querySelectorAll(".faq-content ul li");

listItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        listItems.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.toggle("active");
    });
});
