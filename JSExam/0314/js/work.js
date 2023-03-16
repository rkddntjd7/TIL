function openPage(pageName, e, color) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tablink = document.getElementsByClassName('tablink');
    let i;
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablink.length; i++) {
        tablink[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    e.style.backgroundColor = color;
}

document.getElementById("default").click();