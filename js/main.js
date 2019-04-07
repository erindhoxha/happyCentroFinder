$(".img-logo").fadeIn(1500);
var zoom = 0;
$(document).ready(function() {
  setTimeout(() => {
    $("#loading-div").fadeOut(700);
    hideEventsWhenPageLoads();
    hideAgenciesWhenPageLoads();
    hideJobsWhenPageLoads();
  }, 1000);

}) 
  
for (let i = 0; i < jobs.length; i++) {
  locations.parnell.content += `
    <p class="subtitle">${jobs[i].jobTitle}</p>
    <p class="subtitle">${jobs[i].jobSubtitle}</p>
    <p class="body-content">${jobs[i].jobParagraph}</p>
    <a href="indeed.com"><button class="apply">Apply now</button></a>
    <span id="indeed_at"><a href="http://www.indeed.com/" rell="nofollow" >jobs</a> by <a href="http://www.indeed.com/" rell="nofollow" title="Job Search"><img src="http://www.indeed.com/p/jobsearch.gif" style="border: 0; vertical-align: middle;" alt="Indeed job search"></a></span>
    <hr>
   `
   locations.christchurchJobs.content += `
   <p class="subtitle">${jobs[i].jobTitle}</p>
   <p class="subtitle">${jobs[i].jobSubtitle}</p>
   <p class="body-content">${jobs[i].jobParagraph}</p>
   <a href="indeed.com"><button class="apply">Apply now</button></a>
   <span id="indeed_at"><a href="http://www.indeed.com/" rell="nofollow" >jobs</a> by <a href="http://www.indeed.com/" rell="nofollow" title="Job Search"><img src="http://www.indeed.com/p/jobsearch.gif" style="border: 0; vertical-align: middle;" alt="Indeed job search"></a></span>
   <hr>
  `
   locations.infoTauranga.content += `
   <p class="subtitle">${jobs[i].jobTitle}</p>
   <p class="subtitle">${jobs[i].jobSubtitle}</p>
   <p class="body-content">${jobs[i].jobParagraph}</p>
   <a href="indeed.com"><button class="apply">Apply now</button></a>
   <span id="indeed_at"><a href="http://www.indeed.com/" rell="nofollow" >jobs</a> by <a href="http://www.indeed.com/" rell="nofollow" title="Job Search"><img src="http://www.indeed.com/p/jobsearch.gif" style="border: 0; vertical-align: middle;" alt="Indeed job search"></a></span>
   <hr>
  `
  locations.newPlymouthNews.content += `
  <p class="subtitle">${jobs[i].jobTitle}</p>
  <p class="subtitle">${jobs[i].jobSubtitle}</p>
  <p class="body-content">${jobs[i].jobParagraph}</p>
  <a href="indeed.com"><button class="apply">Apply now</button></a>
  <span id="indeed_at"><a href="http://www.indeed.com/" rell="nofollow" >jobs</a> by <a href="http://www.indeed.com/" rell="nofollow" title="Job Search"><img src="http://www.indeed.com/p/jobsearch.gif" style="border: 0; vertical-align: middle;" alt="Indeed job search"></a></span>
  <hr>
 `
}
const apiKey = 'AIzaSyBqQuVR-yPbssBz6MbFl09CGnycKTPJTas';
var map, infoWindow, pos, marker, destination, origin, latitude, latitude, Popup, popup, infowindow, roamMarker, globalViewPort, globalAddress;
var optionDirections, opened = false;
var markers = [];

// NEW LOCATION
function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}

// Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    markers = [];
  }
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
  console.log(position);
  pos = {
    // lat:position.coords.latitude,
    lat: -36.87112197015861, 
    lng: 174.77266114540453
    // lng:position.coords.longitude,
  }
  $(".button-center, .center").on('click', function() {
    newLocation(pos.lat, pos.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'Hello World!'
    });
  })
});

