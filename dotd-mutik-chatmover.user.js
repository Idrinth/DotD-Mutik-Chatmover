// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.kongregate.com/games/5thPlanetGames/dawn-of-the-dragons
// @grant        none
// ==/UserScript==
window.setTimeout(function() {
    var idrinth4mutik=window.setInterval(function(){
        console.log('idrinth4mutik');
if(document.getElementById('alliance_room')) {
    window.clearInterval(idrinth4mutik);
	document.getElementsByTagName('body')[0].appendChild(document.getElementById('alliance_room'));
    document.getElementById('alliance_tab').addEventListener('click',function(){
        var el = document.getElementById('alliance_room');
        var css = el.getAttribute('class');
        if(css===null) {
            css='';
        }
        if(css.match(/(^|\s)disabled(\s|$)/)) {
            css=css.replace(/(^|\s)disabled(\s|$)/,' ');
        } else {
            css=css+' disabled';
        }
        el.setAttribute('class',css.replace(/^\s+|\s+$/,''));
    });
    var styles = document.createElement('style');
    styles.appendChild(document.createTextNode('#alliance_room{width:300px;background:#aaa;height:80%;position:fixed;top:10%}'
                                               +'#alliance_room.disabled{display:none}'
                                               +'#alliance_room > div{padding:1px;box-sizing:border-box}'
                                               +'#alliance_users{height:20%;overflow-y:scroll;background:rgba(0,0,0,0.25);color:#ddd}'
                                               +'#alliance_users > div{height:auto;width:100%;overflow:hidden}'
                                               +'#alliance_users > div > span{max-width:40%;overflow:hidden;display:block;float:left;padding:2px;box-sizing:border-box;margin:1px}'
                                               +'#alliance_users > div > span:nth-of-type(1){max-width:20%;border-radius:4px;background:darkRed;font-weight:bold}'
                                               +'#alliance_chat_window{height:70% !important;overflow-y:scroll;overflow-x:hidden;color:#ddd}'
                                               +'#alliance_chat_window img{max-width:95%}'
                                               +'#alliance_chat_window .username{font-weight:bold;color:red}'
                                               +'#alliance_chat_window .emote{color:orange}'
                                               +'#alliance_chat_window > div > p{background:rgba(0,0,0,0.5);}'
                                               +'#alliance_chat_window > div > p.even{background:rgba(0,0,0,0.65);}'
                                               +'#chat_controls{height:10%}'
                                               +'#chat_controls > textarea{height:100%;with:100%;display:block}'));
	document.getElementsByTagName('head')[0].appendChild(styles);
}
    },1000);},1000);
