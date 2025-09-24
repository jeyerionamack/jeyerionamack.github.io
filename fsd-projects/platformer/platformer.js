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
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400,600,100,10,"yellow");
    createPlatform(200,690,100,10,"yellow");
    createPlatform(600,500,100,10,"yellow")
    createPlatform(400,390,100,10,"yellow")
    createPlatform(600,300,100,10,"yellow")
    createPlatform(200,900,100,10,"yellow")
    createPlatform(800,400,100,10,"yellow")
    createPlatform(1000,300,100,10,"yellow")
    createPlatform(1200,250,100,10,"yellow")
    createPlatform(1100,115,100,10,"yellow")
    createPlatform(900,150,100,10,"yellow")
    createPlatform(700,125,100,10,"yellow")
    createPlatform(500,150,100,10,"yellow")
    createPlatform(300,200,100,10,"yellow")
    createPlatform(100,300,100,10,"yellow")
    createPlatform(800,600,100,10,"yellow")
    createPlatform(1000,690,100,10,"yellow")

    // TODO 3 - Create Collectables
    createCollectable("database",325,640,0.5,0.7,);
    createCollectable("database",800,350,0.5,0.7);
    createCollectable("database",700,100,0.5,0.7);
    createCollectable("database",800,600,0.5,0.7);


    
    // TODO 4 - Create Cannons
      createCannon("left",300,2000)
      createCannon("right",100,600)
      createCannon("bottom",300,2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
