function hideEventsWhenPageLoads() {
  for (var i = 0; i < $("img").length; i++ ){
    if ($("img")[i].src.includes('event') && $("img")[i].style.height == '50px') {
      if (localStorage.getItem('EventsHidden') == 'false') {
        $("img")[i].style.visibility ='visible';
        $(".events a").text('Events - Visible')
        $(".events span i").css('color', 'white');
        } else {
        $("img")[i].style.visibility ='hidden';
        $(".events a").text('Events - Hidden')
        $(".events span i").css('color', '#e34141');
      }
    }
  }
}

function hideJobsWhenPageLoads() {
  for (var i = 0; i < $("img").length; i++ ){
    if ($("img")[i].src.includes('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD') && $("img")[i].style.height == '30px') {
      if (localStorage.getItem('InformationHidden') == 'true') {
        $("img")[i].style.visibility ='hidden';
        $(".jobs a").text('Jobs - Hidden')
        $(".jobs span i").css('color', '#e34141');

        } else {
          $("img")[i].style.visibility ='visible';
          $(".jobs a").text('Jobs - Visible')
          $(".jobs span i").css('color', 'white');
      }
    }
  }
}

function hideAgenciesWhenPageLoads() {
  for (var i = 0; i < $("img").length; i++ ){
    if ($("img")[i].src.includes('happy') && $("img")[i].style.height == '30px') {
      if (localStorage.getItem('AgenciesHidden') == 'false') {
        $("img")[i].style.visibility ='visible';
        $(".agencies a").text('Agencies - Visible')
        $(".agencies span i").css('color', 'white');
        } else {
        $("img")[i].style.visibility ='hidden';
        $(".agencies a").text('Agencies - Hidden')
        $(".agencies span i").css('color', '#e34141');
      }
    }
  }
}