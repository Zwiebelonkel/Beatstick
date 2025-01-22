
gdjs.evtsExt__PinchGesture__Pichable = gdjs.evtsExt__PinchGesture__Pichable || {};

/**
 * Behavior generated from Pinchable object
 */
gdjs.evtsExt__PinchGesture__Pichable.Pichable = class Pichable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PinchGesture__Pichable.Pichable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Resizable = behaviorData.Resizable !== undefined ? behaviorData.Resizable : "";
    this._behaviorData.LockSize = behaviorData.LockSize !== undefined ? behaviorData.LockSize : false;
    this._behaviorData.IsCandidate = false;
    this._behaviorData.IsPinched = false;
    this._behaviorData.BeginningCenterX = Number("") || 0;
    this._behaviorData.BeginningCenterY = Number("") || 0;
    this._behaviorData.BeginningAngle = Number("") || 0;
    this._behaviorData.BeginningWidth = Number("") || 0;
    this._behaviorData.BeginningHeight = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Resizable !== newBehaviorData.Resizable)
      this._behaviorData.Resizable = newBehaviorData.Resizable;
    if (oldBehaviorData.LockSize !== newBehaviorData.LockSize)
      this._behaviorData.LockSize = newBehaviorData.LockSize;
    if (oldBehaviorData.IsCandidate !== newBehaviorData.IsCandidate)
      this._behaviorData.IsCandidate = newBehaviorData.IsCandidate;
    if (oldBehaviorData.IsPinched !== newBehaviorData.IsPinched)
      this._behaviorData.IsPinched = newBehaviorData.IsPinched;
    if (oldBehaviorData.BeginningCenterX !== newBehaviorData.BeginningCenterX)
      this._behaviorData.BeginningCenterX = newBehaviorData.BeginningCenterX;
    if (oldBehaviorData.BeginningCenterY !== newBehaviorData.BeginningCenterY)
      this._behaviorData.BeginningCenterY = newBehaviorData.BeginningCenterY;
    if (oldBehaviorData.BeginningAngle !== newBehaviorData.BeginningAngle)
      this._behaviorData.BeginningAngle = newBehaviorData.BeginningAngle;
    if (oldBehaviorData.BeginningWidth !== newBehaviorData.BeginningWidth)
      this._behaviorData.BeginningWidth = newBehaviorData.BeginningWidth;
    if (oldBehaviorData.BeginningHeight !== newBehaviorData.BeginningHeight)
      this._behaviorData.BeginningHeight = newBehaviorData.BeginningHeight;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Resizable: this._behaviorData.Resizable,
    LockSize: this._behaviorData.LockSize,
    IsCandidate: this._behaviorData.IsCandidate,
    IsPinched: this._behaviorData.IsPinched,
    BeginningCenterX: this._behaviorData.BeginningCenterX,
    BeginningCenterY: this._behaviorData.BeginningCenterY,
    BeginningAngle: this._behaviorData.BeginningAngle,
    BeginningWidth: this._behaviorData.BeginningWidth,
    BeginningHeight: this._behaviorData.BeginningHeight,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Resizable !== undefined)
      this._behaviorData.Resizable = networkSyncData.props.Resizable;
    if (networkSyncData.props.LockSize !== undefined)
      this._behaviorData.LockSize = networkSyncData.props.LockSize;
    if (networkSyncData.props.IsCandidate !== undefined)
      this._behaviorData.IsCandidate = networkSyncData.props.IsCandidate;
    if (networkSyncData.props.IsPinched !== undefined)
      this._behaviorData.IsPinched = networkSyncData.props.IsPinched;
    if (networkSyncData.props.BeginningCenterX !== undefined)
      this._behaviorData.BeginningCenterX = networkSyncData.props.BeginningCenterX;
    if (networkSyncData.props.BeginningCenterY !== undefined)
      this._behaviorData.BeginningCenterY = networkSyncData.props.BeginningCenterY;
    if (networkSyncData.props.BeginningAngle !== undefined)
      this._behaviorData.BeginningAngle = networkSyncData.props.BeginningAngle;
    if (networkSyncData.props.BeginningWidth !== undefined)
      this._behaviorData.BeginningWidth = networkSyncData.props.BeginningWidth;
    if (networkSyncData.props.BeginningHeight !== undefined)
      this._behaviorData.BeginningHeight = networkSyncData.props.BeginningHeight;
  }

  // Properties:
  
  _getResizable() {
    return this._behaviorData.Resizable !== undefined ? this._behaviorData.Resizable : "";
  }
  _setResizable(newValue) {
    this._behaviorData.Resizable = newValue;
  }
  _getLockSize() {
    return this._behaviorData.LockSize !== undefined ? this._behaviorData.LockSize : false;
  }
  _setLockSize(newValue) {
    this._behaviorData.LockSize = newValue;
  }
  _toggleLockSize() {
    this._setLockSize(!this._getLockSize());
  }
  _getIsCandidate() {
    return this._behaviorData.IsCandidate !== undefined ? this._behaviorData.IsCandidate : false;
  }
  _setIsCandidate(newValue) {
    this._behaviorData.IsCandidate = newValue;
  }
  _toggleIsCandidate() {
    this._setIsCandidate(!this._getIsCandidate());
  }
  _getIsPinched() {
    return this._behaviorData.IsPinched !== undefined ? this._behaviorData.IsPinched : false;
  }
  _setIsPinched(newValue) {
    this._behaviorData.IsPinched = newValue;
  }
  _toggleIsPinched() {
    this._setIsPinched(!this._getIsPinched());
  }
  _getBeginningCenterX() {
    return this._behaviorData.BeginningCenterX !== undefined ? this._behaviorData.BeginningCenterX : Number("") || 0;
  }
  _setBeginningCenterX(newValue) {
    this._behaviorData.BeginningCenterX = newValue;
  }
  _getBeginningCenterY() {
    return this._behaviorData.BeginningCenterY !== undefined ? this._behaviorData.BeginningCenterY : Number("") || 0;
  }
  _setBeginningCenterY(newValue) {
    this._behaviorData.BeginningCenterY = newValue;
  }
  _getBeginningAngle() {
    return this._behaviorData.BeginningAngle !== undefined ? this._behaviorData.BeginningAngle : Number("") || 0;
  }
  _setBeginningAngle(newValue) {
    this._behaviorData.BeginningAngle = newValue;
  }
  _getBeginningWidth() {
    return this._behaviorData.BeginningWidth !== undefined ? this._behaviorData.BeginningWidth : Number("") || 0;
  }
  _setBeginningWidth(newValue) {
    this._behaviorData.BeginningWidth = newValue;
  }
  _getBeginningHeight() {
    return this._behaviorData.BeginningHeight !== undefined ? this._behaviorData.BeginningHeight : Number("") || 0;
  }
  _setBeginningHeight(newValue) {
    this._behaviorData.BeginningHeight = newValue;
  }
}

