

    var ctx = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d'),
            gradient = ctx.createLinearGradient(10, 140, 300, 165);
        gradient.addColorStop(0, "#ff8f5a");
        gradient.addColorStop(1, "#ff2f96");

        ctx.beginPath();
        ctx.moveTo(20, 150);
        ctx.quadraticCurveTo(10, 140, 20, 120);
        ctx.quadraticCurveTo(60, 20, 190, 5);
        ctx.quadraticCurveTo(280, 0, 300, 65);
        ctx.quadraticCurveTo(300, 0, 300, 165);
        ctx.fillStyle = gradient;
        ctx.fill();
        
    }

