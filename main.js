function America(ammo,Mag,Rifle,){
let build = document.querySelector(ammo);
build.style.fontSize = Mag;
build.style.backgroundColor = Rifle;


};

let Random = document.querySelector(".mess-with-me");
let Bird = document.querySelector("#feathers");
let Dino4 = document.querySelector('#toggle');
let Dino3 = document.querySelector('#row');
let Dino = document.querySelector("#hide-me");
let Rex = document.querySelector("#triceratops");
let Dino2 = document.querySelector("#biggify");
let number = 0;



//=====================================================
Dino2.addEventListener("mouseover",HoverDino);
Dino.addEventListener('click',ClickAdino);
Rex.addEventListener('click',ClickAdino);
Dino4.addEventListener('click',ChangeBKcolor);
Random.addEventListener('mouseover',changeText);
Bird.addEventListener('click',birdSize);



function HoverDino (){
Dino2.style.width = '400px';
};


function ClickAdino (){
Rex.style.border = 'Red';
Dino.style.visibility = 'hidden';
Rex.style.width = '324px';



};
function ChangeBKcolor(){
Dino4.style.backgroundColor = 'Red';
Dino3.style.backgroundColor = 'Red';
Dino4.style.alginItems = 'inherit';
Dino3.style.float = 'left';


};

function changeText(){
Random.style.color = 'orange';


};
function birdSize(){
Bird.style.opacity = '.5';

};
