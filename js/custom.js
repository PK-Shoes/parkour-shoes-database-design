$(document).ready(function () {
  $('.sidenav').sidenav();
  $('select').formSelect();

  var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
    start: [20, 80],
    tooltips: [true, true],
    connect: true,
    step: 1,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
      'min': 0,
      'max': 100
    },
    format: wNumb({
      decimals: 0
    })
  });
});
