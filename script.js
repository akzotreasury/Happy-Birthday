var text1 = "Happy birthday to the love of my life!"; 
var text2 = "On this special day, I want you to know how grateful I am to have you in my life."
var text3 = "You bring joy and happiness to every moment and make everything so much brighter.";
var text4 = "I promise to always love and support you, today and every day.";
var text5 = "Here's to another year of making amazing memories together.";
var text6 = "I love you more than words can express.";
var text7 = "Happy birthday, my love!";
var text8 = "Click Here to Make a wish";
//var colors = ['#FFFFFF', '#87cefa', '#90ee90', '#ffa07a', '#add8e6'];
var colors = ['#FFFFFF', '#000000', '#FFFF00', '#00FF00', '#00FFFF', '#87cefa', '#90ee90', '#ffa07a', '#add8e6'];
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;

var text1Length = text1.length;
var text2Length = text2.length;
var text3Length = text3.length;
var text4Length = text4.length;
var text5Length = text5.length;
var text6Length = text6.length;
var text7Length = text7.length;


function animateText1() {
  document.getElementById("text1").style.display = "block";
  if (i < text1Length) {
    document.getElementById("text1").innerHTML += text1.charAt(i);
    i++;
    document.getElementById("text1").style.color = colors[i % 5];
    setTimeout(animateText1, 50);
  }else
    document.getElementById("text1").style.color = "#FFFFFF";
}

function animateText2() {
  document.getElementById("text2").style.display = "block";
  if (j < text2Length) {
    document.getElementById("text2").innerHTML += text2.charAt(j);
    j++;
    document.getElementById("text2").style.color = colors[j % 5];
    setTimeout(animateText2, 50);
  }else
  document.getElementById("text2").style.color = "#FFFF00";
}

function animateText3() {
  document.getElementById("text3").style.display = "block";
  if (k < text3Length) {
    document.getElementById("text3").innerHTML += text3.charAt(k);
    k++;
    document.getElementById("text3").style.color = colors[k % 5];
    setTimeout(animateText3, 50);
  }else
  document.getElementById("text3").style.color = "#F4FCFB";
}

function animateText4() {
  document.getElementById("text4").style.display = "block";
    if (l < text4Length) {
      document.getElementById("text4").innerHTML += text4.charAt(l);
      l++;
      document.getElementById("text4").style.color = colors[l % 5];
      setTimeout(animateText4, 50);
    }else
    document.getElementById("text4").style.color = "#FFFF00";
  }
  function animateText5() {
    document.getElementById("text5").style.display = "block";
    if (m < text5Length) {
      document.getElementById("text5").innerHTML += text5.charAt(m);
      m++;
      document.getElementById("text5").style.color = colors[m % 5];
      setTimeout(animateText5, 50);
    }else
    document.getElementById("text5").style.color = "solid #8B8000";
  }
  function animateText6() {
    document.getElementById("text6").style.display = "block";
    if (n < text6Length) {
      document.getElementById("text6").innerHTML += text6.charAt(n);
      n++;
      document.getElementById("text6").style.color = colors[n % 5];
      setTimeout(animateText6, 50);
    }else
    document.getElementById("text6").style.color = "solid #FFFFFF";
  }
  function animateText7() {
    document.getElementById("text7").style.display = "block";
    if (o < text7Length) {
      document.getElementById("text7").innerHTML += text7.charAt(o);
      o++;
      document.getElementById("text7").style.color = colors[o % 5];
      setTimeout(animateText7, 50);
    }else
    document.getElementById("text7").style.color = "#FFFFFF";
  }

  function showButton(){
//alert('Heelo');

    document.getElementById("makeWishBtn").style.display = "block";
    
  }

document.getElementById("makeWishBtn").addEventListener("click", function () {
    window.location.href = "wish.html";
});

const music = document.querySelector("#anannyaSong");
  const playPause = document.querySelector("#playSong");

  playPause.addEventListener("click", function() {
    if (music.paused) {
      music.play();
      document.getElementById("playSong").style.display = "none";
      animateText1();
      setTimeout(animateText2, text1Length * 50 + 500);
setTimeout(animateText3, (text1Length + text2Length) * 50 + 1000);
setTimeout(animateText4, (text1Length + text2Length + text3Length) * 50 + 1000);
setTimeout(animateText5, (text1Length + text2Length + text3Length + text4Length) * 50 + 1000);
setTimeout(animateText6, (text1Length + text2Length + text3Length + text4Length + text5Length) * 50 + 1000);
setTimeout(animateText7, (text1Length + text2Length + text3Length+ text4Length + text5Length + text6Length) * 50 + 1000);
setTimeout(showButton, (text1Length + text2Length + text3Length+ text4Length + text5Length + text6Length +text7Length) * 50 + 1500);

    }
    
  });



