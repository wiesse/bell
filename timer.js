var total = 3;
for (var i = 0; i < 10; i ++) {
    if (i < 5) {
        total ++;
    }
}

console.log(total);

let timer_length = 60;

let endtime = new Date().getTime() + timer_length * 1000;

drawclock();

timer = setInterval(drawclock, 1);

function drawclock() {
    
    let curtime = new Date().getTime();
    
    let time_left = (endtime - curtime) / (timer_length * 1000);
    
    var canvas = document.getElementById("countdownclock");
    var ctx = canvas.getContext("2d");
    
    let size = Math.min(canvas.width, canvas.height) / 2;
    
    let cx = size;
    let cy = size;
    let radius = size;
        
    for (let i = 0; i < 130; i++) {
        let pos = 2 * Math.PI * time_left - Math.PI/2 - i * 0.05;

        if (i * 0.05 -0.1 > 2 * Math.PI * time_left) {
        
        ctx.beginPath();
        
        let blue = 255.0 * ((150-i) / 150);
        ctx.fillStyle = "rgb("+(blue)+","+(blue)+","+255+")";
        ctx.moveTo(cx,cy);
        
        
        ctx.arc(cx,cy,radius, pos, pos + 0.1);
        ctx.fill();
            
       // ctx.filltext(time_left, cx, cy);
        ctx.closePath();
        }
    }
    
    
}