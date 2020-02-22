function check() {
    let numA = +document.getElementById("numA-input").value;
    let numB = +document.getElementById("numB-input").value;
    if ((numA % numB) === 0) {
        alert("A chia hết cho B");
    } else {
        alert( "A không chia hết cho B");
    }
}