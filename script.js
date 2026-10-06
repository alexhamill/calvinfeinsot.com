document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed. Ready to write JS!');
    const main = document.getElementById('main');
    const canvas = document.getElementById('startcanvas');
    const ctx = canvas.getContext('2d');
    canvas.addEventListener('click', tomain);
    let stopanimation = true;
    
    function tomain() {
        main.style.display = 'block';
        canvas.style.display = 'none';
        stopanimation = false;
    }

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;

        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
         
        }
    function testtext()
    {   
        const spacing = 1;
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 72px arial';
        ctx.fillText('Happy 19th Birthday', 25, 100);
        ctx.fillText('CALVIN', 250, 200);
        ctx.font = 'bold 50px arial';
        const { data } = ctx.getImageData(0, 0, maxX, maxY);
        const points = [];
        for (let y = 0; y < maxY; y += spacing) {
            for (let x = 0; x < maxX; x += spacing) {
                const alpha = data[(y * maxX + x) * 4 + 3];
                if (alpha > 0) {
                    points.push({ x, y });
                }
            }
        }
        console.log(points);
        return points;
    }
    function startup() {
        main.style.display = 'none';
        ctx.fillStyle = '#9bca9b';
        ctx.fillRect(0, 0, maxX, maxY);
        ctx.fillStyle = '#4f7b51';
        ctx.font = 'bold 72px Impact';
        ctx.fillText('Continue!', maxX/2-150, maxY-50);
    }
    
    function drawFlower(x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        const pallatte = ['#CDF2D0','#A8E6CF','#DCEDC1','#FFD3B6','#FFAAA5','#FF8B94','#D4A5A5','#E0BBE4','#957DAD','#D291BC','#FEC8D8','#FFDFD3','#FEE0E0','#FADADD','#FADADD','#D8BFD8','#C8A2C8','#FF00FF','#880088'];
        const color = pallatte[Math.floor(Math.random() * pallatte.length)];
        ctx.fillStyle = color;
        const numPetals = 5;
        for (let i = 0; i < numPetals; i++) {
            const angle = i * (2 * Math.PI / numPetals);
            const petalX = Math.cos(angle) * size;
            const petalY = Math.sin(angle) * size;
            ctx.beginPath();
            ctx.arc(petalX, petalY, size / 2, 0, 2 * Math.PI);
            ctx.fill();
        }
        ctx.fillStyle = "#FFFF00"; 
        ctx.beginPath();
        ctx.arc(0, 0, size / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
        }

        function Animateflowers(){
            for (let i = Math.floor(Math.random()*5); i < 10; i++) {
            if ( 2 < points.length && stopanimation) {
                const j = Math.floor(Math.random() * points.length);
                const size = Math.random() * 3 + 4;
                drawFlower(points[j].x, points[j].y, size);
                points.splice(j, 1);
            }else{
                return;
            }
        }
            requestAnimationFrame(Animateflowers);
        }

    // Main

    resize();
    const maxX = canvas.clientWidth; 
    const maxY = canvas.clientHeight;
    const points = testtext();
    startup();
    requestAnimationFrame(Animateflowers);

});
