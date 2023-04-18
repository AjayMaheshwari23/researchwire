// Font size
Chart.defaults.font.size = 14;
var w = window.innerWidth;
if (w >= 359 && w <= 667) {
    // console.log("addme.js line 5");
    Chart.defaults.font.size = 6;
    var r = document.querySelector(':root');
    r.style.setProperty('--h22-font-size', '3rem');
    // function myFunction_get() {
    //     alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
        
    // }
    
    // var rs = getComputedStyle(r);
    // Create a function for setting a variable value
    // function myFunction_set() {
        // Set the value of variable --blue to another value (in this case "lightblue")
    // }
}




//  Data Stuff

var names = `SAMSUNG ELEC. CO., LTD.
IBM CORPORATION
LG CO.
TOYOTA JIDOSHA K.K.
CANON K.K.
TAIWAN SEMICONDUCTOR MFG. CO. LTD.
HUAWEI TECHNOLOGIES CO. LTD.
BOE TECHNOLOGY GROUP CO. LTD.
RAYTHEON TECHNOLOGIES CO.
QUALCOMM
SONY CO.
INTEL CO.
DELL TECHNOLOGIES
APPLE INC.
ALPHABET INC.
AMAZON.COM, INC.
MICRON TECHNOLOGY INC.
MICROSOFT CO.
HYUNDAI MOTOR COMPANY
HITACHI, LTD.
`
var cnts = `8513
4743
4580
3056
3046
3038
3023
2725
2684
2656
2638
2501
2445
2313
2077
2051
1921
1888
1786
1557`





// Data Ebds

Chart.defaults.backgroundColor = '#ffffff';
Chart.defaults.borderColor = '#ffffff';
Chart.defaults.color = '#ffffff';



const splitter = (str) => {

    var toberet = [];
    var temp = ""; var ok = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == `\n`) {
            toberet.push(temp)
            temp = "";
        }
        else {
            temp += str[i];
        }
    }
    toberet.push(temp)
    return toberet;

}


const datavaluesO = splitter(cnts)
const datalabelsO = splitter(names)

let datavalues = []
let datalabels = []

for (i = 0; i < 12; i++) {
    datavalues.push(datavaluesO[i]);
    datalabels.push(datalabelsO[i]);
}

const chartthis = new Chart(document.getElementById("line-chart"), {
    type: 'bar',
    data: {
        labels: datalabels,
        datasets: [{
            data: datavalues,
            label: "Interesting Patents Count",
            borderColor: "#ffffff",
            fill: false
        }
        ]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            datalabels: { // This code is used to display data values
                anchor: 'end',
                align: 'top',
                formatter: Math.round,
                // font: {
                //     weight: 'bold',
                //     size: 14
                // }
            }
        }

    }
});


function removedata() {
    let sz = datavalues.length;
    if (sz <= 5) { return; }
    console.log(datavalues);
    console.log(datavaluesO);
    datavalues.pop();
    datalabels.pop();
    console.log(datavalues);
    console.log(datavaluesO);
    chartthis.update();
}

function adddata() {
    let sz = datavalues.length;
    if (sz == 20) { alert("No more data"); return; }
    console.log(datavaluesO[sz]);
    datavalues.push(datavaluesO[sz]);
    datalabels.push(datalabelsO[sz]);
    chartthis.update();
}
