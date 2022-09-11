var point = 0;

function carga() {

    p = document.getElementById("point");
    const area = document.getElementById('areaJ');
    p.innerText = point;
    let rect = area.getBoundingClientRect();
    const lg = rect.x+rect.width;
    const wh = rect.y+rect.height;
    var currentMousePos = { x: -1, y: -1 };

    function Game(){

        if(currentMousePos.x > rect.x && currentMousePos.x < lg && currentMousePos.y > rect.y && currentMousePos.y < wh){

            point += 2;
            p.textContent = point;

            if (point === 1000){
                alert("GANASTE FELICIDADES !!!");
                location.reload();
            }
        }
        
        if ($('#findejuego').is(":visible")) {
            clearInterval(timing);
            /*alert("PUNTAJE FINAL " + point + " PUNTOS");
            point = 0;
            p.innerText = point;
            location.reload();*/
        }
    }


    const timing = setInterval(() => {
        $(document).mousemove(function(event) {
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;
        })

        Game();
    }, 1000);
}