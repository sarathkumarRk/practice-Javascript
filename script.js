let postsElement = document.querySelector('#posts')


fetch('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
    return Response.json()

}).then((data)=>{
    data.forEach(item => {
        postsElement.innerHTML += ` 

        <div>
        <h1>${item.id} - ${item.title}</h1>
        <p>${item.body}</p>
        </div>`
        
        
    });

})