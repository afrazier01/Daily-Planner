var saveButtons = $('.saveBtn')
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'))

function setBackgroundColor (time) {
  //present conditions
  if (time===9) {
    $('#hour-9').attr('style','background-color: #ff6961;')
  } 
  if (time===10) {
    $('#hour-10').attr('style','background-color: #ff6961;')
  } 
  if (time===11) {
    $('#hour-11').attr('style','background-color: #ff6961;')
  } 
  if (time===12) {
    $('#hour-12').attr('style','background-color: #ff6961;')
  } 
  if (time===13) {
    $('#hour-1').attr('style','background-color: #ff6961;')
  } 
  if (time===14) {
    $('#hour-2').attr('style','background-color: #ff6961;')
  } 
  if (time===15) {
    $('#hour-3').attr('style','background-color: #ff6961;')
  } 
  if (time===16) {
    $('#hour-4').attr('style','background-color: #ff6961;')
  } 
  if (time===17) {
    $('#hour-5').attr('style','background-color: #ff6961;')
  }

  //past conditions
  if (time>=10) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
  } 
  if (time>=11) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
    $('#hour-10').attr('style','background-color: #d3d3d3;')
  } 
  if (time>=12) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
    $('#hour-10').attr('style','background-color: #d3d3d3;')
    $('#hour-11').attr('style','background-color: #d3d3d3;')
  } 
  if (time>=13) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
    $('#hour-10').attr('style','background-color: #d3d3d3;')
    $('#hour-11').attr('style','background-color: #d3d3d3;')
    $('#hour-12').attr('style','background-color: #d3d3d3;')
  }
  if (time>=14) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
    $('#hour-10').attr('style','background-color: #d3d3d3;')
    $('#hour-11').attr('style','background-color: #d3d3d3;')
    $('#hour-12').attr('style','background-color: #d3d3d3;')
    $('#hour-1').attr('style','background-color: #d3d3d3;')
  }
  if (time>=15) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
    $('#hour-10').attr('style','background-color: #d3d3d3;')
    $('#hour-11').attr('style','background-color: #d3d3d3;')
    $('#hour-12').attr('style','background-color: #d3d3d3;')
    $('#hour-1').attr('style','background-color: #d3d3d3;')
    $('#hour-2').attr('style','background-color: #d3d3d3;')
  } 
  if (time>=16) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
    $('#hour-10').attr('style','background-color: #d3d3d3;')
    $('#hour-11').attr('style','background-color: #d3d3d3;')
    $('#hour-12').attr('style','background-color: #d3d3d3;')
    $('#hour-1').attr('style','background-color: #d3d3d3;')
    $('#hour-2').attr('style','background-color: #d3d3d3;')
    $('#hour-3').attr('style','background-color: #d3d3d3;')
  } 
  if (time>=17) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
    $('#hour-10').attr('style','background-color: #d3d3d3;')
    $('#hour-11').attr('style','background-color: #d3d3d3;')
    $('#hour-12').attr('style','background-color: #d3d3d3;')
    $('#hour-1').attr('style','background-color: #d3d3d3;')
    $('#hour-2').attr('style','background-color: #d3d3d3;')
    $('#hour-3').attr('style','background-color: #d3d3d3;')
    $('#hour-4').attr('style','background-color: #d3d3d3;')
  } 
  if (time>18) {
    $('#hour-9').attr('style','background-color: #d3d3d3;')
    $('#hour-10').attr('style','background-color: #d3d3d3;')
    $('#hour-11').attr('style','background-color: #d3d3d3;')
    $('#hour-12').attr('style','background-color: #d3d3d3;')
    $('#hour-1').attr('style','background-color: #d3d3d3;')
    $('#hour-2').attr('style','background-color: #d3d3d3;')
    $('#hour-3').attr('style','background-color: #d3d3d3;')
    $('#hour-4').attr('style','background-color: #d3d3d3;')
    $('#hour-5').attr('style','background-color: #d3d3d3;')
  } 
}

$(function checkTime () {
  time = dayjs().format('H')
  console.log('Time: ',time)
  time = parseInt(time)
  //set default background to green
  $('.time-block').attr('style','background-color: #77dd77;')

  setBackgroundColor(time)
})

saveButtons.on('click', function () {
  var userEvent1 = $('.h9').val()
  var userEvent2 = $('.h10').val()
  var userEvent3 = $('.h11').val()
  var userEvent4 = $('.h12').val()
  var userEvent5 = $('.h1').val()
  var userEvent6 = $('.h2').val()
  var userEvent7 = $('.h3').val()
  var userEvent8 = $('.h4').val()
  var userEvent9 = $('.h5').val()

 
  localStorage.setItem('event1',JSON.stringify(userEvent1))
  localStorage.setItem('event2',JSON.stringify(userEvent2))
  localStorage.setItem('event3',JSON.stringify(userEvent3))
  localStorage.setItem('event4',JSON.stringify(userEvent4))
  localStorage.setItem('event5',JSON.stringify(userEvent5))
  localStorage.setItem('event6',JSON.stringify(userEvent6))
  localStorage.setItem('event7',JSON.stringify(userEvent7))
  localStorage.setItem('event8',JSON.stringify(userEvent8))
  localStorage.setItem('event9',JSON.stringify(userEvent9))
})

$(function renderUserEvents () {
  var userEvent1 = $(JSON.parse(localStorage.getItem('event1')))
  var userEvent2 = $(JSON.parse(localStorage.getItem('event2')))
  var userEvent3 = $(JSON.parse(localStorage.getItem('event3')))
  var userEvent4 = $(JSON.parse(localStorage.getItem('event4')))
  var userEvent5 = $(JSON.parse(localStorage.getItem('event5')))
  var userEvent6 = $(JSON.parse(localStorage.getItem('event6')))
  var userEvent7 = $(JSON.parse(localStorage.getItem('event7')))
  var userEvent8 = $(JSON.parse(localStorage.getItem('event8')))
  var userEvent9 = $(JSON.parse(localStorage.getItem('event9')))
  
  
  $('.h9').text(JSON.parse(localStorage.getItem('event1')))
  $('.h10').text(JSON.parse(localStorage.getItem('event2')))
  $('.h11').text(JSON.parse(localStorage.getItem('event3')))
  $('.h12').text(JSON.parse(localStorage.getItem('event4')))
  $('.h1').text(JSON.parse(localStorage.getItem('event5')))
  $('.h2').text(JSON.parse(localStorage.getItem('event6')))
  $('.h3').text(JSON.parse(localStorage.getItem('event7')))
  $('.h4').text(JSON.parse(localStorage.getItem('event8')))
  $('.h5').text(JSON.parse(localStorage.getItem('event9')))
})



