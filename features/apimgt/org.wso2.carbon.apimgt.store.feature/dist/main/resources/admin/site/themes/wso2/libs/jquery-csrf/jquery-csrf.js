"use strict";

$(document).ready(function () {
  $.ajaxSetup({
    beforeSend: function beforeSend(xhr, settings) {
      function getCookie(name) {
        var cookieValue = null;

        if (document.cookie && document.cookie != '') {
          var cookies = document.cookie.split(';');

          for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]); // Does this cookie string begin with the name we want?

            if (cookie.substring(0, name.length + 1) == name + '=') {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }

        return cookieValue;
      }

      var url = settings.url.replace(requestURL, "");

      if (!(/^http:.*/.test(url) || /^https:.*/.test(url))) {
        // Only send the token to relative URLs i.e. locally.
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
      }
    }
  });
});