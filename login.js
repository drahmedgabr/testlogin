const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const mainDiv = document.getElementById("mainDiv");
const errorText = document.getElementById("errorText");



async function loginUser() {
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
}