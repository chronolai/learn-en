function $(id){return document.getElementById(id);}

function attachEventListener(objectName,eventType,callFunction,useCapture){
	var objectName = document.getElementById(objectName);
	if(objectName.addEventListener){
		objectName.addEventListener(eventType, callFunction, useCapture);
	}
	else{
		objectName.attachEvent("on" + eventType, callFunction);
	}
}