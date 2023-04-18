// For active in navbar
// document.getElementById('upnavbar').children[0].classList.add("active");

// By default only intro active
document.getElementById("introductionmain").style.display = "unset";
document.getElementById("chapter1").style.display = "none";
document.getElementById("chapter2").style.display = "none";
document.getElementById("chapter3").style.display = "none";
document.getElementById("chapter4").style.display = "none";

for (item of document.getElementsByClassName("introbtn")) {
    console.log("clicked");
    item.onclick = function () {
        console.log('clikced');
        document.getElementById("introductionmain").style.display = "unset";
        document.getElementById("chapter1").style.display = "none";
        document.getElementById("chapter2").style.display = "none";
        document.getElementById("chapter3").style.display = "none";
        document.getElementById("chapter4").style.display = "none";

        document.getElementById('upnavbar').children[0].classList.add("active");
        document.getElementById('upnavbar').children[1].classList.remove("active");
        document.getElementById('upnavbar').children[2].classList.remove("active");
        document.getElementById('upnavbar').children[3].classList.remove("active");
        document.getElementById('upnavbar').children[4].classList.remove("active");

    }
}

for (item of document.getElementsByClassName("chapter1btn")) {
    console.log("clicked");
    item.onclick = function () {
        console.log('clikced');
        document.getElementById("introductionmain").style.display = "none";
        document.getElementById("chapter1").style.display = "unset";
        document.getElementById("chapter2").style.display = "none";
        document.getElementById("chapter3").style.display = "none";
        document.getElementById("chapter4").style.display = "none";

        document.getElementById('upnavbar').children[0].classList.remove("active");
        document.getElementById('upnavbar').children[1].classList.add("active");
        document.getElementById('upnavbar').children[2].classList.remove("active");
        document.getElementById('upnavbar').children[3].classList.remove("active");
        document.getElementById('upnavbar').children[4].classList.remove("active");

    }
}

for (item of document.getElementsByClassName("chapter2btn")) {
    // console.log("clicked");
    item.onclick = function () {
        console.log('clikced2');
        document.getElementById("introductionmain").style.display = "none";
        document.getElementById("chapter1").style.display = "none";
        document.getElementById("chapter2").style.display = "unset";
        document.getElementById("chapter3").style.display = "none";
        document.getElementById("chapter4").style.display = "none";

        document.getElementById('upnavbar').children[0].classList.remove("active");
        document.getElementById('upnavbar').children[1].classList.remove("active");
        document.getElementById('upnavbar').children[2].classList.add("active");
        document.getElementById('upnavbar').children[3].classList.remove("active");
        document.getElementById('upnavbar').children[4].classList.remove("active");
    }
}

for (item of document.getElementsByClassName("chapter3btn")) {
    console.log("clicked");
    item.onclick = function () {
        console.log('clikced');
        document.getElementById("introductionmain").style.display = "none";
        document.getElementById("chapter1").style.display = "none";
        document.getElementById("chapter2").style.display = "none";
        document.getElementById("chapter3").style.display = "unset";
        document.getElementById("chapter4").style.display = "none";

        document.getElementById('upnavbar').children[0].classList.remove("active");
        document.getElementById('upnavbar').children[1].classList.remove("active");
        document.getElementById('upnavbar').children[2].classList.remove("active");
        document.getElementById('upnavbar').children[3].classList.add("active");
        document.getElementById('upnavbar').children[4].classList.remove("active");
    }
}

for (item of document.getElementsByClassName("chapter4btn")) {
    console.log("clicked");
    item.onclick = function () {
        console.log('clikced');
        document.getElementById("introductionmain").style.display = "none";
        document.getElementById("chapter1").style.display = "none";
        document.getElementById("chapter2").style.display = "none";
        document.getElementById("chapter3").style.display = "none";
        document.getElementById("chapter4").style.display = "unset";

        document.getElementById('upnavbar').children[0].classList.remove("active");
        document.getElementById('upnavbar').children[1].classList.remove("active");
        document.getElementById('upnavbar').children[2].classList.remove("active");
        document.getElementById('upnavbar').children[3].classList.remove("active");
        document.getElementById('upnavbar').children[4].classList.add("active");
    }
}



document.getElementById('rad1').onclick = function () {
    console.log('You clicked left radio button');
    document.getElementById('imgusacard').src = "images/cards/europe2 copy2.png";
    document.getElementById('accordionFlushExample1').style.display = "flow-root";
    document.getElementById('accordionFlushExample2').style.display = "none";
    document.getElementById('accordionFlushExample3').style.display = "none";
}

document.getElementById('rad2').onclick = function () {
    console.log('You clicked center radio button');
    document.getElementById('imgusacard').src = "images/cards/usa1.jpeg";
    document.getElementById('accordionFlushExample1').style.display = "none";
    document.getElementById('accordionFlushExample2').style.display = "flow-root";
    document.getElementById('accordionFlushExample3').style.display = "none";
}

document.getElementById('rad3').onclick = function () {
    console.log('You clicked right radio button');
    document.getElementById('imgusacard').src = "images/cards/japan2.png";
    document.getElementById('accordionFlushExample1').style.display = "none";
    document.getElementById('accordionFlushExample2').style.display = "none";
    document.getElementById('accordionFlushExample3').style.display = "flow-root";
}





//  META links

document.getElementById("meta1").onclick = function () {
    location.href = 'https://www.linkedin.com/pulse/understanding-metaverse-quick-guide-';
}
document.getElementById("meta2").onclick = function () {
    location.href = 'https://www.linkedin.com/pulse/understanding-metaverse-quick-guide-';
}
document.getElementById("meta3").onclick = function () {
    location.href = 'https://www.linkedin.com/pulse/understanding-metaverse-quick-guide-';
}
document.getElementById("meta4").onclick = function () {
    location.href = 'https://www.linkedin.com/pulse/understanding-metaverse-quick-guide-';
}
document.getElementById("meta5").onclick = function () {
    location.href = 'https://www.linkedin.com/pulse/understanding-metaverse-quick-guide-';
}




// navN = document.getElementById("navbarNav")


