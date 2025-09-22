// function changeText(){
//         document.getElementById('paragragh1').innerHTML = 'paragragh 1 changed'
//     }//function definition
    
    // document.getElementById('changebtn').onclick = function(){
    //     changeText()
    // }

    //function expression

    // let changeText = function(){
    //         document.getElementById('paragragh1').innerHTML = 'paragragh 1 changed'

    // }

    // arrow function

    let changeText = () => {
           document.getElementById('paragragh1').innerHTML = 'paragragh 1 changed'
 
    }

    document.getElementById('changebtn').addEventListener('click', function(){
        changeText();

    })
