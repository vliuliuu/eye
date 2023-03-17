document.addEventListener('mousemove', (e) => {

 //from the eventListener method you need two arguments; event to listen for and 
 //a function (the (e) arrow function to get the x,y bounds of the image) to run when the event occurs

    //console.log(e) //logs it into console so it's perma updating e and where the mouse is moving; use for debugging purposes

    const mouseX = e.clientX; // gets mouse x coordinate value from e
    const mouseY = e.clientY;// gets mouse y coord

    //console.log(mouseX)


    const anchor = document.getElementById('anchor') //gets the starch png and stores it in var anchor
    const rekt = anchor.getBoundingClientRect(); //gets the bounds of var anchor (starch png) and stores it in rekt

    //console.log(rekt) the bounds is fine

    const anchorX = rekt.left + rekt.width /2;
    const anchorY = rekt.top + rekt.height /2;
    //^ middle of image x y coords

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    //console.log(angleDeg);// logs angleDeg for debugging purposes

    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        //eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    })
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex = cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad*180/Math.PI;
    return deg;
}
// there is a problem with the transform part of the function debug w/ gwc i tired
