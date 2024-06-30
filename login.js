const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userDiv = document.getElementById("userDiv");
const mainDiv = document.getElementById("mainDiv");
const errorText = document.getElementById("errorText");
const userName = document.getElementById("userName");
const userAddress = document.getElementById("userAddress");
const userAge = document.getElementById("userAge");
const userPhone = document.getElementById("userPhone");



async function loginUser() {
    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/login.php?email=${userEmail.value}&password=${userPassword.value}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const result = data.status;
    if(result == true){
        // mainDiv.style.display = "none";
        // userDiv.style.display = "block";
        // userName.innerText = data.name;
        // userAddress.innerText = data.address;
        // userAge.innerText = data.age;
        // userPhone.innerText = data.tel;
        location.href = "home.html";
    } else {
        errorText.style.display = "block";
    }
}