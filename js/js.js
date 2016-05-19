/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-09 18:21:31
 * @version $Id$
 */
function fontAuto(width) {
	var winW=document.documentElement.clientWidth;//屏幕宽度
	if (winW>=width) {
		document.documentElement.style.fontSize="625%";
	} 
	else{
		document.documentElement.style.fontSize=(winW/width)*625+"%";
	}
}
fontAuto(640);

window.onresize=function(){
	fontAuto(640);
}