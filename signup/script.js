const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userAddress = document.getElementById("userAddress");
const userName = document.getElementById("userName");
const userPhone= document.getElementById("userPhone");
const userAge = document.getElementById("userAge");

async function signUp() {
    if(checkInput() == true) {
        const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/signup?email=${userEmail.value}&password=${userPassword.value}&name=${userName.value}&address=${userAddress.value}&phone=${userPhone.value}&age=${userAge.value}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        const result = data.status;
        if(result == true){
            location.reload();
        } else {
            alert("signup failed");
        }
    }
}

function checkInput() {
    
    if (userEmail.value == "" || userPassword.value == "" || userAddress.value == "" || userName.value == "" || userPhone.value == "" || userAge.value == "") {
        alert("Please enter all data");
        return false;
    } else {
        return true;
    }

}