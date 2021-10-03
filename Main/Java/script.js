$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    let { time, value } = Nowtime();

    localStorage.setItem(time, value);

    $('.notification').addClass('show');

    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  }); 

  function HUpdate() {
    let currentHour = moment().hours();
    $('.time-block').each(function () {
      let blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        Remove();
      } else {
        Update();
      }
    });

    function Remove() {
      $(this).removeClass('past');
      $(this).addClass('present');
    }

    function Update() {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  }

  HUpdate();
  
  let interval = setInterval(HUpdate, 15000);

  Saved();

  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});

function Nowtime() {
  let value = $(this).siblings('.description').val();
  let time = $(this).parent().attr('id');
  return { time, value };
}

function Saved() {
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
}

