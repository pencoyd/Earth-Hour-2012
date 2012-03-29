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
		var theme = document.createElement('style');
		theme.setAttribute("type","text/css");
		var style = ".earthhour{font-family:sans-serif;}.earthhour.darken{position:absolute;overflow:hidden;z-index:9997;margin:-10px;background-color:black;width:120%;height:1000%;}.earthhour.main.outside{position:absolute;display:inline-block;z-index:9999;margin-top:20px;margin-left:auto;margin-right:auto;width:60%;background-color:white;padding:6px;border-radius:12px;box-shadow:0px 0px 8px black}.earthhour.main.pad{z-index:9999;background-color:#e0e0e0;box-shadow:0px 0px 4px #e0e0e0;padding:4px;border-radius:6px;}.earthhour.main.inside{background-color:#222222;text-align:center;z-index:9999;color:white;padding: 4px;border-radius:6px;}.earthhour.main.container{text-align:center;width:100%}";
		if(this.useFilter){
			style +=".earthhour.darken{filter:alpha(opacity='75');}";
		} else {
			style +=".earthhour.darken{opacity:0.75;}";
		}
		if(theme.styleSheet) {
			theme.styleSheet.cssText = style;
		} else {
			theme.innerHTML = style;
		}
		//Next, prepend the divs. just an innerHTML hotswap will do.
		var inner = "<div class='earthhour darken'></div>";
		inner += "<div class='earthhour main container'><div class='earthhour main outside'><div class='earthhour main pad'><div class='earthhour main inside'>";
		//CONTENT HERE
		innner += "</div></div></div></div>";
	}
});
