$(".img-logo").fadeIn(1500);

$(document).ready(function() {
  setTimeout(() => {
    $("#loading-div").fadeOut(700);
  }, 1000);
}) 

$(".button-log-in").on('click', function() {
  alertify.confirm('Log out?', 'Are you sure you want to log out?', function(){ 
    location.href = 'index.html';
  }
  ,function(){ 
    // do nothing
  });
})

// ================================== CONTENTINFO ================================================== //

var contentInfo = `<div class="row">
<div class="col-lg-6 pt-4 pl-4">
  <h3>Hi, erindhox. Welcome to the admin panel.</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatem magni ipsum maiores, nesciunt repudiandae quo, voluptas molestias quam, voluptatibus qui iste dolorum. Culpa, nobis. Voluptatum accusamus consequatur laboriosam! Id adipisci, amet, perferendis recusandae culpa, ratione facilis tempora debitis voluptates temporibus omnis eaque minima? A atque itaque corporis quod iusto?</p>
  <hr>
  <h4 class="mt-3 mb-2">Steps to start with your admin panel:</h4>
  <ol class="list-steps">
    <li>
        Open the <a href="#" class="sidebar-open">sidebar </a><i class="fas fa-map-marker-alt"></i>
    </li>
    <li>
        Create your own marker <i class="fas fa-map-marker-alt"></i>
    </li>
    <li>
        Add it while pressing confirm <i class="fas fa-map-marker-alt"></i>
    </li>
    <li>
        Wait about 10 seconds until the server loads the icon <i class="fas fa-map-marker-alt"></i>
    </li>
  </ol>
<hr>
  <h4>Still need help? Check the FAQs</h4>
    <!-- FIRST ACCORDION -->
  <p>
      <a class="" data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="false" aria-controls="collapseOne">
        How do I add a marker?
      </a>
    </p>
    <div class="collapse" id="collapseOne">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
    <!-- Second ACCORDION -->
    <a class="" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
        How do I remove a marker?
      </a>
    </p>
    <div class="collapse" id="collapseTwo">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
    <!-- Third ACCORDION -->
    <a class="" data-toggle="collapse" href="#collaseThree" role="button" aria-expanded="false" aria-controls="collaseThree">
        How do I report a bug?
      </a>
    </p>
    <div class="collapse" id="collaseThree">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
    <!-- Fourth ACCORDION -->
    <a class="" data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">
        How can I contact you?
      </a>
    </p>
    <div class="collapse" id="collapseFour">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>

</div>
<div class="col-lg-6 pt-4 pl-4 text-center">
  <img class="map-gif" src="img/mapGif.gif">
  </div>
</div>`;


$(".info-admin").on('click', function() {
  $(".container-fluid").empty();
  $('.container-fluid').append(contentInfo);
});
// ================================== CONTENTINFO ================================================== //


var infoIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANQSURBVGiB3ZrNax1VGIefd7zaVEFj/Fi4iQqKbREsCn4tdGGlbqwURBAExYXuCgXRKtiFRBH8A6pFhYKLUtGdCzUoWkEQRKJtxNJQP4q21RRiWxLQPC5m7jXe5MZk7pl7jA8MzMy9931/vzPnzMx5z4X/CZEiiHohcDNwO3AjcC1wDTDU9dVZYKravgQ+BiYiYj6FjlqoLXWbul89Z31OqnvVrWoxSAPD6rPqj32I78VRdad6UZMG1qvPqdMNGOjmuPq4qa+QukU9NgAD3Xylbk5hINRd6p8ZTLQ5qz7Uj4mWui+jgYXMq7vrmBhS38ssfiledaXjxrI7/VeuxFK8uFIju3Mr/Rfm1Ye7dUeXibuBcWBwD6Z6nANuiogj7RMdI+oQMAFclzDhKeCHan8UuDxh7PGIuGfRWfWpBrrBkwviP9FA/Afa8YsqycXAroSt1dHfYz8VL1ndxdpj4VHg0gYSRY/9VNwA3NsJrh4GNjSQ6HS1AQwDIw3keDcitoe6ATjcQIJBMQtcVlBdmjXMEHBXAdySW0kCbi2ATQ0m2EM5LkaA5xvMs6kFXNVgghMRcRpAPdFgntECuKTBBINiuABauVUkYF0BzORWkYCZAvgtt4oETBfAt7lVJGCyAA7lVpGAQwXwQW4VCfiwAD4Dfs+tpA++j4jJIiLmgH251fTBm/D3fOQ1mpn4NM0fwOtQGYmICeDtnIpqsicifoJ/VkteoHS4VjgDjLUPOq8nEfG1OgasvjTZm8fUjdX+9QnjAjwTEb+0D7rrWucDHwF3Jk6amnFgS0R0xvWigoA6AnxO2vpWSr4DbmtPD9osqihGxDSwDWhy/lCXk8D2bhOwTImm6tuf0kzlow7HKbvT5FIfLlfjnQGaW8tbHZ8Am3uZgOWNPA2sSy5p9bwB3BcRp1b9S/VBy/J9TqbUrbXtW653n81o4FfLJer6vUF9RJ3LZOALyyXp9f0YOE99ZcDCf1bfUXeoV9cWXxHqBcAB4P4+4hwE9lZxrqB8HRmlvOu1W3iGct5zFJiKiLTPKfXlmi16TB2zLIJnp0X5j56VcgR4H9gPHFz4rpMd9Q71gDrb1eJz6jfqW5aDcDS31uVYuBgawJWU/foMMB0Ra2Z+8hfHx2EcJcBVyAAAAABJRU5ErkJggg==';
var happyCentroIcon = '../img/happycentro.jpg';
var eventFindaIcon = '../img/eventfinda.png';

