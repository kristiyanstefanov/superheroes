window.onload = function(){
	var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext("2d");
    
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	var mp = 500; 
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, 
			y: Math.random()*H, 
			r: Math.random()*4+1, 
			d: Math.random()*mp 
		})
	}
	

	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
		ctx.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		update();
	}
	

	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) 
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					
					if(Math.sin(angle) > 0)
					{
						
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	setInterval(draw, 10);
}

let count = 1;

function next (){
	count++
	if (count>5){
		count = 1;
	}
}

console.log(count)






let heroes = {
    "arrow":   {
            "name": "Oliver Queen",
			"description": "Lost from society after his family's yacht sank, he made it to the island of Lian Yu, where Oliver went on a mission of survival and self-discovery, learning a great deal of skills. Oliver was called back to Starling City and took up a new code-name, Green Arrow, to continue fighting for the people of his city",
			"speed": "5/10",
			"strength" : "10/10",
			"intelligence": "8/10",
			"humor" : "3/10",
			"goodness" : "7/10",
			"evil" : "4/10",
			"overall" : "8/10",
            
        },

    "flash": {
            "name": "Barry Allen",
            "description":" One night, as he is working late, a lightning bolt shatters a case full of chemicals and spills all over Barry. As a result, Allen finds that he can run extremely fast and has matching reflexes and senses. He dons a set of red tights sporting a lightning bolt , dubs himself the Flash and becomes Central City's resident costumed crimefighter.",
			"img":"https://vignette.wikia.nocookie.net/gurennlagann/images/8/88/311495_250719114981667_250690231651222_622347_405559405_n.jpg/revision/latest?cb=20180216195401",
			"speed": "10/10",
			"strength" : "3/10",
			"intelligence": "10/10",
			"humor" : "10/10",
			"goodness" : "9/10",
			"evil" : "4/10",
			"overall" : "9/10",
			
		},
	"batwoman": {
			"name": "Kathy Kane",
			"description":"Kathy Kane, a wealthy Gotham City heiress and former circus performer, decides to use her skills and resources to become a costumed crime-fighter. This is partly out of altruism and partly to attract the romantic attentions of Batman. ",
			"speed": "10/10",
			"strength" : "7/10",
			"intelligence": "9/10",
			"humor" : "10/10",
			"goodness" : "4/10",
			"evil" : "4/10",
			"overall" : "7/10",
			
	}
	
        
};


function change() 
{
    let elem = document.getElementById("buttonstats");
    if (elem.value=="show stats") elem.value = "hide stats";
    else elem.value = "show stats";
}

function changeNext(){
	let elem = document.getElementById("buttonstats");
	elem.value = "show stats"
}

function flMusic(){
	let music = document.getElementById("mus");
	music.src = "https://www.youtuberepeater.com/watch?v=8D4ThTcvTDo&name=The+Flash+CW+Soundtrack+Theme"
}

function arMusic(){
	let music = document.getElementById("mus");
	music.src = "http://www.youtuberepeater.com/watch?v=0ZO_W2YemD8&s=93&e=120"

}

function bwMusic(){
	let music = document.getElementById("mus");
	music.src = "https://www.youtuberepeater.com/watch?v=3FDj45Im1Z4&name=Batwoman+Theme+CW"
}








