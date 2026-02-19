const topBar = document.querySelector(".top-bar");
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
const frontText=document.getElementById("frontText");


const data=[
{title:"Genshin Impact",description:"Open-World RPG"},
{title:"Minecraft",description:"Sandbox Adventure"},
{title:"Wuthering Waves",description:"Open-World RPG"},
{title:"Duet Night Abyss",description:"Open-World RPG"},
{title:"Mobile Legends",description:"MOBA game"},
{title:"League Of Legends",description:"MOBA game"},
{title:"Call Of Duty Mobile",description:"Fps/Battle Royale Game"},
{title:"Pubg Mobile",description:"Fps/Battle Royale Game"},
{title:"Honkai Star Rail",description:"Turn-Based RPG Game"},
{title:"God of War Ragnarok",description:"Action Adventure Game"},
{title:"The Last of Us Part I",description:"Story-Driven Action Game"},
{title:"The Last of Us Part II",description:"Story-Driven Action Game"},
{title:"Spider-Man 2",description:"Superhero Action Game"},
{title:"Ghost of Tsushima",description:"Open-World Samurai Game"},
{title:"Monster Hunter World",description:"Action RPG"},
{title:"Monster Hunter Rise",description:"Action RPG"},
{title:"Baldur's Gate 3",description:"Turn-Based RPG"},
{title:"Diablo IV",description:"Action RPG"},
{title:"Final Fantasy XV",description:"Fantasy RPG"},
{title:"Final Fantasy VII Remake",description:"Action RPG"},
{title:"Persona 5 Royal",description:"Turn-Based JRPG"},
{title:"Dragon Ball FighterZ",description:"Anime Fighting Game"},
{title:"Tekken 8",description:"Fighting Game"},
{title:"Street Fighter 6",description:"Fighting Game"},
{title:"Mortal Kombat 1",description:"Fighting Game"},
{title:"Rainbow Six Siege",description:"Tactical FPS"},
{title:"Battlefield 2042",description:"Military FPS"},
{title:"Warzone",description:"Battle Royale FPS"},
{title:"Destiny 2",description:"Sci-Fi FPS RPG"},
{title:"Halo Infinite",description:"Sci-Fi FPS"},
{title:"Escape From Tarkov",description:"Hardcore FPS"},
{title:"Need for Speed Heat",description:"Racing Game"},
{title:"Forza Horizon 5",description:"Open-World Racing"},
{title:"Gran Turismo 7",description:"Racing Simulator"},
{title:"Asphalt 9",description:"Arcade Racing Game"},
{title:"Mario Kart 8 Deluxe",description:"Arcade Racing Game"},
{title:"ARK Survival Evolved",description:"Survival Adventure"},
{title:"Rust",description:"Multiplayer Survival"},
{title:"Subnautica",description:"Underwater Survival"},
{title:"The Forest",description:"Survival Horror"},
{title:"Sons of the Forest",description:"Survival Horror"},
{title:"Stardew Valley",description:"Farming Simulation"},
{title:"Palworld",description:"Creature Survival Game"},
{title:"Brawl Stars",description:"Multiplayer Action Game"},
{title:"Arknights",description:"Tower Defense RPG"},
{title:"Azur Lane",description:"Anime Shooter RPG"},
{title:"Blue Archive",description:"Anime RPG"},
{title:"Summoners War",description:"Turn-Based RPG"},
{title:"AFK Arena",description:"Idle RPG"},
{title:"Tower of Fantasy",description:"Open-World RPG"},
{title:"Epic Seven",description:"Turn-Based RPG"},
{title:"Honkai Impact 3rd",description:"Action RPG"},
{title:"Pokemon Unite",description:"MOBA Game"},
{title:"Civilization VI",description:"Turn-Based Strategy"},
{title:"Age of Empires IV",description:"Real-Time Strategy"},
{title:"StarCraft II",description:"Real-Time Strategy"},
{title:"Total War Warhammer III",description:"Strategy Game"},
{title:"Hearts of Iron IV",description:"Grand Strategy Game"},
{title:"Hades",description:"Rogue-Like Action Game"},
{title:"Dead Cells",description:"Rogue-Like Platformer"},
{title:"Cuphead",description:"Run and Gun Game"},
{title:"Undertale",description:"Indie RPG"},
{title:"Celeste",description:"Platformer Game"},
{title:"Hollow Knight",description:"Metroidvania Game"},
{title:"Inside",description:"Puzzle Platformer"},
{title:"Little Nightmares",description:"Puzzle Horror Game"},
{title:"Valorant",description:"Tactical FPS Game"},
{title:"Apex Legends",description:"Battle Royale FPS"},
{title:"Fortnite",description:"Battle Royale Game"},
{title:"Roblox",description:"Online Sandbox Platform"},
{title:"Free Fire",description:"Battle Royale Mobile Game"},
{title:"Clash Of Clans",description:"Strategy Mobile Game"},
{title:"Clash Royale",description:"Strategy Card Battle Game"},
{title:"Among Us",description:"Multiplayer Party Game"},
{title:"Elden Ring",description:"Action RPG"},
{title:"Grand Theft Auto V",description:"Open-World Action Game"},
{title:"Red Dead Redemption 2",description:"Open-World Adventure"},
{title:"The Witcher 3",description:"Story-Driven RPG"},
{title:"Cyberpunk 2077",description:"Open-World Sci-Fi RPG"},
{title:"Resident Evil 4",description:"Survival Horror Game"},
{title:"Dark Souls III",description:"Action RPG"},
{title:"Terraria",description:"2D Sandbox Adventure"},
{title:"Overwatch 2",description:"Hero Shooter Game"},
{title:"Dota 2",description:"MOBA Game"},
{title:"FIFA 24",description:"Football Simulation Game"},
{title:"NBA 2K24",description:"Basketball Simulation Game"}

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
topBar.classList.remove("no-radius");
bottomBar.classList.remove("move-top");
commentBar.classList.remove("active");
searchContainer.style.display="flex";
aboutPage.classList.remove("active")
searchContainer.classList.add("active");
frontText.style.display = "block";
searchInput.focus();
performSearch();
});

homeBtn.addEventListener("click",()=>{
bottomBar.classList.remove("move-top");
commentBar.classList.remove("active");
searchContainer.style.display="flex";
searchContainer.classList.remove("active");
aboutPage.classList.remove("active")
topBar.classList.remove("no-radius");
frontText.style.display = "block";
});

commentBtn.addEventListener("click",()=>{
searchContainer.style.display="none";
bottomBar.classList.add("move-top")
commentBar.classList.add("active");
aboutPage.classList.remove("active")
frontText.style.display = "none";
topBar.classList.add("no-radius");
});

aboutBtn.addEventListener("click",()=>{
bottomBar.classList.remove("move-top");
(aboutPage.classList.contains("active"));
aboutPage.classList.remove("active");
searchContainer.style.display="none";
commentBar.classList.remove("active");
aboutPage.classList.add("active");
topBar.classList.remove("no-radius");
frontText.style.display = "none";
});

menuBtn.addEventListener("click",()=>{
bottomBar.classList.toggle("hidden");
resetActive();
commentBar.classList.remove("active");
searchContainer.classList.remove("active");
bottomBar.classList.remove("move-top");
aboutPage.classList.remove("active")
topBar.classList.remove("no-radius");
frontText.style.display = "block";
});

searchInput.addEventListener("input",performSearch);




renderResults(data);