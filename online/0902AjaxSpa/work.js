const starWarsApiUrl = "https://swapi.dev/api/films";

// Выполнение запроса axios
window.addEventListener('load', (event) => {
    axios.get(starWarsApiUrl)
        .then(res => {
            //  Сценарий если успешно
            for (let episodInfo of res.data.results) {
                // console.log(episodInfo);
                let title = episodInfo.title;
                let episodID = episodInfo.episode_id;
                let episodYear = new Date(episodInfo.release_date).getFullYear();
                // console.log(title, episodID, episodYear);
                addEpisode(title, episodID, episodYear);
            }
        })
        .catch(err => {
            //  Сценарий если ошибка
            console.log("ERROR");
            console.log(err);
        })
})


function addEpisode(title, episode_id, episodYear) {
    const divEpisodes = document.createElement('div');
    divEpisodes.className = "episodes";

    const divEpisode = document.createElement('div');
    divEpisode.className = "episode";

    const divEpisodeHeader = document.createElement('div');
    divEpisodeHeader.className = "episode-header";

    const h2EpisodeTitle = document.createElement('h2');
    h2EpisodeTitle.className = "episode-title";
    const h3EpisodeInfo = document.createElement('h3');
    h3EpisodeInfo.className = "episode-info";

    const divEpisodeVerbose = document.createElement('div');
    divEpisodeVerbose.className = "episode-verbose";
    
    
    divEpisodeVerbose.innerText = "";
    h2EpisodeTitle.innerText = title;
    h3EpisodeInfo.innerText = `${episode_id}, ${episodYear}`;

    divEpisodeHeader.appendChild(h2EpisodeTitle);
    divEpisodeHeader.appendChild(h3EpisodeInfo);

    divEpisode.appendChild(divEpisodeHeader);
    divEpisodes.appendChild(divEpisode);

    document.body.appendChild(divEpisodes);
}