var ie8 = false;

$('#submit').click(function () {
  var username = $('#inputEmail').val();
  var password = $('#inputPassword').val();
  var url = "login/" + username + "/" + password;
  if (url !== 'login//') {
    $.get(url, function (data) {
      if (data.failed) {
        $('.alert-error').css('display', 'block');
        $('#statusMessage').html('invalid username or password');
      } else {
        var hash = window.location.hash;
        window.location = '/home' + hash;
      }
    });
  } else {
    $('.alert-error').css('display', 'block');
    $('#statusMessage').html('username and password are mandatory');
  }
});

var socket = io.connect();

socket.on('notification', function (data) {
});

socket.on('connect', function (data) {
});

$(document).ready(function () {
  $("[rel=tooltip]").tooltip();
  $(document).click(function () {
    $('.popover').hide();
  });
  if (ie8) {
    if (!Modernizr.input.placeholder) {
      $("input").each(
        function () {
          if ($(this).val() == "" && $(this).attr("placeholder") != "") {
            $(this).val($(this).attr("placeholder"));
            $(this).focus(function () {
              if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
            });
            $(this).blur(function () {
              if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
            });
          }
        });
    }
  }
});

function handle_message(data) {
  if (data.message) {
    var html = "",
      c = "";
    c = data.success ? "i-tick" : "i-cross";
    html = "<span><i class='" + c + "'></i> " + data.message + "</span>";
    console.log(html);
    $("#notification").jGrowl(html);
  }
  if (data.not_valid) {
    window.location = 'not-valid';
  }
}

function get_distinct(arr) {
  var i = 0,
    result = [];
  for (i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

function show_preferences(ele, event) {
  var popover = $('.popover');
  popover.toggle();
  popover.css({left : $(ele).offset().left - popover.width() + 35,
    top : $(ele).offset().top + $(ele).height() + 5});
  popover.find('.arrow').css({left : popover.width() - $(ele).width() - 6});
  event.stopPropagation();
  popover.click(function (event) {
    event.stopPropagation();
  });
}
