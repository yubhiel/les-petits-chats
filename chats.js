let btn = document.querySelector('#load');
let gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {

    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(cats => {
            console.log('nombre de chats', cats.length, 'chats', cats)
            
            let i = 0;
            while (i < cats.length) {
                let image = document.createElement('img');
                image.setAttribute('src', cats[i].url);
                gallery.appendChild(image);
                ++i;
            }

    });

});