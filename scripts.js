document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: '(G)I-DLE', image: './img/artista-gidle.jpg', page: 'artista-gidle.html' },
        { name: 'Nicki Minaj', image: './img/artista-nicki-minaj.jpg', page: 'artista-nicki-minaj.html' },
        { name: 'IVE', image: './img/artista-ive.jpg', page: 'artista-ive.html' },
        { name: 'WJSN', image: './img/artista-wjsn.jpg', page: 'artista-wjsn.html' },
        { name: 'Sabrina Carpenter', image: './img/artista-sabrina-carpenter.jpg', page: 'artista-sabrina-carpenter.html' },
        { name: 'ONE PACT', image: './img/artista-one-pact.jpg', page: 'artista-one-pact.html' },
    ];
    
    const albumsData = [
        { name: 'Planet Her', artist: 'Doja Cat', image: './img/album-planet-her.jpg', page: 'album-planet-her.html' },
        { name: 'Beauty In Death', artist: 'Chase Atlantic', image: './img/album-beauty-in-death.jpg', page: 'album-beauty-in-death.html' },
        { name: 'The Chaos Chapter: Freeze', artist: 'TXT', image: './img/album-the-chaos-chapter-fight-or-escape.jpg', page: 'album-the-chaos-chapter-fight-or-escape.html' },
        { name: 'Born to die', artist: 'Lana Del Rey', image: './img/album-born-to-die.jpg', page: 'album-born-to-die.html' },
        { name: 'Get Up', artist: 'New Jeans', image: './img/album-get-up.jpg', page: 'album-get-up.html' },
        { name: 'Queen', artist: 'Nicki Minaj', image: './img/album-queen.jpg', page: 'album-queen.html' },
    ];
    
    const artistGrid = document.querySelector('.artists-grid');
    const albumGrid = document.querySelector('.albums-grid');

    artistsData.forEach(artist => {
        const artistCard = document.createElement('a');
        artistCard.href = artist.page;
        artistCard.classList.add('artist-card');
        artistCard.innerHTML = `
           <img src="${artist.image}" alt="imagem do ${artist.name}">
           <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `;
        artistGrid.appendChild(artistCard);
    });
        
    albumsData.forEach(album => {
        const albumCard = document.createElement('a');
        albumCard.href = album.page;
        albumCard.classList.add('album-card');
        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `;
        albumGrid.appendChild(albumCard);
    });
});
