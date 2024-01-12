// most popular movies list dega ye 
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


const imagePath = "https://image.tmdb.org/t/p/w1280";

// searched movie return call
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const moviesBox= document.querySelector('#movie-box')





    // initial call when the page loades


    const getMovies= async (api)=>{

           const response = await fetch(api);
           const data= await response.json();
        //    console.log(data);

           showMovies(data.results)
    }

    const showMovies =(data)=>{
        moviesBox.innerHTML="";
         data.forEach(item => {
             const box=document.createElement('div');
             box.classList.add('box');
             box.innerHTML = 
             `
                <img src="${imagePath+item.poster_path}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${item.original_title}  </h2>
                        <span> ${item.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${item.overview}
                    </p>
                 </div>
            `

            moviesBox.appendChild(box);

             
         });
    }

    // keyup --- user is typing something 
    document.querySelector('#search').addEventListener("keyup",(evt)=>{
       
        if(evt.target.value!=""){
            getMovies(searchApi+evt.target.value);
        }
        else{
            getMovies(APIURL);
        }
    })


    getMovies(APIURL);


