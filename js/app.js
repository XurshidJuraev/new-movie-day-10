let elWrapper = document.querySelector("#posts_list")

let elPostTemplate = document.querySelector("#post_item_template").content
var elForm = document.querySelector("#form");
var elInput = document.querySelector("#search").value;


function render(array, wrapper) {
    var posts = document.createDocumentFragment()

    if(array.length > 0){
        array.forEach(function(item) {
            var postTemplate = elPostTemplate.cloneNode(true)
    
            postTemplate.querySelector('#image').src = item.Poster;
            postTemplate.querySelector("#post_heading").textContent = item.Title
            postTemplate.querySelector("#post_user_id").textContent = item.Year
    
            posts.appendChild(postTemplate)
        })
        wrapper.innerHTML = null
        wrapper.appendChild(posts)
    }else {
        alert("Ma'lumot kelmadi")
    }

    console.log(array);
}



fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => render(data, elWrapper))
   

async function fetchData() {
    let response = await fetch("https://www.omdbapi.com/?apikey=73119f16&s=iron&page=5")

    let data = await response.json()
    console.log(data.Search);
    render(data.Search, elWrapper)
}


fetchData()

// searchInput.addEventListener('input', e => {

//     const element = e.target.value.toLowerCase()
//     // console.log(element)
//     const searchFunc = users
//         .filter(user => user.name
//         .toLowerCase()
//         .includes(element))
//     viewResults(searchFunc)
// })

// const viewResults = (arr) => {
//     let output = "";

//     arr.forEach(({ Title, Year }) => (output += `
//         <tr>
//             <td>
//                 <div class="results">
//                     <div>
//                         <h1>
//                             ${Title}
//                         </h1>
//                     </div>
//                     <div>
//                         <p>
//                             ${Year}
//                         </p>
//                     </div>
//                 </div>
//             </td>
//         </tr>
//     `));
//     items.innerHTML = output;
// }
// document.addEventListener("DOMContentLoaded", getItem);





elForm.addEventListener("submit", evt =>{
    evt.preventDefault();
    var searchedMovie = [];
    
    var elSearchInput = document.querySelector("#search").value;
    
    
    var searchKey = new RegExp(elSearchInput, "gi")
    render.forEach((movieItem) =>{
        var searchResult = item.Title.match(searchKey)
        if (searchResult) {
            searchedMovie.push(item);
        }
    })
    if (searchedMovie.length > 0) {
        elMoviesElement.innerHTML = null
        renderMovies(searchedMovie)
    }
})


var bookArray = [];
elMoviesElement.addEventListener("click", (evt) => {
    var elementId = evt.target.dataset.id

    if (elementId) {

        var founItem = render.find(function(item) {
            if (item.id == elementId) {
                return item
            }
        })
        bookArray.push(founItem)

    }
})