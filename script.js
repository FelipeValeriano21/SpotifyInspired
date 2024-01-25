const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist');
const resultsPlaylist = document.getElementById('result-playlist');


function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

    fetch(url)
        .then(response => response.json())
      //  .then(result => displayResults(result))
        .catch(error => console.error('Erro na solicitação API:', error));
}


document.addEventListener('input', function(){

    const seachTerm = searchInput.value.toLowerCase();

    if(seachTerm === '') {

        resultsPlaylist.classList.add('hidden');
        resultsArtists.classList.remove('hidden');
        return;
    }

    requestApi(seachTerm);

})