const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
//We’ll create another element, a div this time, and set the class attribute to container.
const container = document.createElement('div');
container.setAttribute('class', 'container');
//We’ll use the appendChild() method to append the logo image and container div to the app root.
app.appendChild(logo);
app.appendChild(container);
//Create request variable and assign a new XMLHttpRequest();
var request = new XMLHttpRequest();
//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function(){
    //Accessing JSON data here
    var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
                //create div with card class
                const card = document.createElement('div');
                card.setAttribute('class', 'card');
                //create an h1 and set the text content to the movie title
                const h1 = document.createElement('h1');
                h1.textContent = movie.title;
                //create a p and set text content to movie description < 300 characters
                const p = document.createElement('p');
                movie.description = movie.description.substring(0, 300); //limit amount to 300 characters
                p.textContent = `${movie.description}...`
                //append the cards to the container element
                container.appendChild(card);
                //each card will contain an h1 and a p
                card.appendChild(h1);
                card.appendChild(p);
                //log each movie's title
                console.log(movie.title);
                console.log(movie.description);
            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `mannn, it's not working!`;
            app.appendChild(errormessage);
            
        }
}
//send request
request.send();