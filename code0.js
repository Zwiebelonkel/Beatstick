gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDBeatstickObjects1= [];
gdjs.menuCode.GDBeatstickObjects2= [];
gdjs.menuCode.GDtutorialtextObjects1= [];
gdjs.menuCode.GDtutorialtextObjects2= [];
gdjs.menuCode.GDtutorialButtonObjects1= [];
gdjs.menuCode.GDtutorialButtonObjects2= [];
gdjs.menuCode.GDtutorialOkObjects1= [];
gdjs.menuCode.GDtutorialOkObjects2= [];
gdjs.menuCode.GDBeatstickModelObjects1= [];
gdjs.menuCode.GDBeatstickModelObjects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtutorialButtonObjects1Objects = Hashtable.newFrom({"tutorialButton": gdjs.menuCode.GDtutorialButtonObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtutorialOkObjects1Objects = Hashtable.newFrom({"tutorialOk": gdjs.menuCode.GDtutorialOkObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtutorialOkObjects1Objects = Hashtable.newFrom({"tutorialOk": gdjs.menuCode.GDtutorialOkObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tutorialOk"), gdjs.menuCode.GDtutorialOkObjects1);
gdjs.copyArray(runtimeScene.getObjects("tutorialtext"), gdjs.menuCode.GDtutorialtextObjects1);
{for(var i = 0, len = gdjs.menuCode.GDtutorialtextObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtutorialtextObjects1[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtutorialOkObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtutorialOkObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Beatstick"), gdjs.menuCode.GDBeatstickObjects1);
{for(var i = 0, len = gdjs.menuCode.GDBeatstickObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDBeatstickObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDBeatstickObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.menuCode.GDBeatstickObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDBeatstickObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 1, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tutorialButton"), gdjs.menuCode.GDtutorialButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtutorialButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Beatstick"), gdjs.menuCode.GDBeatstickObjects1);
/* Reuse gdjs.menuCode.GDtutorialButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("tutorialOk"), gdjs.menuCode.GDtutorialOkObjects1);
gdjs.copyArray(runtimeScene.getObjects("tutorialtext"), gdjs.menuCode.GDtutorialtextObjects1);
{for(var i = 0, len = gdjs.menuCode.GDBeatstickObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDBeatstickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDtutorialButtonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtutorialButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDtutorialtextObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtutorialtextObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.menuCode.GDtutorialOkObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtutorialOkObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tutorialOk"), gdjs.menuCode.GDtutorialOkObjects1);
gdjs.copyArray(runtimeScene.getObjects("tutorialtext"), gdjs.menuCode.GDtutorialtextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtutorialOkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDtutorialtextObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDtutorialtextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDtutorialtextObjects1[k] = gdjs.menuCode.GDtutorialtextObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDtutorialtextObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.menuCode.GDtutorialOkObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDtutorialOkObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDtutorialOkObjects1[k] = gdjs.menuCode.GDtutorialOkObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDtutorialOkObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Beatstick"), gdjs.menuCode.GDBeatstickObjects1);
gdjs.copyArray(runtimeScene.getObjects("tutorialButton"), gdjs.menuCode.GDtutorialButtonObjects1);
/* Reuse gdjs.menuCode.GDtutorialOkObjects1 */
/* Reuse gdjs.menuCode.GDtutorialtextObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDBeatstickObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDBeatstickObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.menuCode.GDtutorialButtonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtutorialButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.menuCode.GDtutorialtextObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtutorialtextObjects1[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtutorialOkObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtutorialOkObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tutorialOk"), gdjs.menuCode.GDtutorialOkObjects1);
gdjs.copyArray(runtimeScene.getObjects("tutorialtext"), gdjs.menuCode.GDtutorialtextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtutorialOkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDtutorialtextObjects1.length;i<l;++i) {
    if ( !(gdjs.menuCode.GDtutorialtextObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDtutorialtextObjects1[k] = gdjs.menuCode.GDtutorialtextObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDtutorialtextObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.menuCode.GDtutorialOkObjects1.length;i<l;++i) {
    if ( !(gdjs.menuCode.GDtutorialOkObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDtutorialOkObjects1[k] = gdjs.menuCode.GDtutorialOkObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDtutorialOkObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDBeatstickObjects1.length = 0;
gdjs.menuCode.GDBeatstickObjects2.length = 0;
gdjs.menuCode.GDtutorialtextObjects1.length = 0;
gdjs.menuCode.GDtutorialtextObjects2.length = 0;
gdjs.menuCode.GDtutorialButtonObjects1.length = 0;
gdjs.menuCode.GDtutorialButtonObjects2.length = 0;
gdjs.menuCode.GDtutorialOkObjects1.length = 0;
gdjs.menuCode.GDtutorialOkObjects2.length = 0;
gdjs.menuCode.GDBeatstickModelObjects1.length = 0;
gdjs.menuCode.GDBeatstickModelObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDBeatstickObjects1.length = 0;
gdjs.menuCode.GDBeatstickObjects2.length = 0;
gdjs.menuCode.GDtutorialtextObjects1.length = 0;
gdjs.menuCode.GDtutorialtextObjects2.length = 0;
gdjs.menuCode.GDtutorialButtonObjects1.length = 0;
gdjs.menuCode.GDtutorialButtonObjects2.length = 0;
gdjs.menuCode.GDtutorialOkObjects1.length = 0;
gdjs.menuCode.GDtutorialOkObjects2.length = 0;
gdjs.menuCode.GDBeatstickModelObjects1.length = 0;
gdjs.menuCode.GDBeatstickModelObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
