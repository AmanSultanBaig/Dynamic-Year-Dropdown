// using dynamicDropdown in js 
let startYear = new Date().getFullYear()
    for (y = startYear; y >= 2017; y--) {
        var optn = document.createElement("OPTION");
        optn.text = y;
        optn.value = y;
        document.getElementById('year').options.add(optn);
        document.getElementById('year').style.color = 'black';
    }

// HTML: 
/*
 <select id="year"></select>
*/
