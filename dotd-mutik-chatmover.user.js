// ==UserScript==
// @name         DotD Mutik Chatmover
// @namespace    http://idrinth.de/
// @version      1.1.0
// @description  moves the alliance chat provided by mutik's script to a seperate window
// @author       Idrinth
// @include      http://www.kongregate.com/games/5thplanetgames/dawn-of-the-dragons*
// @include      http://kongregate.com/games/5thplanetgames/dawn-of-the-dragons*
// @grant        none
// ==/UserScript==
window.setTimeout ( function () {
    var idrinth4mutik = window.setInterval ( function () {
        if ( document.getElementById ( 'alliance_room' ) ) {
            window.clearInterval ( idrinth4mutik );
            document.getElementsByTagName ( 'body' )[0].appendChild ( document.getElementById ( 'alliance_room' ) );
            var r = document.createElement ( 'div' );
            r.id = "idrinth_alliance_chat_wrapper";
            r.appendChild ( document.createElement ( 'a' ) );
            r.lastChild.appendChild ( document.createTextNode ( 'Alliance' ) );
            r.lastChild.setAttribute ( 'href', '#' );
            r.addEventListener ( 'click', function () {
                var el = document.getElementById ( 'alliance_room' );
                var el2 = document.getElementById ( 'idrinth_alliance_chat_wrapper' );
                var css = el2.getAttribute ( 'class' );
                if ( css === null ) {
                    css = '';
                }
                if ( css.match ( /(^|\s)active(\s|$)/ ) ) {
                    el.setAttribute ( 'class', 'disabled' );
                    el2.setAttribute ( 'class', 'chat_room_tab' );
                } else {
                    el2.setAttribute ( 'class', 'chat_room_tab active' );
                    el.setAttribute ( 'class', '' );
                }
            } );
            r.setAttribute ( 'class', 'chat_room_tab active' );
            document.getElementById ( 'alliance_room' ).setAttribute ( 'draggable', 'true' );
            document.getElementById ( 'alliance_room' ).ondrag = function ( e ) {
                if ( !e.pageX && !e.pageY ) {
                    return;
                }
                var target = document.getElementById ( 'alliance_room' );
                target.dotdmutikchatmover = target.dotdmutikchatmover ? target.dotdmutikchatmover : {
                    x: 0,
                    y: 0
                };
                target.setAttribute ( 'style', 'left:' + ( e.pageX + target.dotdmutikchatmover.x ) + 'px;top:' + ( e.pageY + target.dotdmutikchatmover.y ) + 'px' );
            };
            document.getElementById ( 'alliance_room' ).onmousedown = function ( e ) {
                var target = document.getElementById ( 'alliance_room' );
                target.dotdmutikchatmover = {
                    x: target.getBoundingClientRect ().left - e.pageX,
                    y: target.getBoundingClientRect ().top - e.pageY
                };
            };
            document.getElementById ( 'alliance_room' ).appendChild ( document.createElement ( 'span' ) );
            document.getElementById ( 'alliance_room' ).lastChild.innerHTML = '&#x2600;';
            document.getElementById ( 'alliance_room' ).lastChild.setAttribute ( 'title', 'Drag me!' );
            document.getElementById ( 'chat_room_tabs' ).appendChild ( r );
            var styles = document.createElement ( 'style' );
            styles.appendChild ( document.createTextNode ( '#alliance_tab{display:none}'
                    + '#alliance_room{z-index: 10000000;width:300px;background:#aaa;height:80%;position:fixed;top:10%;}'
                    + '#alliance_room > span{color:red;display:block;background-color:#fff;background-image:linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(255,255,255,0.1),rgba(0,0,0,0.25)),linear-gradient(to right,rgba(0,0,0,0.1),rgba(255,255,255,0.1),rgba(0,0,0,0.25));width:1em;height:1em;padding:3px;position:absolute;border-radius:3px;top:0;margin-top:-0.25em;font-size:150%;right:0;margin-right:0.25em;}'
                    + '#alliance_room.disabled{display:none}'
                    + '#alliance_room > div{padding:1px;box-sizing:border-box}'
                    + '#alliance_users{height:20%;overflow-y:scroll;background:rgba(0,0,0,0.25);color:#ddd}'
                    + '#alliance_users > div{height:auto;width:100%;overflow:hidden}'
                    + '#alliance_users > div > span{max-width:40%;overflow:hidden;display:block;float:left;padding:2px;box-sizing:border-box;margin:1px}'
                    + '#alliance_users > div > span:nth-of-type(1){max-width:20%;border-radius:4px;background:darkRed;font-weight:bold}'
                    + '#alliance_chat_window{height:70% !important;overflow-y:scroll;overflow-x:hidden;color:#ddd}'
                    + '#alliance_chat_window img{max-width:95%}'
                    + '#alliance_chat_window embed{max-width:95%;height: auto !important;}'
                    + '#alliance_chat_window .username{font-weight:bold;color:red}'
                    + '#alliance_chat_window .whisper{font-style:italic;color:#fff}'
                    + '#alliance_chat_window .emote{color:orange}'
                    + '#alliance_chat_window .emote .separator{display:none}'
                    + '#alliance_chat_window .emote .username{display:none}'
                    + '#alliance_chat_window a{color:lightcoral}'
                    + '#alliance_chat_window > div > p{background:rgba(0,0,0,0.5);overflow:hidden}'
                    + '#alliance_chat_window > div > p.even{background:rgba(0,0,0,0.65);}'
                    + '#alliance_room > .chat_controls{height:10%}'
                    + '#alliance_room > .chat_controls > textarea{background:rgba(0,0,0,0.65);color:#fff;height:100%;width:100%;box-sizing:border-box;display:block}' ) );
            document.getElementsByTagName ( 'head' )[0].appendChild ( styles );
        }
    }, 1000 );
}, 1000 );
