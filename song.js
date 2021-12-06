const song1 = new Audio("https://irsv.upmusics.com/AliBZ/Garsha%20Rezaei%20-%20Ghermez%20(128).mp3");
const song3 = new Audio("https://irsv.upmusics.com/99/Naser%20Pourkaram%20%7C%20Naz%20Nakon%20(320).mp3");
const song4 = new Audio("https://irsv.upmusics.com/99/Asef%20Aria%20-%20Hiss%20(320).mp3");
var second = 0, minute = 0 ;
function playsong1(){
    song1.play();
    
    
    
}
const song2 = new Audio("https://irsv.upmusics.com/Artemis/Kasra%20Zahedi%20%7C%20Leylie%20Zibaye%20Man%20(320).mp3")
function playsong2(){
    song2.play();}
  

function pausesong1(){
    song1.pause();
    
}function pausesong2(){
    song2.pause();
    
}

$(document).ready(function(){
    $(".play").click(function(){
       $(this).hide();
       $("#pause1").show();
    })
    $("#pause1").click(function(){
        $(this).hide();
        $(".play").show();
     }) 
})
$(document).ready(function(){
    $(".play2").click(function(){
        $(this).hide();
        $("#pause2").show();
        
   }) 
   $("#pause2").click(function(){
    $(this).hide();
    $(".play2").show();
    
})
})
function rangeSlide(value){
    document.getElementById("song1").innerHTML = value ;
}
function playsong3(){
    song3.play();}
  

function pausesong3(){
    song3.pause();
    
}
$(document).ready(function(){
    $(".play3").click(function(){
        $(this).hide();
        $("#pause3").show();
        
   }) 
   $("#pause3").click(function(){
    $(this).hide();
    $(".play3").show();
    
})
})
function playsong4(){
    song4.play();
    
    
    
}
function pausesong4(){
    song4.pause();}
    

$(document).ready(function(){
    $(".play4").click(function(){
        $(this).hide();
        $("#pause4").show();
        
   }) 
   $("#pause4").click(function(){
    $(this).hide();
    $(".play4").show();
    
})
})
$(document).ready(function(){
    $(".menu-musics").click(function (){
      $(".menu-list").slideToggle(2000); 
    })
})