function initMap() {

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };

  if (optionDirections) {
    document.getElementById('map').addEventListener('click', onChangeHandler);
  }

    map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 5,
    zoomControl: false,
    scaleControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    disableAutoPan: true,
    gestureHandling: 'cooperative',
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });

  var opt = { minZoom: 6, maxZoom: 15 };
  map.setOptions(opt);


  function goToLocation(location) {
    map.setCenter(location);
    // map.setOptions({zoom:14});
  }

  directionsDisplay.setMap(map);
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');
  var types = document.getElementById('type-selector');
  var strictBounds = document.getElementById('strict-bounds-selector');
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
  var autocomplete = new google.maps.places.Autocomplete(input);
  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29),
    icon: image
  });


  autocomplete.addListener('place_changed', function () {
    marker.setVisible(true);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    // If the place has a geometry, then present it on a map.
    $("#search-map").on('click', function () {
    $("#input-div").addClass('hide');
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(14);  // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    console.log(place.geometry.viewport.ga.j, place.geometry.viewport.ma.j);
    marker.setVisible(true);
    });

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
    console.log(place)
    $(".description").hide();
    var contentString = `<div id="content">
      <h2>${place.name}</h2>
      <h3 style="width: 250px;">${place.formatted_address}</h2>
      <p><a href="${place.url}" target="_blank" rel="nofollow">View on google maps</a></p>
    </div>;`
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
  });

  function addContentToAMarkerAndClickEvent(marker, infowindow) {
    var infowindow = new google.maps.InfoWindow({
      content: infowindow
    });
        infowindow.close();
    marker.addListener("click", function() {
        $(".gm-style-iw.gm-style-iw-c").hide();
        infowindow.open(map, marker);
    });
  };

  //Add listener
  google.maps.event.addListener(map, "click", function (event) {
    latitude = event.latLng.lat();
    longitude = event.latLng.lng();
    console.log( latitude + ', ' + longitude );
    goToLocation({'lat':latitude, 'lng':longitude})
    destination = {lat: latitude, lng: longitude};
    console.log(event);
  });

  var geocoder = new google.maps.Geocoder();

  google.maps.event.addListener(map, 'click', function (event) {
    geocoder.geocode({
      'latLng': event.latLng
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          console.log('%c Results from the geocoder!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
          console.log(results);
          globalViewPort = results[0].geometry.viewport.ga.j + ', ' + results[0].geometry.viewport.ma.j;
          globalAddress = results[0].formatted_address;
          addMarker(event.latLng);
        }
      }
    });
  });


  function addMarker(location) {
    var marker = new google.maps.Marker({
      position:location,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: image,
    });
    var infowindow = new google.maps.InfoWindow({
      content: `
      <div style="text-align:center">
      <p>${globalAddress}</p>
      <button class="apply" onClick="funct()">Zoom</button>
      </div>`
    });
    infowindow.open(map, marker);
    clearMarkers();
    markers.push(marker);
  }

  // CALL ALL AGENCIES HERE FOR GLOBAL VARIABLE
  var markerParnell, littleGiant, sevenGlyphs2, roamMarker, satchiMarker;
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var infoIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANQSURBVGiB3ZrNax1VGIefd7zaVEFj/Fi4iQqKbREsCn4tdGGlbqwURBAExYXuCgXRKtiFRBH8A6pFhYKLUtGdCzUoWkEQRKJtxNJQP4q21RRiWxLQPC5m7jXe5MZk7pl7jA8MzMy9931/vzPnzMx5z4X/CZEiiHohcDNwO3AjcC1wDTDU9dVZYKravgQ+BiYiYj6FjlqoLXWbul89Z31OqnvVrWoxSAPD6rPqj32I78VRdad6UZMG1qvPqdMNGOjmuPq4qa+QukU9NgAD3Xylbk5hINRd6p8ZTLQ5qz7Uj4mWui+jgYXMq7vrmBhS38ssfiledaXjxrI7/VeuxFK8uFIju3Mr/Rfm1Ye7dUeXibuBcWBwD6Z6nANuiogj7RMdI+oQMAFclzDhKeCHan8UuDxh7PGIuGfRWfWpBrrBkwviP9FA/Afa8YsqycXAroSt1dHfYz8VL1ndxdpj4VHg0gYSRY/9VNwA3NsJrh4GNjSQ6HS1AQwDIw3keDcitoe6ATjcQIJBMQtcVlBdmjXMEHBXAdySW0kCbi2ATQ0m2EM5LkaA5xvMs6kFXNVgghMRcRpAPdFgntECuKTBBINiuABauVUkYF0BzORWkYCZAvgtt4oETBfAt7lVJGCyAA7lVpGAQwXwQW4VCfiwAD4Dfs+tpA++j4jJIiLmgH251fTBm/D3fOQ1mpn4NM0fwOtQGYmICeDtnIpqsicifoJ/VkteoHS4VjgDjLUPOq8nEfG1OgasvjTZm8fUjdX+9QnjAjwTEb+0D7rrWucDHwF3Jk6amnFgS0R0xvWigoA6AnxO2vpWSr4DbmtPD9osqihGxDSwDWhy/lCXk8D2bhOwTImm6tuf0kzlow7HKbvT5FIfLlfjnQGaW8tbHZ8Am3uZgOWNPA2sSy5p9bwB3BcRp1b9S/VBy/J9TqbUrbXtW653n81o4FfLJer6vUF9RJ3LZOALyyXp9f0YOE99ZcDCf1bfUXeoV9cWXxHqBcAB4P4+4hwE9lZxrqB8HRmlvOu1W3iGct5zFJiKiLTPKfXlmi16TB2zLIJnp0X5j56VcgR4H9gPHFz4rpMd9Q71gDrb1eJz6jfqW5aDcDS31uVYuBgawJWU/foMMB0Ra2Z+8hfHx2EcJcBVyAAAAABJRU5ErkJggg==';
  var designAgencyIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAmDSURBVHic5Zt7cFTVHcc/52w2ye4mm2wCpEkQyUODAyIVEUUoxA4+mE6VVqcwik59IHR0OsWOo9MxrsG2tlWZqVUQ39SOTB/iYyTajoSIiUYFBERB8iKQDa+8Nrt57p7TPzab12bDbrK7gfY7szN77z3nd37f7z33d879nXPh/xwi2g0cfXiaLS7RsEh4mYWkAC0KgAwgte8H0Nr3O4nQh1Ec1oIDnh7vJxc+Wd8STf+iIoDDPn0GWt6J5kbgUkCO0ZQC9iPEdu1VW7KfqD0cOS99iJgAevVc44mM1pVKsFagr4qU3cEQ6E81bMw8kbZVbN7dGxmb48RB+8x4m+pcC6wDpo3fpZBwVGv9VNbJtBfGK8S4BHDYc65DsRFE7njsjAPVGr02u7j2P2M1MCYBjv1qqkkmx/9JwC/GaiOCUAL9XJfUD+XY67rCrRy28w57/uUo9SZwcbh1o4zDWsuV2eur9oZTKSwBGopylgrENsASlmuxg0vBzVOLaz4KtULIw1NjUd6dAlHCuUseIElCSUNR3s9CrRBSD2goyr9JoP4JxI3ZtdjCo9E/yS6ufe9sBc8qgKNo+vUg3wOMEXEtdujR6B+dbYQYVYDj9tyLpaKSgSnr+YYWg5LzMp6oqg5WIGgMaLLnW6XiPc5f8gA2r1RvO+xZ5mAFggrQrdQznHtD3VgwC534dLCLIz4CDnveDShdEj2fYg+BuDazuLp0+PmAHnDkgfwElP5z1D2SBkxzlmOasxykIerNafSzevXcgEAeMKxZUtXPgYui5YgwJmKeuwLLgnswpGQCkHztg7grXqLjyzfRnu5oNT3T8b3mO4CXh/gz+ODIA/kJFpuqAqZGunVhTMQy/04sV9+FTJo0YhnlOoP701dwV76O7g17Wh8K6luk6aKZ9oM9/hNDeoA5Vd1GhMn3E19wN9KSPmpZmTSJ5KUPYVlwN+6Kl6MhxLQ01bUSeL3fv8FXHUW5e4E5kWgpHOLBoNxN0RBid1ZxzRX9fvr/HLPnzDYosW+81oXBiOn7t5C0aC2G1OzgBb0eOvZtAyEwXzZ6IPS2Hse1ayOde/+F9o4/ESS0nJW5vuogDBLAUZT7O+CRMRs1mrDMvwPLgnuQlrSg5bSnG/dnr+H+9BWU6wwAhpRMLAvuxXzFCkRcQtC6yt2Mu+Il3JVb0L2dY3UV0OuzimuLYKgA+/ElMMOCSEgiacHdmOfdflbiHV9uxV2+Ga/rNKbZPybpmtUAuMo307nvHQzWjFgJsSeruGYu9AnQ+Ej+ZG1UJwkjP9BP/MpVSLMtaLmRid9H3JShI63n1Hc+Ifa/iyF5SrSFUKo3fsrU3x9qEgCOorzloN8KpaYwGDFfsRLLwjUYrBmjNOGlY982XGV/wdvmCEp8ODynjuAqf8EnRGo2yT+4H9NlN48eI5wncO3aRMfuN8HrCYUGWuqbsu217xoA1i2xrRSwOJSKplnLSLnpSWRC0sgFlJeOr96i5e/307n/bRILCrH9dAPmuStCGg2kJZ3ES67DNPNGvG0OXB8/T+f+t5EJyRgzCkAEvr7IhCQSL16C5+R3eE4fCYUGUolDT3/cUhYHILUu0KH2fjlyWqC/q1e8iLf9lO+OL1xD3OT80OwOQ9zkfFKXP0XSwjW4PtlE67uP0F66YdRHQxhCz9doSQH0TYQ0YsxT3+HEzZffStLCNRhsF4zV5BAMF8L54W9xV7wYUowY3XHfdN8v2ZSw60eZ+HD4hUhe8stICZEBfVHfUZTbCqSE6oh53m24P3sVb3M98dPnk7LsMeIyCsJ1YFzwnDxM2/bH6amrJC7tQixX34X7s9fwNNWGaqIlq7gmzd8DgkS0ERo+XYVz++P9x4kzlsacPEBcRgGJM5bSU1eJp/kobe8/Fq6JZACpJ35lZ0IhBWjANdGOTADaYSAIthNiDBgLTm1YjO5uDzif8fAedE8PTatW9Z8TCQmkb9kSLVcGwwkDApwiCkkQP3SXE9XlDHJRo9sHidMdtYzQcJwCf05QcChWrZ47EIegTwChiPjWk3Mf6jD4Z4JCHPDFwthDJCSQvnXrwLGIzaCkJQegT4Bu6S1NUNILRD8/PQKk1RrrJj2mTlEGfY9Ajr2uFRh3Ouw8wp60P9S0wdCFkQ8nyJmYQws+8P/vF8ArxStMVCCILbQU6lX/Qb8AF9irq4DyCXEpttiVaa+r8x8MT69siq0vsYfWYuPg4yFjjr4VQ+Mlud8QxrK4MJoQcfGjllFdTtCBT5c0jW/2rT094SZDD2bKmtnCjvKfCBh0HUV594H+n+sJe5pMbP4uvd7Za7CAqBdCP1paWvp+gADajmxUuRXA/AnwMyrYftzKGzWBqXutxbKRN0g8mjcXoSuZoIlRJOEnr4HmRSm48k0kf9NBWqUTrfl8xC0yWeurdyP0czH2NeIYTP5MYSrOmRZUgqR9lm+roxBcEnSPUGZj2q+Bihj5GnGUNAwl7yoY2CeV9G0HAFrz7ahvHsfsefkGpb9ggneKHWgxsa3eSmOHkUxzL8unObnUFjz6lzRY+Wu1DS3h9A/TcOcl9l+zfu0mvbwN9CgxYDAa7TlXaiU+IozEaSTxVbOJP34dmLW/PbeFZVMDkyz95Am888mHOkjf2YoAtGZdWVnphrPuFc60136ukbcDoS26RRj/qPN1vuarrNTdm0nTNSlo4I0aGyUNQ98iSxqsvBEGeQhxs3R2cdU7Cm6gL5EYSzR2+pbi2mdZ0AaB81ILTUtSfSJU2/igIRkYIK8InTyEMcw9U9ZS+2ChbRea5YApIuxCwOdnzLT2GFBmA91TfDPOnklGPEkGTHVdHGgxUe+O54MGa9jkIcyvubLsNZ8oKWcTw5emW6a3ApBW3ob1oLv/vGuGmTNLbSgJX5wxoyScXpo2hLz1azeTyoKThzFMdJ7Z2excMzv9bwkmlQJiHlFeWMk0ebDFK/Y2JWI61o0yyYGekGakN9WI+WhX0GivFUoIvbqsbOfzI9kfl/PHH825TArxHHDNeOyEgh2Nybx8xIZCBHRzY7uX3uSBe+nv9miUEPq+nTt3vhTM7rjvnrYjT6i8VRr9G6K4wxQGRNBC0LQwBefMwI9Xht35UclDJD+c9L1Kr9CI+6P54eSzhyYfLD9puUtI5HARwiXvsxkFRPvT2cWLr70X9CYEsnlRCu0zzL4XHN8ML2TycB5/PF1YWLhOawK+AwgW7YPhvF4aLywsvF5r7MAc0HullPYdO3b8Oxwb/wV4/RE5+YJyYQAAAABJRU5ErkJggg==';
  var littleGiantIcon = '../img/littleGiant.png';
  var sevenGlyphsIcon = "../img/7glyphs.png";
  var roamLogo = '../img/roam-logo.jpg';
  var saatchiLogo = '../img/satchi.png';
  var happyCentroIcon = '../img/happycentro.jpg';
  var eventFindaIcon = '../img/eventfinda.png';
  // ======================================================== ICONS ====================================================================================
  // ======================================================== MARKERS ====================================================================================
  function addMarkerIno(nameOfMarker, pos, title, icon, content, size) {
    var nameOfMarker;
        nameOfMarker = new google.maps.Marker({
        position: pos,
        map: map,
        animation: google.maps.Animation.DROP,
        title: title,
        optimized: false,
        icon: {
          url: icon,
          scaledSize: size
        },
      });
      addContentToAMarkerAndClickEvent(nameOfMarker, content)
  }

  addMarkerIno(littleGiant, locations.littleGiant.pos, 'Happy Centro City Centre', happyCentroIcon, locations.littleGiant.content, new google.maps.Size(30, 30));
  addMarkerIno(markerParnell, locations.parnell.pos, 'Information Parnell', infoIcon, locations.parnell.content, new google.maps.Size(30, 30))
  addMarkerIno(roamMarker, locations.happyCentroChristchurch.pos, 'Happy Centro Christchurch', happyCentroIcon, locations.happyCentroChristchurch.content, new google.maps.Size(30, 30))
  addMarkerIno(satchiMarker, locations.infoTauranga.pos, 'Information Tauranga', infoIcon, locations.infoTauranga.content, new google.maps.Size(30, 30));
  addMarkerIno(satchiMarker, locations.newPlymouthNews.pos, 'Informatin New Plymouth', infoIcon, locations.newPlymouthNews.content, new google.maps.Size(30, 30));

  addMarkerIno(satchiMarker, locations.wellington.pos, 'HappyCentro Wellington', happyCentroIcon, locations.wellington.content, new google.maps.Size(30, 30));
  addMarkerIno(satchiMarker, locations.christchurchJobs.pos, 'Information Christchurch', infoIcon, locations.christchurchJobs.content, new google.maps.Size(30, 30));
  addMarkerIno(satchiMarker, locations.eventFindaCity.pos, 'Eventfinda City Centre', eventFindaIcon, locations.eventFindaCity.content, new google.maps.Size(50, 50))
  addMarkerIno(satchiMarker, locations.eventFindaPlymouth.pos, 'Eventfinda New Plymouth', eventFindaIcon, locations.eventFindaPlymouth.content, new google.maps.Size(50, 50));
  addMarkerIno(satchiMarker, locations.queensTown.pos, 'Eventfinda Queenstown', eventFindaIcon, locations.queensTown.content, new google.maps.Size(50, 50));


  
  if (localStorage.getItem('Disabled') == 'true') {
    $(".disable a").text('Enable drag');
    $(".disable span i").css('color', '#e34141');
    map.setOptions({
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    });
  } else {
    $(".disable a").text('Disable drag');
    $(".disable span i").css('color', 'white');
    map.setOptions({
      draggable: true,
      zoomControl: true,
      scrollwheel: true,
      disableDoubleClickZoom: false
    });
  }


  
    // ADD MARKER TO THE CENTER, AND A CONTENT 
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: -36.87112197015861, 
          lng: 174.77266114540453
        };

        console.log(pos);
        origin = pos;
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Hello World!',
          animation: google.maps.Animation.DROP,
        });

        var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">You are here, please check on your circle!</h1>' +
        '<div id="bodyContent">'
        '</div>' +
        '</div>';
    
        var infowindowYouAreHere = new google.maps.InfoWindow({
        content: contentString
        });
    
        marker.addListener('click', function() {
        infowindowYouAreHere.open(map, marker);
        });
        
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }
    $('.zoom-in a').text('Zoom in (Current level: ' + map.getZoom() + ')');
    $('.zoom-out a').text('Zoom Out (Current level: ' + map.getZoom() + ')');
  }

