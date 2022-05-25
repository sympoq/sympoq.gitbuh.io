(function(){var jQuery;if(window.jQuery===undefined||window.jQuery.fn.jquery!=='3.6.0')
{var script_tag=document.createElement('script');script_tag.setAttribute("type","text/javascript");script_tag.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");script_tag.setAttribute("sync",true);if(script_tag.readyState)
{script_tag.onreadystatechange=function()
{if(this.readyState=='complete'||this.readyState=='loaded')
{scriptLoadHandler();}};}
else
{script_tag.onload=scriptLoadHandler;}
(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(script_tag);}
else
{jQuery=window.jQuery;loadModalJS("https://sympoq.github.io/widget/modal-nf.min.js",true);main();}
function scriptLoadHandler()
{jQuery=window.jQuery;loadModalJS("https://sympoq.github.io/widget/modal-nf.min.js",true);main();}
function loadModalJS(FILE_URL,async=false){let scriptEle=document.createElement("script");scriptEle.setAttribute("src",FILE_URL);scriptEle.setAttribute("type","text/javascript");scriptEle.setAttribute("async",async);document.body.appendChild(scriptEle);}
function main()
{jQuery(document).ready(function($)
{var css_link2=$("<link>",{rel:"stylesheet",type:"text/css",href:"https://sympoq.github.io/widget/icons.min.css"});css_link2.appendTo('head');var css_link=$("<link>",{rel:"stylesheet",type:"text/css",href:"https://sympoq.github.io/widget/widget.min.css"});css_link.appendTo('head');var site=widget[0];var icon=widget[1];var color=widget[2];var position=widget[3];var buttonContent='<div class="s--button-container" style="bottom:var('+position+')">'
+'<a rel="nofollow" href="https://'+site+'.sympoq.com/app/f?p=widget:view" onclick="$(this).modal({width:370, height:580}).open(); return false;">'
+' <div class="s--button" style="background:'+color+';">'
+'  <div class="svg '+icon+'"></div>'
+' </div>'
+'</a>'
+'</div>';$(document.body).append(buttonContent);});}})();