let gender = document.querySelector('#gender');
let lane = document.querySelector('#lane');
let button = document.querySelector('#button');

button.addEventListener('click', () => {
    console.log(gender.value, lane.value);
})

function champ(){
    if (gender.value == "fem" && lane.value == "jungle"){
        document.getElementById('evelynn').innerHTML = "<img src='images/evelynn.jpg' width='400'>";
    }
    else if(gender.value == "fem" && lane.value == "mid"){
        document.getElementById('annie').innerHTML = "<img src='images/annie.jpg' width='400'>";
    }
    else if(gender.value == "fem" && lane.value == "top"){
        document.getElementById('camille').innerHTML = "<img src='images/camille.jpg' width='400'>";
    }
    else if(gender.value == "fem" && lane.value == "adc"){
        document.getElementById('jinx').innerHTML = "<img src='images/jinx.jpg' width='400'>";
    }
    else if(gender.value == "fem" && lane.value == "sup"){
        document.getElementById('seraphine').innerHTML = "<img src='images/seraphine.jpg' width='400'>";
    }
    else if(gender.value == "pick" && lane.value == "pick"){
        document.getElementById('lol').innerHTML = "<img src='images/lol.jpg' width='400'>";
    }

    if (gender.value == "masc" && lane.value == "jungle"){
        document.getElementById('khazix').innerHTML = "<img src='images/khazix.jpg' width='400'>";
    }
    else if(gender.value == "masc" && lane.value == "mid"){
        document.getElementById('brand').innerHTML = "<img src='images/brand.jpg' width='400'>";
    }
    else if(gender.value == "masc" && lane.value == "top"){
        document.getElementById('jax').innerHTML = "<img src='images/jax.jpg' width='400'>";
    }
    else if(gender.value == "masc" && lane.value == "adc"){
        document.getElementById('varus').innerHTML = "<img src='images/varus.jpg' width='400'>";
    }
    else if(gender.value == "masc" && lane.value == "sup"){
        document.getElementById('thresh').innerHTML = "<img src='images/thresh.jpg' width='400'>";
    }
}
