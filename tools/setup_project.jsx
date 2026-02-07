(function() {
    var proj = app.project;
    if (!proj) { proj = app.newProject(); }

    // Create Main Composition
    var compName = "Minecraft_Main";
    var width = 1920;
    var height = 1080;
    var pixelAspect = 1.0;
    var duration = 30; // 30 seconds
    var frameRate = 60;

    var mainComp = proj.items.addComp(compName, width, height, pixelAspect, duration, frameRate);
    mainComp.openInViewer();

    // Create Folders in Project Panel
    proj.items.addFolder("_FOOTAGE");
    proj.items.addFolder("_ASSETS");
    proj.items.addFolder("_COMPS");
    proj.items.addFolder("_RENS");

    alert("Project setup complete! Let's get to work.");
})();
