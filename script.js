document.getElementById('joinbtn').addEventListener('click', function(){
    let firstname=document.getElementById('firstname').value
    let lastname=document.getElementById('lastname').value

    if (firstname === '' || lastname === '') {
        document.getElementById('results').innerHTML = 'please check input'
    }else{
        document.getElementById('results').innerHTML = `${firstname} ${lastname}`

    }

    
})