// CLOSE THE INPUT POPOUT
function closeOrOpen(classOrId, visibleOrNot) {
  $(classOrId).on("click", function() {
    var input = document.getElementById("input-div");
    input.style.visibility = visibleOrNot;
    $(input).toggleClass('hide');
  });
};

closeOrOpen(".close", 'hidden');
closeOrOpen(".button-search", "visible");
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: origin,
    destination: destination,
    travelMode: 'WALKING'
  }, function(response, status) {
    if (status === 'OK') {
      console.log(response);
      console.log(response.routes[0].legs[0].end_address)
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

function funct() {
    map.setOptions({
      zoom: 14
    });

}

$(".sidebarIconToggle").on('click', function() {
  localStorage.setItem('Clicked', false);
})
$(".hide-sidebar").on('click', function() {
  localStorage.setItem('Clicked', true);
})

function hide() {
  if (localStorage.getItem('Clicked') == "true") {
    $("#sidebarMenu").css('display', 'none');
    $(".hide-sidebar a").text('Show sidebar');
    $(".hide-sidebar span i").remove();
    $(".hide-sidebar span").append('<i class="fas fa-stream"></i>')
  } else {
    $("#sidebarMenu").css('display', 'flex');
    $(".hide-sidebar a").text('Hide sidebar');
    $(".hide-sidebar span i").remove();
    $(".hide-sidebar span").append('<i class="fas fa-times"></i>')
  }
}
$(".zoom-in").on('click', function() {
  var newZoom = map.getZoom();
  newZoom = newZoom + 1;
  map.setZoom(newZoom);
  $('.zoom-in a').text('Zoom in (Current level: ' + map.getZoom() + ')');
  $('.zoom-out a').text('Zoom Out (Current level: ' + map.getZoom() + ')');
})

$(".zoom-out").on('click', function() {
  $('.zoom-in a').text('Zoom in');
  var newZoom = map.getZoom();
  newZoom = newZoom - 1;
  map.setZoom(newZoom);
  $('.zoom-in a').text('Zoom in (Current level: ' + map.getZoom() + ')');
  $('.zoom-out a').text('Zoom Out (Current level: ' + map.getZoom() + ')');
})

$('.zoom-out, .zoom-in').on('click', function() {
  if (map.getZoom() == 6) {
    $(".zoom-out span i").css('color','#e34141');
  } else {
    $(".zoom-out span i").css('color','white');
  }
  if (map.getZoom() == 15) {
    $(".zoom-in span i").css('color','#e34141');
  } else {
    $(".zoom-in span i").css('color','white');
  }
})


// global variables for only this kind of function - hide etc
var disabled = false;
var informationHidden = !informationHidden;
// TOGGLE HAPPYCENTRO AGENCIES
function toggleAgencies() {
    for (var i = 0; i < $("img").length; i++ ){
      if ($("img")[i].src.includes('happy') && $("img")[i].style.height == '30px') {
        if (localStorage.getItem('AgenciesHidden') == 'true') {
          $("img")[i].style.visibility ='visible';
          $(".agencies a").text('Agencies - Visible')
          $(".agencies span i").css('color', 'white');
           localStorage.setItem('AgenciesHidden', false);
          } else {
          $("img")[i].style.visibility ='hidden';
          $(".agencies a").text('Agencies - Hidden')
          $(".agencies span i").css('color', '#e34141');
          localStorage.setItem('AgenciesHidden', true);
        }
      }
    }
}

function toggleEvents() {
  for (var i = 0; i < $("img").length; i++ ){
    if ($("img")[i].src.includes('event') && $("img")[i].style.height == '50px') {
      if (localStorage.getItem('EventsHidden') == 'true') {
        $("img")[i].style.visibility ='visible';
        $(".events a").text('Events - Visible')
        $(".events span i").css('color', 'white');
        localStorage.setItem('EventsHidden', false);
        } else {
        $("img")[i].style.visibility ='hidden';
        $(".events a").text('Events - Hidden')
        $(".events span i").css('color', '#e34141');
        localStorage.setItem('EventsHidden', true);
      }
    }
  }
}



function toggleInformation() {
  for (var i = 0; i < $("img").length; i++ ){
    if ($("img")[i].src.includes('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD') && $("img")[i].style.height == '30px') {
      if (informationHidden == true && localStorage.getItem('InformationHidden') == 'true') {
        $("img")[i].style.visibility ='visible';
        $(".jobs a").text('Jobs - Visible')
        $(".jobs span i").css('color', 'white');
        } else {
        $("img")[i].style.visibility ='hidden';
        $(".jobs a").text('Jobs - Hidden')
        $(".jobs span i").css('color', '#e34141');
      }
    }
  }
  informationHidden = !informationHidden;
  localStorage.setItem('InformationHidden', informationHidden);
}


$('.more-settings').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass('two');
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('.button-log-in, .log-in').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container-log-in').removeAttr('class').addClass('two');
  $('body').addClass('modal-active');
})
$('.close-modal').click(function () {
  $("#modal-container-log-in").addClass('out');
  $('body').removeClass('modal-active');
});

$(".disable").on('click', function() {
  disabled = !disabled;
  if (disabled == true) {
    localStorage.setItem('Disabled', true);
    $(".disable a").text('Enable drag');
    $(".disable span i").css('color', '#e34141');
    map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
  } else {
    localStorage.setItem('Disabled', false);
    $(".disable a").text('Disable drag');
    $(".disable span i").css('color','white');
    map.setOptions({draggable: true, zoomControl: true, scrollwheel: true, disableDoubleClickZoom: false});
  }
})


$(".button-login").on('click', function() {
  if ($('.input-login[type="text"]').val() == "erindhox" && $('.input-login[type="password"]').val() == "erindhox") {
    alertify.dialog('alert').set({transition:'zoom',message: 'Transition effect: zoom'}).show(); 
    location.href = 'adminPanel.html';
  }
})

