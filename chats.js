let btn = document.querySelector('#load');
let gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {

    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(cats => {
            console.log('nombre de chats', cats.length, 'chats', cats)
            console.log(cats[0]);
            let url = cats[0].url;
            let image = document.createElement('img');
            
            image.setAttribute('src', url);
            gallery.appendChild(image);

    });

});