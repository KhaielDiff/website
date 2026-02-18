const bottomBar=document.getElementById("bottomBar");
const circles=document.querySelectorAll(".bottom-bar .circle");
const searchInput=document.getElementById("searchBar");
const resultsContainer=document.getElementById("results");
const mainCircle=document.getElementById("mainCircle");
const searchContainer=document.getElementById("searchContainer");
const homeBtn=document.getElementById("homeBtn");
const commentBtn=document.getElementById("commentBtn");
const commentBar=document.getElementById("commentBar");
const menuBtn=document.getElementById("menuBtn");
const aboutBtn=document.getElementById("aboutBtn");
const aboutPage=document.getElementById("aboutPage");


const data=[
{title:"Genshin Impact",description:"Open-World RPG"},
{title:"Minecraft",description:"Sandbox Game"},
{title:"Wuthering Waves",description:"Open-World RPG"},
{title:"Duet Night Abyss",description:"Open-World RPG"},
{title:"Mobile Legends",description:"MOBA game"},
{title:"League Of Legends",description:"MOBA game"},
{title:"Call Of Duty Mobile",description:"Fps/Battle Royale Game"},
{title:"Pubg Mobile",description:"Fps/Battle Royale Game"},{title:"Honkai Star Rail",description:"Turn-Based RPG Game"}
];      

function renderResults(items){  
resultsContainer.innerHTML="";
if(items.length===0){
resultsContainer.innerHTML="<p style='padding:10px'>No results found</p>";
return;
}
items.forEach(item=>{
const div=document.createElement("div");
div.classList.add("result-item");
div.innerHTML="<h3>"+item.title+"</h3><p>"+item.description+"</p>";
resultsContainer.appendChild(div);
});
}

function performSearch(){
const query=searchInput.value.toLowerCase();
const filtered=data.filter(item=>item.title.toLowerCase().includes(query));
renderResults(filtered);
}

function resetActive(){
circles.forEach(c=>{
c.classList.remove("large","active-circle");
c.classList.add("small");
});
}

circles.forEach(circle=>{
circle.addEventListener("click",()=>{
bottomBar.classList.remove("hidden");
resetActive();
circle.classList.remove("small");
circle.classList.add("large","active-circle");
});
});

mainCircle.addEventListener("click",()=>{
commentBar.classList.remove("active");
searchContainer.style.display="flex";

searchContainer.classList.add("active");
searchInput.focus();
performSearch();
});

homeBtn.addEventListener("click",()=>{
bottomBar.style.top = "";       
bottomBar.style.bottom = "0px";  
commentBar.classList.remove("active");
searchContainer.style.display="flex";
searchContainer.classList.remove("active");
});

commentBtn.addEventListener("click",()=>{
searchContainer.style.display="none";
bottomBar.style.top="0";
commentBar.classList.add("active");
});

aboutBtn.addEventListener("click",()=>{
if(aboutPage.classList.contains("active")){
aboutPage.classList.remove("active");

resetActive();
homeBtn.classList.remove("small");
homeBtn.classList.add("large","active-circle");
searchContainer.style.display="flex";
searchContainer.classList.remove("active");
commentBar.classList.remove("active");
bottomBar.style.top = "";
bottomBar.style.bottom = "0px";

}else{ 

resetActive();
aboutBtn.classList.remove("small");
aboutBtn.classList.add("large","active-circle");

searchContainer.style.display="none";
commentBar.classList.remove("active");

aboutPage.classList.add("active");
}

});

menuBtn.addEventListener("click",()=>{
bottomBar.classList.toggle("hidden");
resetActive();
commentBar.classList.remove("active");
searchContainer.classList.remove("active");
});

searchInput.addEventListener("input",performSearch);




renderResults(data);