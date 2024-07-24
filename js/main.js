
function closeNav(){
    let allWidth = $('nav').outerWidth()
    $('aside').animate({left : -allWidth} , 700)
    $('ul li').animate({top : '300px'} , 700)
    $('.openNav').removeClass('fa-xmark').addClass('fa-bars')
 
}

function openNav(){
    $('aside').animate({left : 0} , 700)
    $('.openNav').removeClass('fa-bars').addClass('fa-xmark')
    $('ul li').eq(0).animate({top : '0px'} , 700)
    $('ul li').eq(1).animate({top : '0px'} , 800)
    $('ul li').eq(2).animate({top : '0px'} , 900)
    $('ul li').eq(3).animate({top : '0px'} , 1000)
    $('ul li').eq(4).animate({top : '0px'} , 1100)
    $('ul li').eq(5).animate({top : '0px'} , 1200)
}


$('.pointer .fa-bars').on('click' , ()=>{

  

   
    if($('aside').css('left') == '0px' ){
        closeNav()
    }
    else{
        openNav()
    }
})
closeNav()

// ============================

  $(document).ready(function(){
    $(".loading").fadeOut(2000,function(){
        $(".loading").removeClass("d-flex")
    })
})

// ============================

async function getPlayingNow(){
  

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg3YmZlOWI5ZjY0OTkxOTNlZThlNTdlZDg1YWE2NSIsIm5iZiI6MTcyMTQxMTAxMC43NDMzMTMsInN1YiI6IjY2OTljYzQ5Mjc2MGQ1OTViYzk0MTUyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xqeZIITYcLoMbBl9Hztq7mRhSgV4ET6XhBIR9DuG8DQ'
      }
    };
    
     let response =  await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
     let movies = await response.json()
     displaymovies(movies.results)
     
}

getPlayingNow('')



async function getPopular(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg3YmZlOWI5ZjY0OTkxOTNlZThlNTdlZDg1YWE2NSIsIm5iZiI6MTcyMTQxMTAxMC43NDMzMTMsInN1YiI6IjY2OTljYzQ5Mjc2MGQ1OTViYzk0MTUyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xqeZIITYcLoMbBl9Hztq7mRhSgV4ET6XhBIR9DuG8DQ'
    }
  };
  
  let response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    let movie = await response.json() 
   
    displaymovies(movie.results)
    
}




async function getTopRated(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg3YmZlOWI5ZjY0OTkxOTNlZThlNTdlZDg1YWE2NSIsIm5iZiI6MTcyMTQxMTAxMC43NDMzMTMsInN1YiI6IjY2OTljYzQ5Mjc2MGQ1OTViYzk0MTUyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xqeZIITYcLoMbBl9Hztq7mRhSgV4ET6XhBIR9DuG8DQ'
    }
  };
  
  let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  let movie = await response.json() 


  displaymovies(movie.results)

}

async function getUpComing(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg3YmZlOWI5ZjY0OTkxOTNlZThlNTdlZDg1YWE2NSIsIm5iZiI6MTcyMTQxMTAxMC43NDMzMTMsInN1YiI6IjY2OTljYzQ5Mjc2MGQ1OTViYzk0MTUyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xqeZIITYcLoMbBl9Hztq7mRhSgV4ET6XhBIR9DuG8DQ'
    }
  };
  
  let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  let movie = await response.json() 


  displaymovies(movie.results)
}

async function getTrending(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg3YmZlOWI5ZjY0OTkxOTNlZThlNTdlZDg1YWE2NSIsIm5iZiI6MTcyMTQxMTAxMC43NDMzMTMsInN1YiI6IjY2OTljYzQ5Mjc2MGQ1OTViYzk0MTUyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xqeZIITYcLoMbBl9Hztq7mRhSgV4ET6XhBIR9DuG8DQ'
    }
  };
  
  let response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  let movie = await response.json() 
 
  displaymovies(movie.results)
  console.log(movie.results);
}

function displaymovies(arr){
  cartona = ''

  
  for(let i = 0 ; i < arr.length ; i++){
    
      cartona+=`
      <div class="col-md-6 p-4  col-lg-4  p-4 ">
        <div class="rounded film position-relative overflow-hidden ">
          <div class="imgRotate">
          <img
            src = "https://image.tmdb.org/t/p/w500/${arr[i].poster_path}}"
            class="rounded w-100"
            alt=""
          />
        </div>


          <div class="text-white position-absolute filmLayer p-4">

            <h3 class="text-center mb-3 position-relative ">${arr[i].title}</h3>
            <p class="fw-light mb-3 position-relative">
             ${arr[i].overview}
            </p>
            <p class="position-relative">Release Date: ${arr[i].release_date}</p>
            
              <div class='d-block star mb-3' >
               <i class="fa-solid fa-star   text-warning position-relative"></i>
            <i class="fa-solid fa-star   text-warning position-relative"></i>
            <i class="fa-solid fa-star   text-warning position-relative"></i>
            <i class="fa-solid fa-star   text-warning position-relative"></i>
             </div>
            <span class="border border-3 border-success rounded-circle p-2 position-relative">${arr[i].vote_average.toFixed(1)}</span></div>
           
         
        </div>
      </div>
      `
  }

  document.getElementById('rowData').innerHTML = cartona
}


async function searchMovies(term){
  let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=1187bfe9b9f6499193ee8e57ed85aa65`);
  let movies = await response.json() 

  if(term != ''){
    displaymovies(movies.results)
  }
}



function validateForm() {
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const age = document.getElementById('age').value.trim();
  const password = document.getElementById('password').value.trim();
  const repassword = document.getElementById('repassword').value.trim();
  
 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{11}$/;
  
 
  if (name === '') {
    document.getElementById('nameAlert').classList.remove('d-none')
    document.getElementById('name').classList.add('border-danger')

    return false;
  }else{
    document.getElementById('nameAlert').classList.add('d-none')
    document.getElementById('name').classList.remove('border-danger')
  }
  
  if (email === '' || !emailRegex.test(email)) {
    document.getElementById('emailAlert').classList.remove('d-none')
    document.getElementById('email').classList.add('border-danger')
    return false;
  }else{
    document.getElementById('emailAlert').classList.add('d-none')
    document.getElementById('email').classList.remove('border-danger')

  }
  
  if (phone === '' || !phoneRegex.test(phone)) {
    document.getElementById('phoneAlert').classList.remove('d-none')
    document.getElementById('phone').classList.add('border-danger')

    return false;
  }else{
    document.getElementById('phoneAlert').classList.add('d-none')
    document.getElementById('phone').classList.remove('border-danger')

  }
  
  
  if (age === '' || isNaN(age) || age <= 0) {
    document.getElementById('ageAlert').classList.remove('d-none')
    document.getElementById('age').classList.add('border-danger')

    return false;
  }else{
    document.getElementById('ageAlert').classList.add('d-none')
    document.getElementById('age').classList.remove('border-danger')

  }
  
  if (password === '') {
    document.getElementById('passAlert').classList.remove('d-none')
    document.getElementById('password').classList.add('border-danger')

    return false;
  }else{
    document.getElementById('passAlert').classList.add('d-none')
    document.getElementById('password').classList.remove('border-danger')

  }
  
  if (repassword === '' || password !== repassword) {
    document.getElementById('repassAlert').classList.remove('d-none')
    document.getElementById('repassword').classList.add('border-danger')


    return false;
  }else{
    document.getElementById('repassAlert').classList.add('d-none')
    document.getElementById('repassword').classList.remove('border-danger')

  }
  
  
  document.getElementById('succAlert').classList.remove('d-none')
  return true;
}