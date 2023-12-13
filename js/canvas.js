const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

mouse = {
    x: null,
    y: null,
}
window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})


class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 1;
        this.speedX = Math.random() * 5 - 2;
        this.speedY = Math.random() * 5 - 2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.05;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "gray";
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function init(){
    for(i=0;i<2;i++){
        particleArray.push(new Particle);
    }
}
setInterval(() => {
    init(); 
}, 1000);

function manageParticle(){
    for(i=0;i<particleArray.length;i++){
        particleArray[i].update();
        particleArray[i].draw();
        for(j=0;j<particleArray.length;j++){
            let dx = particleArray[i].x - particleArray[j].x;
            let dy = particleArray[i].y - particleArray[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < 1000){
                ctx.beginPath();
                ctx.strokeStyle = "gray";
                ctx.lineWidth = 0.1;
                ctx.moveTo(particleArray[i].x, particleArray[i].y);
                ctx.lineTo(particleArray[j].x, particleArray[j].y);
                ctx.stroke();
            }
        }
        if(particleArray[i].size <= 1){
            particleArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    manageParticle();
    requestAnimationFrame(animate);
}
animate();
