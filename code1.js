gdjs._51DViewCode = {};
gdjs._51DViewCode.localVariables = [];
gdjs._51DViewCode.GDNewLightObjects1= [];
gdjs._51DViewCode.GDNewLightObjects2= [];
gdjs._51DViewCode.GDmousetextObjects1= [];
gdjs._51DViewCode.GDmousetextObjects2= [];
gdjs._51DViewCode.GDmousetext2Objects1= [];
gdjs._51DViewCode.GDmousetext2Objects2= [];
gdjs._51DViewCode.GDdrehwertTextObjects1= [];
gdjs._51DViewCode.GDdrehwertTextObjects2= [];
gdjs._51DViewCode.GDbacktextObjects1= [];
gdjs._51DViewCode.GDbacktextObjects2= [];
gdjs._51DViewCode.GDBeatstickModelObjects1= [];
gdjs._51DViewCode.GDBeatstickModelObjects2= [];


gdjs._51DViewCode.mapOfGDgdjs_9546_959551DViewCode_9546GDbacktextObjects1Objects = Hashtable.newFrom({"backtext": gdjs._51DViewCode.GDbacktextObjects1});
gdjs._51DViewCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BeatstickModel"), gdjs._51DViewCode.GDBeatstickModelObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}{for(var i = 0, len = gdjs._51DViewCode.GDBeatstickModelObjects1.length ;i < len;++i) {
    gdjs._51DViewCode.GDBeatstickModelObjects1[i].getBehavior("Object3D").setRotationY(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("drehwertText"), gdjs._51DViewCode.GDdrehwertTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("mousetext"), gdjs._51DViewCode.GDmousetextObjects1);
gdjs.copyArray(runtimeScene.getObjects("mousetext2"), gdjs._51DViewCode.GDmousetext2Objects1);
{for(var i = 0, len = gdjs._51DViewCode.GDmousetextObjects1.length ;i < len;++i) {
    gdjs._51DViewCode.GDmousetextObjects1[i].getBehavior("Text").setText("MouseX: " + gdjs.evtTools.common.toString(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}
}{for(var i = 0, len = gdjs._51DViewCode.GDmousetext2Objects1.length ;i < len;++i) {
    gdjs._51DViewCode.GDmousetext2Objects1[i].getBehavior("Text").setText("LastMouseX: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}{for(var i = 0, len = gdjs._51DViewCode.GDdrehwertTextObjects1.length ;i < len;++i) {
    gdjs._51DViewCode.GDdrehwertTextObjects1[i].getBehavior("Text").setText("Drehwert: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backtext"), gdjs._51DViewCode.GDbacktextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51DViewCode.mapOfGDgdjs_9546_959551DViewCode_9546GDbacktextObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BeatstickModel"), gdjs._51DViewCode.GDBeatstickModelObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._51DViewCode.GDBeatstickModelObjects1.length === 0 ) ? 0 :gdjs._51DViewCode.GDBeatstickModelObjects1[0].getX()), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs._51DViewCode.GDBeatstickModelObjects1.length === 0 ) ? 0 :gdjs._51DViewCode.GDBeatstickModelObjects1[0].getY()) + 220, "", 0);
}}

}


};

gdjs._51DViewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51DViewCode.GDNewLightObjects1.length = 0;
gdjs._51DViewCode.GDNewLightObjects2.length = 0;
gdjs._51DViewCode.GDmousetextObjects1.length = 0;
gdjs._51DViewCode.GDmousetextObjects2.length = 0;
gdjs._51DViewCode.GDmousetext2Objects1.length = 0;
gdjs._51DViewCode.GDmousetext2Objects2.length = 0;
gdjs._51DViewCode.GDdrehwertTextObjects1.length = 0;
gdjs._51DViewCode.GDdrehwertTextObjects2.length = 0;
gdjs._51DViewCode.GDbacktextObjects1.length = 0;
gdjs._51DViewCode.GDbacktextObjects2.length = 0;
gdjs._51DViewCode.GDBeatstickModelObjects1.length = 0;
gdjs._51DViewCode.GDBeatstickModelObjects2.length = 0;

gdjs._51DViewCode.eventsList0(runtimeScene);
gdjs._51DViewCode.GDNewLightObjects1.length = 0;
gdjs._51DViewCode.GDNewLightObjects2.length = 0;
gdjs._51DViewCode.GDmousetextObjects1.length = 0;
gdjs._51DViewCode.GDmousetextObjects2.length = 0;
gdjs._51DViewCode.GDmousetext2Objects1.length = 0;
gdjs._51DViewCode.GDmousetext2Objects2.length = 0;
gdjs._51DViewCode.GDdrehwertTextObjects1.length = 0;
gdjs._51DViewCode.GDdrehwertTextObjects2.length = 0;
gdjs._51DViewCode.GDbacktextObjects1.length = 0;
gdjs._51DViewCode.GDbacktextObjects2.length = 0;
gdjs._51DViewCode.GDBeatstickModelObjects1.length = 0;
gdjs._51DViewCode.GDBeatstickModelObjects2.length = 0;


return;

}

gdjs['_51DViewCode'] = gdjs._51DViewCode;
