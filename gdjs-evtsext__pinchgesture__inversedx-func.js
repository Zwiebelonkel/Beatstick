
if (typeof gdjs.evtsExt__PinchGesture__InversedX !== "undefined") {
  gdjs.evtsExt__PinchGesture__InversedX.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PinchGesture__InversedX = {};


gdjs.evtsExt__PinchGesture__InversedX.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__PinchGesture__BeginningCenterX.func(runtimeScene, eventsFunctionContext.getArgument("Layer"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtsExt__PinchGesture__RotatedVectorX.func(runtimeScene, eventsFunctionContext.getArgument("PositionX") - gdjs.evtsExt__PinchGesture__CurrentCenterX.func(runtimeScene, eventsFunctionContext.getArgument("Layer"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), eventsFunctionContext.getArgument("PositionY") - gdjs.evtsExt__PinchGesture__CurrentCenterY.func(runtimeScene, eventsFunctionContext.getArgument("Layer"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), -(gdjs.evtsExt__PinchGesture__Rotation.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / gdjs.evtsExt__PinchGesture__Scaling.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__PinchGesture__InversedX.func = function(runtimeScene, PositionX, PositionY, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PinchGesture"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PinchGesture"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PinchGesture__InversedX.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PinchGesture__InversedX.registeredGdjsCallbacks = [];