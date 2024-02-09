// Program Title
console.log("hi");

// Event Listener
document.getElementById("btn").addEventListener("click", run);

function run () {

    //IN
    let i1 = +document.getElementById("in1").value;
    let i2 = +document.getElementById("in2").value;
    let i3 = +document.getElementById("in3").value;
    let i4 = +document.getElementById("in4").value;

    let w1 = +document.getElementById("w1").value;
    let w2 = +document.getElementById("w2").value;
    let w3 = +document.getElementById("w3").value;
    let w4 = +document.getElementById("w4").value;



    //PRO
    let value1 = (i1 * w1 + i2 * w2 + i3 * w3 + i4 * w4) / (w1 + w2 + w3 + w4);
    

    //OUT
    document.getElementById("span").innerHTML = value1;

    



}

