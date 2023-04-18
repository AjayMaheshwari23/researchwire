ab = `Welcome to our annual special edition report "RW-Pixels" on patent insights and trends in the world of technology and intellectual property! In this specialedition from Researchwire, we  will be exploring the latest developments in the patent landscape, including expiring patents, emerging markets, and company achievements. We have also featured a collection of thought leadership articles, blogs, and researched data visualisation that offer unique insights and perspectives on different innovations and also on the most pressing issues facing businesses and organizations today. From our team of experienced professionals, you can expect a thorough analysis of the latest trends and outlook for the future of the industry. We hope that RW-Pixels will provide a valuable resource for those seeking to stay ahead of the curve in this fast-moving industry, and we look forward to continuing to support the success of our clients with cutting-edge research and analysis.`
a = `weahfk,eh`;
b = `and also on the most pressing issues facing businesses and organizations today. From our team of experienced professionals, you can expect a thorough analysis of the latest trends and outlook for the future of the industry. We hope that RW-Pixels will provide a valuable resource for those seeking to stay ahead of the curve in this fast-moving industry, and we look forward to continuing to support the success of our clients with cutting-edge research and analysis.`
// document.getElementById("pg1p1").innerText= a;
// document.getElementById("pg1p2").innerText= b;
setInterval(() => {
    var w = window.innerWidth;
    if (w >= 359 && w <= 667) {
        document.getElementById("upnavbarintro").style.display = "contents";
        document.getElementById("centerME").style.marginLeft = "0px";
        document.getElementById("RWlogo").style.display = 'unset';

        document.getElementById("peopleIMG1").src = "images/people/d1phone.png";
        document.getElementById("peopleIMG2").src = "images/people/d2phone.png";
        document.getElementById("peopleIMG3").src = "images/people/d3phone.png";
        document.getElementById("peopleIMG4").src = "images/people/d4phone.png";
        document.getElementById("peopleIMG5").src = "images/people/d5phone.png";
        document.getElementById("newsIMG").src = "images/news/newsphone.png";


        document.getElementById("line-chart").style.height = '250px';
        document.getElementById("pg1p1").innerText = ab;
        document.getElementById("pg1p2").innerText = ""

        // console.log("working...");

    } else if (w >= 668 && w <= 1200) {
        document.getElementById("upnavbarintro").style.display = "contents";
        document.getElementById("RWlogo").style.display = 'unset';
        document.getElementById("pg1p1").innerText = `Welcome to our annual special edition report "RW-Pixels" on patent insights and trends in the world of technology and intellectual property! In this specialedition from Researchwire, we  will be exploring the latest developments in the patent landscape, including expiring patents, emerging markets, and company achievements. We have also featured a collection of thought leadership articles, blogs, and researched data visualisation that offer unique insights and perspectives on different innovations`;
        document.getElementById("pg1p2").innerText = b;
        document.getElementById("lastBTNTO").innerHTML = `Introduction <iclass="fa-solid fa-arrow-right"></i>`;
        document.getElementById("lastBTNTO2").innerHTML = `<i class="fa-solid fa-arrow-left"></i> Introduction`;
        document.getElementById("line-chart").style.height = '400px';

    }
    else {
        document.getElementById("upnavbarintro").style.display = "flex";
        document.getElementById("RWlogo").style.display = 'none';
        document.getElementById("centerME").style.marginLeft = "-37vw";
        // console.log(a);
        document.getElementById("pg1p1").innerText = `Welcome to our annual special edition report "RW-Pixels" on patent insights and trends in the world of technology and intellectual property! In this specialedition from Researchwire, we  will be exploring the latest developments in the patent landscape, including expiring patents, emerging markets, and company achievements. We have also featured a collection of thought leadership articles, blogs, and researched data visualisation that offer unique insights and perspectives on different innovations`;
        document.getElementById("pg1p2").innerText = b;
        document.getElementById("lastBTNTO").innerHTML = `Introduction <iclass="fa-solid fa-arrow-right"></i>`;
        document.getElementById("lastBTNTO2").innerHTML = `<i class="fa-solid fa-arrow-left"></i> Introduction`;
        // document.getElementById("RWlogo").style.marginLeft= "-27vw";
        // console.log("Hidden...");
    }


    var a = document.getElementById("Expandbtn").getAttribute('aria-expanded');
    if (a == 'false') {
        document.getElementById("threeMob").style.backgroundColor = 'white';
        // console.log("Black set");
    } else {
        document.getElementById("threeMob").style.backgroundColor = 'black';
        // console.log("opened");
    }


}, 10);

// IMAGE Carousel

var w = window.innerWidth;
if (w >= 359 && w <= 1200) {
    // console.log("KOIO");
    document.getElementById("googlexemb").src = "https://googlex2.netlify.app/";

}