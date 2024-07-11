let row = document.getElementById("row")
let detalisInfo = document.getElementById("detalisInfo");
let innerItemDetalis =document.getElementById("innerItemDetalis")
let links = document.querySelectorAll(".nav-link")
let mainData= document.getElementById("mainData")
let items = document.querySelectorAll('.item');
let detailsGame = document.getElementById("detailsGame")
let item = document.getElementsByClassName("item")
let closedetails= document.getElementById("close")



let arr =[...links]

class Ui{
    // constructor(){

    //     // this.readData(index)
    // }
   async readData(index){
            const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '066e21710bmsh82d3fb8c8e31335p1566aajsn83e6b5419fbf',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${index}`,options);
   let respnse =await api.json()
   console.log(respnse);
    Array.from(respnse)
   let cartona=""
try{

    for(let i=0 ;i<respnse.length;i++){
        cartona+=`
          <div class="innerItem p-2 animate__animated animate__fadeIn" id="innerItemDetalis">
        <div class="item" data-id='${respnse[i].id}' id="nameItem">
          <div >
            <div class="col">
              <div class="card h-100">
                <img src="${respnse[i].thumbnail}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                  <div class="mainTitle p-2 d-flex justify-content-between align-items-center">
                    <h5 class="card-title">${respnse[i].title}</h5>
                    <button class="bg-info modfiyBtn">Free</button>
                  </div>
                  <p class="card-text p-1">${respnse[i].short_description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                  <small>${respnse[i].genre}</small>
                  <small>${respnse[i].platform}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        `
    }
    row.innerHTML=cartona;
    document.querySelectorAll(".item").forEach((item)=>{
      item.addEventListener("click",function(){
        new Detalis(item.dataset.id)
      })
    })
    
  console.log(respnse);
}catch(error){
    console.log(error);
}
    }
}


class Detalis{
  constructor(index){
 

    this.detalis(index)
  }
   //detalis
   async detalis(index){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${index}`;
const options = {
method: 'GET',
headers: {
  'x-rapidapi-key': '066e21710bmsh82d3fb8c8e31335p1566aajsn83e6b5419fbf',
  'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
}
};

try {
const response = await fetch(url, options);
const result = await response.json();
console.log(result);
let dataOfDetalis = `
         <div class="innerDetalis">
            <div class="Detalis">
              <div class="imgAndHead mt-2">
               <div class="d-flex justify-content-between align-items-center dnameAndbClose">
                <h2>Detalis Game</h2>
                <i class="fa-solid fa-close close fs-5" id="close"></i>
               </div>
                <div class="imgAndDetalis d-flex justify-content-center align-items-start mt-5">
                  <div class="imgGame w-100">
                    <img src="${result.thumbnail}" class="w-100 bg-info" alt="" />
                  </div>
                  <div class="contentGame ps-5 col-md-7">
                    <h2 class="h4">Title: <span class="bg-info rounded-2 text-black px-1">${result.title}</span></h2>
                    <p>Category: <span class="bg-info rounded-2 text-black p-1">${result.genre}</span></p>
                    <p>Platform: <span class="bg-info rounded-2 text-black p-1">${result.platform}</span></p>
                    <p>Status: <span class="bg-info rounded-2 text-black p-1">${result.status}</span></p>
                    <p>${result.description}</p>
                    <a href="${result.game_url}" class="showData" target="_blank" >Show Game </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
`
detailsGame.innerHTML = dataOfDetalis
      // Add event listener for the close button dynamically
      document.getElementById('close').addEventListener('click', function () {
        mainData.classList.replace("d-none", "d-block");
        detalisInfo.classList.replace("d-block", "d-none");
      });

      // Show the details info and hide main data
      mainData.classList.replace("d-block", "d-none");
      detalisInfo.classList.replace("d-none", "d-block");


} catch (error) {
console.error(error);
}
  }

}



arr.forEach((el) => {
  el.addEventListener("click",function(){
    let nameElement=el.innerHTML;
    let test = new Ui()
    test.readData(nameElement)
    document.querySelector('.active').classList.remove('active');
    this.classList.add('active');
  })
});

let test =new Ui()
test.readData("mmorpg")




//   detalisInfo.classList.add("d-none")
//   mainData.classList.remove("d-none")
// const observer = new MutationObserver(function(mutations) {
//   let items = document.querySelectorAll('.item');
//   let arr =[...items]
//   arr.forEach((element) =>{
//     element.addEventListener("click",function(){
//       mainData.classList.replace("d-block","d-none")
//       detalisInfo.classList.replace("d-none","d-block")
//     })
//   })
  
// });
// observer.observe(document.body, { childList: true, subtree: true });

//close buttom
// closedetails.addEventListener("click",function(){
//   mainData.classList.replace("d-none","d-block")
//   detalisInfo.classList.replace("d-block","d-none")
// })


// setTimeout(function() {
//   let items = document.querySelectorAll('.item');
//   console.log(items);
// }, 1000); // Adjust the delay as needed


