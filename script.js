
let url = "https://api.github.com/users/"

form.addEventListener("submit", (event)=>{
    event.preventDefault();
   let search = document.getElementById("search").value
   let name = search.split(' ').join('')
   fetch("https://api.github.com/users/"+name)
   .then((result) => result.json())
   .then((data) => {
    console.log(data);
    document.getElementById('result').innerHTML= `
    <a targer=blank href = "https://github.com/${name}"> <img src="${data.avatar_url}"/></a><br>
     <a href="${data.url}"> ${data.name}</a><br>
     Number Of Repositories : ${data.public_repos}<br>
     Created at : ${data.created_at.split('T')[0]}<br>
     location : ${data.location.split('-')[1]}<br>
    `
   })
})
