// ----- HOMEWORK 7 ----- //
// const apiUsers = document.getElementById('api-users')

// function getUsers() {

//     const request = new XMLHttpRequest();

//     request.open('GET', 'https://reqres.in/api/unknown');
//     request.addEventListener('load', function() {
//         // console.log(this.responseText);
//         const mosuliInfo = this.responseText;
//         const mosuliInfoJS = JSON.parse(mosuliInfo);
//         console.log(mosuliInfoJS);

//         const ulElement = document.createElement('ul');

//         mosuliInfoJS.data.forEach((element) => {
//             // console.log(element)
//             const li = document.createElement('li');

//             // li.textContent = element.name + ' ' + element.color;
//             li.textContent = `${element.name} ${element.color}`;
//             ulElement.appendChild(li);
//         });

//         apiUsers.appendChild(ulElement)

//     })

//     request.addEventListener('error', function() {
//         const pDesc = document.createElement('p');
//         pDesc.textContent = 'Server Error';
        
//         apiUsers.appendChild(pDesc);
//     })
//     request.send();
// }
// getUsers();


//////////////////////////////////////////////////////////////////////////


// fetch
const apiUsers = document.getElementById('api-users')


fetch('http/reqres.in/api/unknown', {
    method: 'GET'
})
.then( function(response) {
    if(!response.ok) {
        throw response.status
    }
    return response.json();
})
.then( function(responseData) {

    const ulElement = document.createElement('ul');

    responseData.data.forEach((element) => {
        // console.log(element)
        let li = document.createElement('li');
        
        // li.textContent = element.name + ' ' + element.color;
        li.textContent = `${element.name} ${element.color}`;
        ulElement.appendChild(li);
    });
    apiUsers.appendChild(ulElement)
    // console.log(responseData)
})
.catch( function(error) {

    if (error == 404) {
        const pDesc = document.createElement('p');
        pDesc.textContent = 'Page Not Found';
        apiUsers.appendChild(pDesc);
    }
    // console.log(error)
})