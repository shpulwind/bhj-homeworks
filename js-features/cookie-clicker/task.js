const cookies = document.getElementById("cookie");

let times = 0;
cookies.onclick = () => {
    document.getElementById("clicker__counter").textContent++;
}

cookies.onmousedown = ()=> {
    cookies.width = 210;
    cookies.heigth = 210;
}

cookies.onmouseup = ()=> {
    cookies.width = 200;
    cookies.heigth = 200;
}