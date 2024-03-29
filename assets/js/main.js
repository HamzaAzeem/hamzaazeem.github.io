/* skel-baseline v3.0.1 | (c) n33 | skel.io | MIT licensed */

function changeStatus() {
	// Status changer
		var customObj = {
			"status": [
				"finding new coffee spots",
				"exploring new hiking trails",
				"binging Netflix",
				"taking naps",
				"trying to eat healthy",
				"learning photography",
				"looking for new hobbies",
				"eating overpriced avocado toasts",
				"learning to pronounce açai",
				"pretending to like kale smoothies",
				"practising my broken Spanish",
				"avoiding sunburns",
				"figuring out how people can only eat salads",
				"overpaying for my apartment",
				"trying to keep my houseplants alive"
			]
		};
		var statusArr = customObj["status"];
		var statusIdx = Math.floor(Math.random() * statusArr.length);
		document.querySelector('#changeable').innerHTML = statusArr[statusIdx];
}

(function() {

	"use strict";

	// Methods/polyfills.

		// addEventsListener
			var addEventsListener=function(o,t,e){var n,i=t.split(" ");for(n in i)o.addEventListener(i[n],e)}

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

	// Vars.
		var $body = document.querySelector('body');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.classList.add('is-loading');

		window.addEventListener('load', function() {
			$body.classList.remove('is-loading');
		});

		changeStatus();

		document.getElementById("changeable").addEventListener("click", changeStatus);

})();
