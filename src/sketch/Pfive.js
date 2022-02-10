import React from "react";
import Sketch from "react-p5";


const Pfive = (props) => {
    const eye = (x, y, sc, p5) => {
        p5.push()
        p5.translate(x, y)
        p5.scale(sc)
        p5.fill(255)
        p5.ellipse(0, 0, 200)
        p5.fill(0)
        let ang = p5.atan2(p5.mouseY - y, p5.mouseX - x)
        p5.rotate(ang)
        p5.ellipse(50, 0, 100)
        p5.pop()
    }
    const setup = (p5, canvasParentRef) => {
        p5.background('transparent');
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(p5.windowWidth, 800).parent(canvasParentRef);
    };

    const draw = (p5) => {
        var PX = p5.width / 2
        var PY = 150
        p5.noStroke();
        p5.rectMode(p5.CENTER);
        p5.fill('#f9a541')

        //ear left
        p5.ellipse(PX - 60, PY - 40, 80, 120);
        p5.rect(PX - 60, PY - 20, 80, 50);
        p5.fill('black')
        p5.ellipse(PX - 60, PY - 40, 20, 80);

        //ear right
        p5.fill('#f9a541')
        p5.ellipse(PX + 60, PY - 40, 80, 120);
        p5.rect(PX + 60, PY - 20, 80, 50);
        p5.fill('black')
        p5.ellipse(PX + 60, PY - 40, 20, 80);
        p5.fill('#f9a541')
        //head
        p5.ellipse(PX, PY, 200, 170);
        p5.rect(PX, PY + 25, 100, 50);
        p5.ellipse(PX, PY + 40, 200, 150);
        p5.fill('black')

        // nose
        p5.noStroke()
        p5.fill('white')
        p5.ellipse(PX - 15, PY + 32, 70, 50);
        p5.ellipse(PX + 15, PY + 32, 70, 50);
        p5.stroke('black')
        p5.fill('#8b4513')
        p5.ellipse(PX, PY + 20, 20, 10);
        p5.strokeWeight(3);
        p5.stroke('#8b4513')
        p5.line(PX, PY + 20, PX, PY + 40);

        p5.rectMode(p5.CENTER);

        eye(PX - 30, PY, 0.3, p5)
        eye(PX + 30, PY, 0.3, p5)
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default Pfive;