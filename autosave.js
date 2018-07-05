var currentDoc = app.activeDocument;

var path = app.activeDocument.path;
var currentFileName = currentDoc.name.replace(/\.[^\.]+$/, '');

//var colorLength = currentDoc.layerSets.getByName("COLORS").layers.length;
var mainLength = currentDoc.layerSets.getByName("main").layers.length;
var stoneLength = currentDoc.layerSets.getByName("round-new").layers.length;

var currentColorChar = '';
//var curSilicon = currentDoc.layerSets.getByName("silicons");
//var rope = currentDoc.layerSets.getByName("rope");
//var chainRight = currentDoc.layerSets.getByName("chain-right");
//var chainLeft = currentDoc.layerSets.getByName("chain-left");
var main = currentDoc.layerSets.getByName("main");
//var chainShort = currentDoc.layerSets.getByName("chain-short");
//var curColor = currentDoc.layerSets.getByName("COLORS");
var curStone = currentDoc.layerSets.getByName("round-new");
//var sideStone = currentDoc.layerSets.getByName("round-new-side-view");

for (var i = 0; i < mainLength; i++) {
  if (i > 0) {
    //curSilicon.layers[i-1].visible = false;
    //rope.layers[i-1].visible = false;
    //chainRight.layers[i-1].visible = false;
    //chainLeft.layers[i-1].visible = false;
    main.layers[i-1].visible = false;
    //chainShort.layers[i-1].visible = false;
  }

  //curSilicon.layers[i].visible = true;
  //rope.layers[i].visible = true;
  //chainRight.layers[i].visible = true;
  //chainLeft.layers[i].visible = true;
  main.layers[i].visible = true;
  //chainShort.layers[i].visible = true;

  if (i === 0) {
    //curColor.layers["silver"].visible = true;
    //curColor.layers["rose"].visible = true;
    //curColor.layers["gold"].visible = true;
    currentColorChar = 'W';
  }
  else if (i === 1) {
    //curColor.layers["silver"].visible = false;
    //curColor.layers["rose"].visible = true;
    //curColor.layers["gold"].visible = true;
    currentColorChar = 'R';
  }
  else {
    //curColor.layers["silver"].visible = false;
    //curColor.layers["rose"].visible = false;
    //curColor.layers["gold"].visible = true;
    currentColorChar = 'Y';
  }

  for (var j = 0; j < stoneLength; j++) {
    if (j > 0) {
      curStone.layers[j-1].visible = false;
      //sideStone.layers[j-1].visible = false;
    }

    curStone.layers[j].visible = true;
    //sideStone.layers[j].visible = true;

    jpgFile = new File(path + "/" + currentFileName + currentColorChar + currentDoc.layers["round-new"].layers[j].name + "-13+2.jpg");
    jpgSaveOptions = new JPEGSaveOptions();
    jpgSaveOptions.quality = 12;
    app.activeDocument.saveAs(jpgFile, jpgSaveOptions, true, Extension.LOWERCASE);
  }
}
