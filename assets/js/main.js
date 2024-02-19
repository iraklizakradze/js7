// ----- HOMEWORK 7 ----- //
const apiUsers = document.getElementById('api-users')

function getUsers() {

    const request = new XMLHttpRequest();

    request.open('GET', 'https://reqres.in/api/unknown');
    request.addEventListener('load', function() {
        // console.log(this.responseText);
        const mosuliInfo = this.responseText;
        const mosuliInfoJS = JSON.parse(mosuliInfo);
        console.log(mosuliInfoJS);

        const ulElement = document.createElement('ul');

        mosuliInfoJS.data.forEach((element) => {
            // console.log(element)
            const li = document.createElement('li');

            // li.textContent = element.name + ' ' + element.color;
            li.textContent = `${element.name} ${element.color}`;
            ulElement.appendChild(li);
        });

        apiUsers.appendChild(ulElement)

    })
    request.send();
}
getUsers();


//////////////////////////////////////////////////////////////////////////