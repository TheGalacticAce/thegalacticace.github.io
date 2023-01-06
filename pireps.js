function textInput () {
    if (document.getElementById("textInput").value == "dhlv_login1") {
        document.getElementById("p1").innerHTML = "<a href=\"https://airtable.com/shr9jz78b8PHFCnyg\">PIREP Form</a>"
        document.getElementById("p2").innerHTML = "<a href=\"https://airtable.com/shriMXGeIgkjtW0o3\">CrewCenter</a>" 
    } else {
        document.getElementById("p1").innerHTML = "Incorrect Password"
        document.getElementById("p2").innerHTML = ""
    }
}