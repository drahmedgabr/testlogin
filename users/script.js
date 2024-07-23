const mainDiv = document.getElementById("mainDiv");


async function getUsers() {
    
    const response = await fetch("https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/getUsers");

    const data = await response.json();

    const usersArray = data.users;

    for (let index = 0; index < usersArray.length; index++) {
        const element = usersArray[index];
        
        const userDiv = document.createElement("div");

        const userH1 = document.createElement("h1");

        userH1.innerText = `#${index + 1}`;

        const userH3 = document.createElement("h3");

        userH3.innerText = element.name;

        const userAddress = document.createElement("p");

        userAddress.innerText = element.address;

        const userTel = document.createElement("a");
        userTel.innerText = element.tel;
        userTel.href = `tel:${element.tel}`;

        const userAge = document.createElement("p");
        userAge.innerText = element.age;
        
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete User";
        deleteButton.onclick = function(){
            if(confirm("Are you sure to delete user?") == true){
                deleteUser(element.email);
            }
        }

        userDiv.appendChild(userH1);
        userDiv.appendChild(userH3);
        userDiv.appendChild(userAddress);
        userDiv.appendChild(userTel);
        userDiv.appendChild(userAge);
        userDiv.appendChild(deleteButton);

        const hrDiv = document.createElement("hr");

        mainDiv.appendChild(userDiv);
        mainDiv.appendChild(hrDiv);
    }

}

getUsers();


async function deleteUser(deletedEmail) {
    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/deleteUser?email=${deletedEmail}`

    const response = await fetch(apiUrl);
    const data = await response.json();
    const status = data.status;
    if(status == true){
        location.reload();
    } else {
        alert("delete user failed");
    }
}