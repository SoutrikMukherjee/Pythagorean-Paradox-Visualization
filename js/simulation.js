const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');

let currentXY = 2; // Current length of XY
let showDivisionsFlag = false;
let animationId = null;

const scale = 10; // pixels per inch
const margin = 50;

function drawLine(x1, y1, x2, y2, color, width = 3, label = '') {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // Draw endpoints
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x2, y2, 5, 0, 2 * Math.PI);
    ctx.fill();
    
    // Draw label
    if (label) {
        ctx.fillStyle = '#fff';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        ctx.fillText(label, midX, midY - 10);
    }
}

function drawDivisions(x, y, length, divisions, color) {
    const segmentLength = length / divisions;
    ctx.strokeStyle = color;
    ctx.setLineDash([2, 2]);
    
    for (let i = 1; i < divisions; i++) {
        const divX = x + i * segmentLength * scale;
        ctx.beginPath();
        ctx.moveTo(divX, y - 10);
        ctx.lineTo(divX, y + 10);
        ctx.stroke();
    }
    
    ctx.setLineDash([]);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
    
    // Draw line AB (36 inches)
    const abStartX = margin;
    const abY = 150;
    const abEndX = abStartX + 36 * scale;
    drawLine(abStartX, abY, abEndX, abY, '#ff6b6b', 5);
    ctx.fillStyle = '#ff6b6b';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('A', abStartX - 20, abY + 5);
    ctx.fillText('B', abEndX + 20, abY + 5);
    ctx.fillText('36 inches', (abStartX + abEndX) / 2, abY - 20);
    
    // Draw line CD (10 inches)
    const cdStartX = margin;
    const cdY = 300;
    const cdEndX = cdStartX + 10 * scale;
    drawLine(cdStartX, cdY, cdEndX, cdY, '#4ecdc4', 5);
    ctx.fillStyle = '#4ecdc4';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('C', cdStartX - 20, cdY + 5);
    ctx.fillText('D', cdEndX + 20, cdY + 5);
    ctx.fillText('10 inches', (cdStartX + cdEndX) / 2, cdY - 20);
    
    // Draw line XY (1 or 2 inches)
    const xyStartX = margin;
    const xyY = 450;
    const xyEndX = xyStartX + currentXY * scale;
    drawLine(xyStartX, xyY, xyEndX, xyY, '#ffe66d', 5);
    ctx.fillStyle = '#ffe66d';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('X', xyStartX - 20, xyY + 5);
    ctx.fillText('Y', xyEndX + 20, xyY + 5);
    ctx.fillText(`${currentXY} inch${currentXY > 1 ? 'es' : ''}`, (xyStartX + xyEndX) / 2, xyY - 20);
    
    // Show divisions if enabled
    if (showDivisionsFlag) {
        drawDivisions(abStartX, abY, 36, 36 / currentXY, '#ff6b6b');
        drawDivisions(cdStartX, cdY, 10, 10 / currentXY, '#4ecdc4');
        
        // Show division counts
        ctx.fillStyle = '#aaa';
        ctx.font = '12px Arial';
        ctx.fillText(`36 ÷ ${currentXY} = ${36 / currentXY} segments`, abEndX + 50, abY);
        ctx.fillText(`10 ÷ ${currentXY} = ${10 / currentXY} segments`, cdEndX + 50, cdY);
    }
    
    // Draw visual representation of the constraint
    ctx.fillStyle = '#888';
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`When XY = ${currentXY}:`, 600, 400);
    ctx.fillText(`m = ${36 / currentXY}, so ${36 / currentXY} × ${currentXY} = 36 ✓`, 600, 425);
    ctx.fillText(`n = ${10 / currentXY}, so ${10 / currentXY} × ${currentXY} = 10 ✓`, 600, 450);
}

function showXY1() {
    currentXY = 1;
    draw();
}

function showXY2() {
    currentXY = 2;
    draw();
}

function showDivisions() {
    showDivisionsFlag = !showDivisionsFlag;
    draw();
}

function animateDemo() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
        return;
    }
    
    let time = 0;
    function animate() {
        time += 0.02;
        currentXY = Math.sin(time) > 0 ? 2 : 1;
        draw();
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

// Initial draw
draw();
