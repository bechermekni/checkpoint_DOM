const total = document.getElementById("total");

const plusBtn = document.getElementsByClassName("plus");
for (let btn of plusBtn) {
    btn.addEventListener("click", function () {

        const itemName = btn.getAttribute("name");


        const price = document.getElementById(itemName + "_price").innerHTML;


        const quantity = document.getElementById(itemName + "_qty");
        quantity.innerHTML++;


        total.innerHTML = +total.innerHTML + +price;
    });
}

const minusBtn = document.getElementsByClassName("minus");
for (let btn of minusBtn) {
    btn.addEventListener("click", function () {

        const itemName = btn.getAttribute("name");


        const price = document.getElementById(itemName + "_price").innerHTML;


        const quantity = document.getElementById(itemName + "_qty");

        if (+quantity.innerHTML > 0) {
            quantity.innerHTML--;
            total.innerHTML = +total.innerHTML - +price;
        }
    });
}

const deleteBtn = document.getElementsByClassName("delete");
for (let btn of deleteBtn) {
    btn.addEventListener("click", function () {

        const itemName = btn.getAttribute("name");


        const price = document.getElementById(itemName + "_price").innerHTML;


        const quantity = document.getElementById(itemName + "_qty");

        total.innerHTML = +total.innerHTML - +price * +quantity.innerHTML;

        document.getElementById(itemName).remove();
    });
}

const likeBtn = document.getElementsByClassName("heart");
for (let heart of likeBtn) {
    heart.addEventListener("click", function () {
        const heartColor = heart.getAttribute("fill");
        if (heartColor === "grey") {
            heart.setAttribute("fill", "red");
        } else {
            heart.setAttribute("fill", "grey");
        }
    });
}