/**
 * Shared data generated from Pinchable object
 */
gdjs.evtsExt__PinchGesture__Pichable.Pichable.SharedData = class PichableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PinchGesture__Pichable.Pichable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PinchGesture_PichableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PinchGesture_PichableSharedData = new gdjs.evtsExt__PinchGesture__Pichable.Pichable.SharedData(
      initialData
    );
  }
  return instanceContainer._PinchGesture_PichableSharedData;
}

// Methods:
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCollidingWithPoint(gdjs.evtsExt__PinchGesture__CurrentCenterX.func(runtimeScene, (gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__PinchGesture__CurrentCenterY.func(runtimeScene, (gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCandidate(true);
}
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(22).setNumber(Math.max(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(22).getAsNumber(), (( gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[0].getZOrder())));
}{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBeginningCenterX((gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBeginningCenterY((gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBeginningAngle((gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle()));
}
}{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBeginningWidth((gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBeginningHeight((gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getHeight()));
}
}}

}


};gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLockSize()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBeginningWidth() * gdjs.evtsExt__PinchGesture__Scaling.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBeginningHeight() * gdjs.evtsExt__PinchGesture__Scaling.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PinchGesture__IsPinching.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(10104756);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPinched() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].setCenterXInScene(gdjs.evtsExt__PinchGesture__TransformedX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber(), (gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].setCenterYInScene(gdjs.evtsExt__PinchGesture__TransformedY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber(), (gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsNumber() + gdjs.evtsExt__PinchGesture__Rotation.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}
{ //Subevents
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__PinchGesture__IsPinching.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPinched(false);
}
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(22).setNumber(0);
}}

}


};

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Resizable": this._getResizable()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsCandidate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1[i].getZOrder() >= eventsFunctionContext.sceneVariablesForExtension.getFromIndex(22).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPinched(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCandidate(false);
}
}}

}


};

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Resizable": this._getResizable()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext = {};
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1= [];
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects2= [];


gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPinched() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1[k] = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinched = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Resizable": this._getResizable()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.IsPinchedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext = {};
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects1= [];
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects2= [];


gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPinched(false);
}
}}

}


};

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinching = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Resizable": this._getResizable()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PinchGesture__Pichable.Pichable.prototype.AbortPinchingContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("PinchGesture::Pichable", gdjs.evtsExt__PinchGesture__Pichable.Pichable);
