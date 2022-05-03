// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

  const hearts = document.querySelectorAll('span.like-glyph') 
  hearts.forEach(hearts => hearts.addEventListener('click', function (e){
    mimicServerCall()
    .then(function handleHeartFill(){
      if(e.target.innerHTML === EMPTY_HEART) {
        hearts.classList.add("activated-heart");
        hearts.innerHTML = FULL_HEART;
      } else if (e.target.innerHTML === FULL_HEART) {
        hearts.innerHTML = EMPTY_HEART;
        hearts.classList.remove('activated-heart')
      }
    }).catch(function handleError(err){
        console.log(err)
        const modal = document.getElementById('modal')
        debugger;
        modal.classList.remove('hidden');
        modal.innerText = err
        setTimeout(() => {modal.classList.add('hidden')}, 3000)
    })
  }))

})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
