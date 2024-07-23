const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const mainDiv = document.getElementById("mainDiv");
const errorText = document.getElementById("errorText");
const spinnerDiv = document.getElementById("spinnerDiv");



async function loginUser() {
    if (checkInput() == true) {
        spinnerDiv.style.display = "inline-block";
        mainDiv.style.display = "none";
        const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/login.php?email=${userEmail.value}&password=${userPassword.value}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        const result = data.status;
        if(result == true){
            location.href = "home.html";
        } else {
            errorText.style.display = "block";
        }
        spinnerDiv.style.display = "none";
        mainDiv.style.display = "block";
    }
}

function checkInput(){
    if (userEmail.value == "") {
        alert("please enter email");
        return false;
    } else if (userPassword.value == "") {
        alert("please enter password");
        return false;
    } else {
        return true;
    }
}