!function(){"use strict";var e,t;jQuery.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=jQuery.uaMatch(navigator.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),jQuery.browser=t,jQuery.sub=function(){function e(t,n){return new e.fn.init(t,n)}jQuery.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,i){return i&&i instanceof jQuery&&!(i instanceof e)&&(i=e(i)),jQuery.fn.init.call(this,n,i,t)},e.fn.init.prototype=e.fn;var t=e(document);return e}}();var bw=document.body.clientWidth;jQuery.fn.dysaniagrid=function(e){var t=jQuery(this),n=jQuery.extend({galleryid:"#gridbox1"},e);t.find("li a").on("click",function(e){e.preventDefault();var i=jQuery(this).data("filter"),a=jQuery(n.galleryid).find("li");t.find("li a").removeClass("active"),jQuery(this).addClass("active"),a.each(function(){"all"===i?(a.removeClass("no-effect"),a.css("cursor","pointer"),jQuery.browser.msie&&parseInt(jQuery.browser.version,10)<=9&&a.css("visibility","visible"),bw>480||jQuery(this).css("display","block")):jQuery(this).filter("[data-filter~="+i+"]").length?(jQuery(this).removeClass("no-effect"),jQuery(this).css("cursor","pointer"),jQuery.browser.msie&&parseInt(jQuery.browser.version,10)<=9&&jQuery(this).css("visibility","visible"),bw>480||jQuery(this).css("display","block")):(jQuery(this).addClass("no-effect"),jQuery(this).css("cursor","default"),jQuery.browser.msie&&parseInt(jQuery.browser.version,10)<=9&&jQuery(this).css("visibility","hidden"),bw>480||jQuery(this).css("display","none"))})})};