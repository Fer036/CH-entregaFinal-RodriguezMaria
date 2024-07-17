/* -------------------------------------------------------------------------------------- */
/* -----------------------------------> API MARVEL <------------------------------------- */
/* -------------------------------------------------------------------------------------- */

/* Personajes del combate */
const IMG_CAPAMERICA = document.getElementById('img_capamerica');
const IMG_BLACKWID = document.getElementById('img_blackwid');
const IMG_IRONMAN = document.getElementById('img_ironman');
const IMG_SCARLET = document.getElementById('img_scarlet');
const IMG_SPIDERMAN = document.getElementById('img_spiderman');

/* Utilización de la api */
function fetchMarvelData(characterId, imgElement) {
    const PUBLICKEY = '691bf7b96e6059a7b7906ca697077c31';
    const PRIVATEKEY = '10740f0bf79e630b022ff99118d486a981eb1deb';
    const TS = new Date().getTime();
    const HASH = CryptoJS.MD5(TS + PRIVATEKEY + PUBLICKEY).toString();

    const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=${TS}&apikey=${PUBLICKEY}&hash=${HASH}&id=${characterId}`;

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return response.json();
        })
        .then(data => {
            const character = data.data.results[0];
            const imgElement = getImgElement(characterId);

            imgElement.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
            imgElement.alt = character.name;
        })
        .catch(error => console.error('Error fetching data', error));
};

/* Llamar para cada personaje */
fetchMarvelData('1009220'); // Capitán América
fetchMarvelData('1009189'); // Black Widow
fetchMarvelData('1009368'); // Ironman
fetchMarvelData('1009562'); // Scarlet Witch
fetchMarvelData('1009610'); // Spiderman

function getImgElement(characterId) {
    switch (characterId) {
        case '1009220': // Capitán América
            return IMG_CAPAMERICA;
        case '1009189': // Black Widow
            return IMG_BLACKWID;
        case '1009368': // Ironman
            return IMG_IRONMAN;
        case '1009562': // Scarlet Witch
            return IMG_SCARLET;
        case '1009610': // Spiderman
            return IMG_SPIDERMAN;
        default:
            return null;
    }
}
