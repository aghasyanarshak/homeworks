const ul = document.getElementById('breedsUl');
async function getAllList(){
    let responce = await fetch('https://ghibliapi.herokuapp.com/films');
    let data = await responce.json();
    drawBreeds(data);
}

function drawBreeds(breeds){
    const breedsObj = breeds;
    breedsObj.forEach(function(item){
        const li = document.createElement('li');
        li.addEventListener('click',function(){
            onLiClick(item.id);
        });
        li.append(item.title);
        ul.append(li); 
       
    });
    setImage(breeds[0].movie_banner,breeds[0].description);
    
}


async function onLiClick(filmId){
    let responce = await fetch(`https://ghibliapi.herokuapp.com/films?id=${filmId}`);
    let dataImage = await responce.json();
    let image = dataImage[0].movie_banner;
    let description = dataImage[0].description;
    setImage(image, description);
}

function setImage(image, description){
    let right = document.querySelector('.right');
    right.innerHTML = '';
    let rightImg = document.createElement('img');
    let desc = document.createElement('p');
    desc.innerHTML = description;
    rightImg.src = image;
    right.append(rightImg);
    right.append(desc);
}


getAllList();