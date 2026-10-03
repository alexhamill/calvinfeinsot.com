document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed. Ready to write JS!');
    const main = document.getElementById('main');
    const canvas = document.getElementById('startcanvas');
    const ctx = canvas.getContext('2d');
    const maxX = canvas.width; 
    const maxY = canvas.height; 

    function startup() {
    main.style.display = 'none';
    
    ctx.fillStyle = '#b0ffa7';
    ctx.fillRect(0, 0, maxX, maxY);
    }
    
    function makeflower(x,y) {
        const pallatte = [ '#F8F8FF', '#E0FFFF','#87CEEB','#00CED1','#50C878','#008080','#008000','#FFFACD','#F9E79F','#FFDAB9', '#FFD700', '#E8AEB7', '#FF7F50', '#DC143C', '#FEE0E0', '#FADADD', '#FADADD', '#D8BFD8', '#C8A2C8', '#FF00FF', '#880088' ];
        
    }
    startup();
});