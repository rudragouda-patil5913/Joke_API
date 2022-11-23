const btn = document.getElementById("joke");
const smile = document.getElementById("hahaha");


const genJoke = async ()=>{
    
    const res = await fetch("https://v2.jokeapi.dev/joke/Any")
    const data = await res.json();
    console.log(data);
    smile.innerHTML = data.setup;
}

btn.addEventListener("click", genJoke);