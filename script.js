document.getElementById('startbtn').addEventListener('click', function(){
    document.getElementById('results').innerHTML = ``

    let totallap = parseInt(document.getElementById('input').value)
    let currentlap = 1;

    while (currentlap <= totallap) {
        document.getElementById('results').innerHTML += `<h1>lap${currentlap} is completed</h1>`
        currentlap++;
        
    }
    console.log('you won');
})