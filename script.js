let weathervalue = 'sarath';

if (weathervalue === 'israning'|| weathervalue === 'hot') {
    document.getElementById('results').innerHTML = 'Take in umbralla'  
}else if(weathervalue === 'sunny'){
    document.getElementById('results').innerHTML = 'Take the cooling glass'
}else{
    document.getElementById('results').innerHTML = 'invalid item'
}