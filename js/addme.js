Chart.defaults.backgroundColor = '#ffffff';
Chart.defaults.borderColor = '#ffffff';
Chart.defaults.color = '#ffffff';


const datavaluesO = [8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725,];
const datalabelsO =
    [
        "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
        "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
        "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD.",
        "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
        "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
        "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD.",
        "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
        "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
        "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD.",
        "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
        "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
        "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD.",
        "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
        "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
        "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD.",
        "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
        "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
        "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD.",
        "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
        "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
        "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD.",
        "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
        "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
        "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD."
    ];

let datavalues = [0, 8513, 4743, 4580, 3056, 3046, 3038, 3023, 2725, 8513, 4743, 4580, 3056, 3046, 3038]
let datalabels = ["", "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
    "LG CORPORATION", "TOYOTA JIDOSHA K.K.", "CANON K.K.", "TAIWAN SEMICONDUCTOR MFG. CO. LTD.",
    "HUAWEI TECHNOLOGIES CO., LTD.", "BOE TECHNOLOGY GROUP CO., LTD.",
    "SAMSUNG ELECTRONICS CO., LTD.", "INTERNATIONAL BUSINESS MACHINES CORPORATION",
    "LG CORPORATION", "TOYOTA JIDOSHA K.K.",]

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
                font: {
                    weight: 'bold',
                    size: 16
                }
            }
        }
    }
});


function removedata() {
    let sz = datavalues.length;
    if (sz <= 2) { return; }
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
    // if (sz == 16) { return; }
    console.log(datavaluesO[sz]);
    datavalues.push(datavaluesO[sz]);
    datalabels.push(datalabelsO[sz]);
    chartthis.update();
}
