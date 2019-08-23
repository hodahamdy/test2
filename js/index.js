/*

var imgList  =document.querySelectorAll(".img-item");

var lightBoxCotainer = document.querySelector(".lightBox-container")

var close = document.getElementById("close")


var lightBox =document.querySelector(".lightBox")

var imageArray = [];
var currentIndex;
var next = document.getElementById("next")
var prev = document.getElementById("prev")


for(var i=0 ;i<imgList.length;i++)
    {
        
        imageArray.push(imgList[i])
        
        
        //////////////////// Event El click
            imgList[i].addEventListener("click",function(ev){

                
                
               currentIndex= imageArray.indexOf(ev.target)
                
                var imagPath = ev.target.src;
    lightBox.style.backgroundImage="url("+imagPath+")"
                lightBoxCotainer.classList.add("show")

            })
    }




next.addEventListener("click",function(){
    
    
    currentIndex=   ++currentIndex;
    
    if(currentIndex >= imgList.length)
        {
            currentIndex=0;
        }
    
    var x= imgList[currentIndex].src
    lightBox.style.backgroundImage= "url('"+x+"')"
    
    
})


prev.addEventListener("click",function(){
    
       
    currentIndex=   --currentIndex;
    
    if(currentIndex < 0)
        {
            currentIndex=  imgList.length-1  ;
        }
    
    var x= imgList[currentIndex].src
    lightBox.style.backgroundImage= "url('"+x+"')"
    
    
})



close.addEventListener("click",function(){
    
    lightBoxCotainer.classList.remove("show")
    
    
})




//right 39

//left 37

//right 27


document.addEventListener("keydown",function(ev){
    
    //right
    if(ev.keyCode == 39)
        {
             
            currentIndex=   ++currentIndex;

            if(currentIndex >= imgList.length)
                {
                    currentIndex=0;
                }

            var x= imgList[currentIndex].src
            lightBox.style.backgroundImage= "url('"+x+"')"
    
        }
    
    else if(ev.keyCode == 37)
        {
              

            currentIndex=   --currentIndex;

            if(currentIndex < 0)
                {
                    currentIndex=  imgList.length-1  ;
                }

            var x= imgList[currentIndex].src
            lightBox.style.backgroundImage= "url('"+x+"')"
        }
    
    else if(ev.keyCode == 27)
        {
             
    lightBoxCotainer.classList.remove("show")
        }
    
    else
        {
            alert("this key not handeld")
        }
    
    
    
})












*/
/*
var d = new Date();
var alldays = ["sun","mon","tue","wed","thu","fri","sat",];
function test()
{
    var dayIndex = d.getDay();
    var hours = d.getHours();
    var min= d.getMinutes();
    var sec= d.getSeconds();
    var ampm= "";
    
    
    
    if(hours<12)
    {
        ampm= "AM"
    }
    else
        {
            hours = hours-12
         ampm="PM"
            
            
        }


console.log( )
f








}

*/

function test()
{
    
   var xmlHttp= new XMLHttpRequest();
    xmlHttp.open("GET","https://jsonplaceholder.typicode.com/users")
    xmlHttp.send();
    xmlHttp.onreadystatechange = function(){
        
        if( this.readyState == 4 && this.status==200)
        {
            var dataString= this.responseText;
            var dataJson = JSON.parse(dataString)
            for( var i=0; i<dataJson.length;i++)
                {
                    console.log(dataJson[i].name)
                }
        }
        
        
        
        
    }
    
    
}
















































