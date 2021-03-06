/**
* Extend object 'a' with the properties of object 'b'.
* If there's a conflict, content of object 'b' overwrites content of 'a'
*/

function el4id(pID) {
   var vNode = document.getElementById(pID);
   if (vNode) {
     console.log("DOM Node ["+pID+"] exists!");
   } else {
     console.log("ERROR: DOM Node ["+pID+"] does not exist!");
   };
   return vNode
}

function copyMarker3D() {
  console.log("copyMarker3D");
  //el4id("aframemarker").value = el4id("marker").value;
  //el4id("viewmarker").value = el4id("marker").value;
  console.log("copyMarker3D after");
};

function setTimeID() {
  el4id("timeaframe").value = Date.now();
  el4id("timear").value = Date.now();
}
function populateDataJSON(pTextareaID) {
  vEditor4JSON.saveLS(); // save JSON Data to Local Storage
  //copyMarker3D();
  setTimeID();
  var vData = vEditor4JSON.aData;
    //document.getElementById('jsondata').value = vOut;
  el4id(pTextareaID).value = JSON.stringify(vData,null,2);
};

function X_populateDataJSON(pTextareaID) {
  vEditor4JSON.saveLS(); // save JSON Data to Local Storage
  //copyMarker3D();
  setTimeID();
  var vData = vEditor4JSON.aData;
  var vOut = "";
  var vCR = "";
  var vRecOut = "";
  var vMapCenterMissing = true;
  for (var i = 0; i < vData.length; i++) {
    vRecOut = getString4Object(i+1,vData[i]);
    if (vRecOut != "") {
      vOut += vCR + vRecOut;
      vCR = ",\n";
    };
  };
  vOut = "[" + vOut + "]";
  //document.getElementById('jsondata').value = vOut;
  el4id(pTextareaID).value = vOut;
};

function getString4Object(pNr,pRec) {
  var vOut = "";
  vOut = JSON.stringify(pRec,null,4)
  return vOut;
}
