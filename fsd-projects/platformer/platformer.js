$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid//();


    // TODO 2 - Create Platforms
    createBadPlatform(800,700, 770, 100, "red"); // bright green for a finished platform
    createFakePlatform(490, 500, 150, 290);
createPlatform(490, 500, 150, 100)
    createPlatform(250, 650, 50, 20, "black");
createPlatform(410, 550, 50, 10, "black");
createPlatform(600, 500, 150, 290)
createPlatform(850, 400, 50, 10, "black" )
createPlatform(1050, 300, 50, 10, "black")
createPlatform(1200,170,50,10,"black")
createPlatform(1300,100,150,50)
    // TODO 3 - Create Collectables
createCollectable("database", 1350, 50);
createCollectable("database", 300, 170, 0.5, 0.6);
createCollectable("database",700, 170, 0.5, 0.6)
createCollectable("max",550, 700)

    
    // TODO 4 - Create Cannons
createCannon("top", 558, 700);
createCannon("right", 300, 1450);
createCannon("left",150, 2222)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
