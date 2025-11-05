/*
 =======================================================================*\
|| ###################################################################### ||
|| # vBulletin 5.6.2 Patch Level 2
|| # ------------------------------------------------------------------ # ||
|| # Copyright 2000-2021 MH Sub I, LLC dba vBulletin. All Rights Reserved.  # ||
|| # This file may not be redistributed in whole or significant part.   # ||
|| # ----------------- VBULLETIN IS NOT FREE SOFTWARE ----------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html   # ||
|| ###################################################################### ||
\*========================================================================*/
(function(b){var e=b(document);e.on("submit",".js-login-form-main",function(c){c.preventDefault();var d=b(this);c=d.closest(".js-login-form-main-container");var e=b(".js-error-box",c),f=b(".js-login-message-box",c),k=b(".js-login-button",c);f.height(d.height());var g=function(a){k.prop("disabled",!a);f.toggleClass("h-hide",a);d.toggleClass("h-hide",!a)},h=function(a){e.html(a).toggleClass("h-hide",!a);d.find(".js-login-username, .js-login-password").toggleClass("badlogin",!!a)};g(!1);
h("");vBulletin.loadingIndicator.suppressNextAjaxIndicator();vBulletin.AJAX({call:"/auth/ajax-login",data:d.serializeArray(),success:function(){location.reload()},api_error:function(a){h(vBulletin.phrase.get(a[0]));g(!0)},error:function(){location.href=pageData.baseurl}})});e.on("focus",".js-login-username, .js-login-password",function(c){b(this).removeClass("badlogin")})})(jQuery);
