let audio2;

function playSong(song) {
  if (audio2) {
    audio2.pause();
  }
  audio2 = new Audio(song);
  audio2.play();
}

function showButton(){
    //alert('Heelo');
    
        document.getElementById("message1").style.display = "block";
       // document.getElementById("pause-song").style.display = "block";
        
      }
     
    const music = document.querySelector("#music");
  const playPause = document.querySelector("#play-pause-song");
  const message1 = document.getElementById("message1");
  let songPlaying = false;

  playPause.addEventListener("click", function() {
    document.getElementById("send-hug-button").innerHTML = "Send a Hug";
    document.getElementById("hug-gif").style.display = "none";

   if(!songPlaying){
    playSong("ranjhana.mp3");
    playPause.innerHTML = "Pause my Song";
    document.getElementById("message1").style.display = "block";
    message1.innerHTML = "Please enjoy the song";
    
    songPlaying = true;
   }else{
    if (audio2) {
      audio2.pause();
    }
    playPause.innerHTML = "Play my Song";
    message1.innerHTML = "";
    document.getElementById("message1").style.display = "none";
    songPlaying = false;
   }
   /* if (music.paused) {
      music.play();
      playPause.innerHTML = "Pause my Song";
      showButton();
      //document.getElementById("message").style.display = "block";
  message1.innerHTML = "Please enjoy the song";
    } else {
      music.pause();
      playPause.innerHTML = "Play my Song";
     message1.innerHTML = "";
    }*/
    
  });

const valentineBtn = document.getElementById("valentineBtn");
const messagePopup = document.getElementById("messagePopup");
const messageText = document.getElementById("messageText");
const messageAudio = document.getElementById("messageAudio");
const closeBtn = document.getElementById("closeBtn");

const message = "Happy Valentine's Day to the love of my life! You make every day feel like a fairytale with your love, kindness, and warmth. I feel so lucky to have you by my side, and I promise to always cherish and adore you. I love you more than words could ever express. Here's to many more Valentine's Days spent together.";
let i = 0;
valentineBtn.addEventListener("click", function () {

  document.getElementById("send-hug-button").innerHTML = "Send a Hug";
  document.getElementById("hug-gif").style.display = "none";
  playPause.innerHTML = "Play my Song";
    message1.innerHTML = "";
    document.getElementById("message1").style.display = "none";
    songPlaying = false;
  playSong("NazmSHort.mp3");
  //messagePopup.classList.remove("hidden");
 // messageAudio.play();
 messageText.innerHTML = '';
  i = 0;
  let interval = setInterval(function () {
   
    messageText.innerHTML += message[i];
    i++;
    if (i >= message.length) {
      clearInterval(interval);
    }
  }, 200);
  messagePopup.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  i = 0;
  messageText.innerHTML = "";
  if (audio2) {
    audio2.pause();
  }
  messagePopup.style.display = "none";
  });
  let position = 0;

  /*valentineBtn.addEventListener("click", function () {
    position = 0;
    messageText.innerHTML = '';
    let intervalId = setInterval(function () {
      messageText.innerHTML += message[position];
      position++;
      if (position === message.length) {
        clearInterval(intervalId);
      }
    }, 50);
  
    messagePopup.style.display = "block";
  });
  
  closeBtn.addEventListener("click", function () {
    position = 0;
  messageText.innerHTML = "";
    messagePopup.style.display = "none";
   // clearInterval(intervalId);
   
  });*/
  

  var button = document.getElementById("see-our-pic");
var modal = document.getElementById("modal");
var picture = document.getElementById("picture");
var close = document.getElementsByClassName("close")[0];
var images = ["ourPic1.jpg", "OurPic9.jpg", "OurPic10.jpg","OurPic4.jpg","OurPic2.jpg","OurPic6.jpg","OurPic7.jpg","OurPic3.jpg","OurPic5.jpg","OurPic8.jpg","OurPic11.jpg","OurPic12.jpg","OurPic13.jpg"];
var currentImage = 0;
var messagemodal = document.getElementById("messagemodal");

var audio;

button.addEventListener("click", function() {
  document.getElementById("send-hug-button").innerHTML = "Send a Hug";
  document.getElementById("hug-gif").style.display = "none";
  playPause.innerHTML = "Play my Song";
    message1.innerHTML = "";
    document.getElementById("message1").style.display = "none";
    songPlaying = false;
  playSong("rasiya.mp3");
  modal.style.display = "block";
  messagemodal.style.display = "block";
  picture.src = images[currentImage];
  //audio = new Audio("rasiya.mp3");
  //audio.play();
});

close.addEventListener("click", function() {
  if (audio2) {
    audio2.pause();
  }
  modal.style.display = "none";
  messagemodal.style.display = "none";
 // audio.pause();
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    messagemodal.style.display = "none";
  }
});

picture.addEventListener("click", function() {
  currentImage = (currentImage + 1) % images.length;
  picture.src = images[currentImage];
  
});


let isPlaying = false;

document.getElementById("send-hug-button").addEventListener("click", function() {
  playPause.innerHTML = "Play my Song";
    message1.innerHTML = "";
    document.getElementById("message1").style.display = "none";
    songPlaying = false;
  if (audio2) {
    audio2.pause();
  }
  if (!isPlaying) {
    document.getElementById("hug-gif").style.display = "block";
    isPlaying = true;
    document.getElementById("send-hug-button").innerHTML = "Stop Hug";
  } else {
    document.getElementById("hug-gif").style.display = "none";
    isPlaying = false;
    document.getElementById("send-hug-button").innerHTML = "Send a Hug";
  }
});

// Get the modal
var Lovemodal = document.getElementById("myLoveModal");

// Get the button that opens the modal
var btn = document.getElementById("LoveBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("Loveclose")[0];
var video = document.getElementById("myVideo");

// When the user clicks the button, open the modal
btn.onclick = function() {
  Lovemodal.style.display = "block";
  Lovemodal.style.width = video.offsetWidth + "px";
  Lovemodal.style.height = video.offsetHeight + "px";
  Lovemodal.style.left = "50%";
  Lovemodal.style.top = "50%";
  Lovemodal.style.transform = "translate(-50%, -50%)";
  document.getElementById("myVideo").play();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  Lovemodal.style.display = "none";
  document.getElementById("myVideo").pause();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Lovemodal) {
    Lovemodal.style.display = "none";
    document.getElementById("myVideo").pause();
  }
}

  
  


     