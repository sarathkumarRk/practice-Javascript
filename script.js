let fruits = ['apple', 'orange','grapes','bhanana']


// let filedfruits = fruits.filter((item)=>{
//     return item.includes('r')

// })

// filedfruits.forEach((item)=>{
//     document.getElementById('results').innerHTML +=  `<h1>${item}</h1>`
// }
// )

document.getElementById('search').addEventListener('keyup', ()=>{
    document.getElementById('results').innerHTML = ``

    let searchkey = document.getElementById('search').value

    let filedfruits = fruits.filter(item=>{
    return item.includes(searchkey)
    })

    filedfruits.forEach(item=>{
    document.getElementById('results').innerHTML +=  `<h1>${item}</h1>`

})
})

