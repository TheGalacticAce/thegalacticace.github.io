function textInput () {
    if (document.getElementById("textInput").value == "dhlv_login1") {
        document.getElementById("p1").innerHTML = "<a href=\"https://airtable.com/shr9jz78b8PHFCnyg\">PIREP Form</a>" 
    } else {
        document.getElementById("p1").innerHTML = "Incorrect Password"
    }
}
