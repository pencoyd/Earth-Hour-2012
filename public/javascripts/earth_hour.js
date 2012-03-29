CloudFlare.define("earthhour", ['earthhour/config'], function(_config){
	var EH = function EH(config) {
		this.config = config;
		this.useFilter = /msie [678]/i.test(navigator.userAgent);
		this.state = 0;
	}
	var eh = new EH(_config)
	
	EH.prototype.activate() {
		this.preSetup()
	}
	
	EH.prototype.preSetup() {
		if(this.isTime(this.config.time)) {
			this.setup();
		}
	}
	
	EH.prototype.isTime(inp) {
		var inSp = inp.split(":");
		var inH = parseInt(insp[0]);
		var inM = parseInt(insp[1]);
		var sDO = new Date(); // Start
		var eDO = new Date(); // End
		var nDO = new Date(); // Now 
		sDO.setFullYear(2012,2,31);
		sDO.setHours(inH);
		sDO.setMinutes(inM);
		endM = inM;
		if(inH == 23) {
			endH = 0;
			endY = [2012,3,1];
		} else {
			endH = inH+1;
			endY = [2012,2,31];
		}
		eDO.setFullYear(endY[0],endY[1],endY[2]);
		eDO.setHours(endH);
		eDO.setMinutes(endM);
		if(nDO >= sDO && nDO < eDO) { //gt|eq now & lt end
			return true;
		} else {
			return false;
		}
	}
	
	EH.prototype.setup() {
		
	}
});
