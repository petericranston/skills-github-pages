---
title: "Random Walkers and Creating Graphics"
date: 2024-05-21
---

## Random Walkers and Creating Graphics

This program does two things at the same time. It uses a random walker to create a square that randomly moves around the screen, without leaving a trail, as well as making it so that the user can draw whatever they want on the screen as if they are drawing a line, which does leave a trail. 

# Random Walker

The random walkers aspect is done it the "step" function in the "Walker" class. I gets a random number within the constraints of the "floor" function and then I created a switch statement to chance the x and y variables accordingly. It works exactly as it should.

```
let choice = floor(random(4))

    switch (choice) {
      case 0:
        this.x = this.x + 1;
        break;
      case 1:
        this.x = this.x - 1;
        break;
      case 2:
        this.y = this.y + 1;
        break;
      case 3:
        this.y = this.y - 1;
        break;
    }
```

I then created a "display" function inside "Walker" class and used that to display the square.

```
  display() {
    stroke(0);
    fill(255, 0, 0)
    rect(this.x, this.y, 20, 20)
  }
```
This all works as it should and i'm happy with the result. 


# Created Graphics

I used the createGraphics function so that I can draw on the page using an ellipse that leaves a trail, while the random walker square doesn't leave a trail. THe createGraphics function does exactly this. So the square and the ellipse, while both visible aren't really working on the same canvas. I created a variable `let extraCanvas;` and then set that to act as the second canvas. 

```
createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400); //Creating an addition canvas: useful if your want some things to trail but not others
  extraCanvas.clear();
```

I then checked if the mouse was pressed and if it was then draw an ellipse. 
```
if (mouseIsPressed) {
    extraCanvas.fill(255, 150, 100);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);
  }
  image(extraCanvas, 0, 0)
```

