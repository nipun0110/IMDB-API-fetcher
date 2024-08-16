function addMovie(){
    let imgUrl = '';
    const value = document.querySelector("input").value;
const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4dab1164b7mshcea16404bd83b06p1218fcjsna091c2bf4b4d',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
fetch(url,options).then((response)=>{
    return response.json();
}).then((data)=>{
    imgUrl = data.d[2].i.imageUrl;
});
setTimeout(()=>{

    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movieItem');
    const img = document.createElement('img');
    img.src = imgUrl;
    movieDiv.appendChild(img);
    const p = document.createElement('p');
    p.innerText = value;
    movieDiv.appendChild(p);
    movieDiv.classList.add('movieTitle');
    const movieContainer = document.querySelector('.movieList');
    movieContainer.appendChild(movieDiv);
    document.querySelector('input').value = "";
},3000);
}