// ================================================= ADD MARKER ================================================================ //


var contentAddMarker = `
<div class="row">

<div class="col-lg-6 pt-4 pl-4">
  <h3>Hi, erindhox. Welcome to the add marker panel.</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatem magni ipsum maiores, nesciunt repudiandae quo, voluptas molestias quam, voluptatibus qui iste dolorum. Culpa, nobis. Voluptatum accusamus consequatur laboriosam! Id adipisci, amet, perferendis recusandae culpa, ratione facilis tempora debitis voluptates temporibus omnis eaque minima? A atque itaque corporis quod iusto?</p>
  <hr>
  <h4 class="mt-3 mb-2">Choose your marker:</h4>
  <select class="select-marker">
    <option>Agency</option>
    <option>Event</option>
    <option>Job</option>
  </select> <img class="img-right" src="../img/happycentro.jpg">
<hr>
<h4 class="mt-3 mb-2">Add location:</h4>
  <button class="add-manual">Add manually</button>
  <button class="add-automatic" data-toggle="modal" data-target="#exampleModal">Find it on map</button>

  <div class="add-manual-div mt-4" style="display:none">
    <label for="title-admin">Latitude</label><br>
    <input class="input-admin" type="text" name="title-admin" placeholder="e.g 37.7428445"><br>
    <label for="title-admin">Longitude</label><br>
    <input class="input-admin" type="text" name="title-admin" placeholder="e.g 184.5525923"><br>
  </div>
<hr>
  <h4 class="mt-3 mb-2">Add your content:</h4>
  <label for="title-admin">Add Title</label><br>
  <input class="input-admin" type="text" name="title-admin" placeholder="Title"><br>
  <label for="content-admin">Add Content</label><br>
  <textarea class="textarea-admin" type="text" placeholder="Enter content..."></textarea><br>
  <label for="link-admin">Add Link</label><br>
  <input class="input-admin" type="text" name="link-admin" placeholder="e.g www.littlegiant.co.nz"><br>
  <button class="add-marker-button">Add marker</button>
</div>
<div class="col-lg-6 pt-4 pl-4 text-center">
  <img class="map-gif" src="img/mapGif.gif">
  </div>
</div>
`;




$(".add-marker").on('click', function() {
  // EMPTY CONTAINER
  $(".container-fluid").empty();
  $('.container-fluid').append(contentAddMarker);
  $(".add-manual").on('click', function() {
    $('.add-manual-div').slideToggle();
  })
  $(".add-automatic").on('click', function() {
    // MAP RENDERED HERE
      console.log('clicked');
  })
  $(".select-marker").on('change', function() {
    console.log('Changed');
    switch($(".select-marker").val()) {
      case "Job":
      $(".img-right").attr('src', infoIcon)
      $(".img-right").css('height', '38px');
      break;
      case "Agency":
      $(".img-right").attr('src', happyCentroIcon)
      $(".img-right").css('height', '41px');
      $(".img-right").css('width', '44px');
      break;
      case "Event":
      $(".img-right").attr('src', eventFindaIcon)
      $(".img-right").css('height', '50px');
      $(".img-right").css('width', '52px');
      break;
    }
  })
})
// ================================================= ADD MARKER ================================================================ //





// ================================================= REMOVE MARKER ================================================================ //

