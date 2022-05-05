function sayiuretme() {

    let randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber == 2) {
        document.getElementById("img1").setAttribute("src", "images/tura.png")
        document.querySelector("h1").innerHTML = "Tura Kazandı!";
    } else {
        document.getElementById("img1").setAttribute("src", "images/yazı.png");
        document.querySelector("h1").innerHTML = "Yazı Kazandı!";
    }


}
