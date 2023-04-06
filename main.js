const weathersubbox = document.querySelector(".weather-subbox");
const weatherimage= document.querySelector(".weather-sub-text");
       
weathersubbox.addEventListener("mouseover",function() {
    weatherimage.style.color="#000";       
} );

/* .......*/
var livingroom=document.querySelector(".recommend-sub-box1");
var suitroom=document.querySelector(".recommend-sub-box2");
var swimmingpool=document.querySelector(".recommend-sub-box3");
var massage=document.querySelector(".recommend-sub-box4");
var fitness=document.querySelector(".recommend-sub-box5");
var evening=document.querySelector(".recommend-sub-box6");
const showrom=document.querySelector(".showroom");
const headtext=document.querySelector(".show-text1")
const paratext=document.querySelector(".show-para1");



livingroom.addEventListener("click", function(){
    showrom.style.backgroundImage = "url(/img/suite-01.jpg)";
    headtext.innerText="Living Room Space";
    paratext.innerText="HOTEL PALACE";
    livingroom.style.backgroundColor="#FFF565"

});
suitroom.addEventListener("click", function(){
    showrom.style.backgroundImage = "url(/img/suite-03.jpg)";
    headtext.innerText="Deluxe Suite Room";
    paratext.innerText="HOTEL RIGA PALACE";
    suitroom.style.backgroundColor="#FFF565";

});
swimmingpool.addEventListener("click", function(){
    showrom.style.backgroundImage = "url(/img/swiming-pool.jpg)";
    headtext.innerText="Swimming Pool";
    paratext.innerText="HOTEL CHETTINAD";
    swimmingpool.style.backgroundColor="#FFF565";

});
massage.addEventListener("click", function(){
    showrom.style.backgroundImage = "url(/img/massage-service.jpg)";
    headtext.innerText="Special Massage";
    paratext.innerText="HOTEL PALACE";
    massage.style.backgroundColor="#FFF565";

});
fitness.addEventListener("click", function(){
    showrom.style.backgroundImage = "url(/img/fitness-service.jpg)";
    headtext.innerText="Insane Work-Out";
    paratext.innerText="HOTEL MARINA";
    fitness.style.backgroundColor="#FFF565";

});
evening.addEventListener("click", function(){
    showrom.style.backgroundImage = "url(/img/evening-event.jpg)";
    headtext.innerText="Evening Events";
    paratext.innerText="HOTEL DELUXE";
    evening.style.backgroundColor="#FFF565";

});
const textBox=document.getElementById("text-box");

const widget=document.getElementById("widget-heading");
const btnSub=document.getElementById("btn-sub");
btnSub.addEventListener("click", function(){
    widget.textContent=localStorage.getItem("textvalue");
    localStorage.setItem("textvalue", textBox)
return false;
});
