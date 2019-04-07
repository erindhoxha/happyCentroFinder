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
var contentAddMarker = `
<div class="row">
<div class="col-lg-6 pt-4 pl-4">
  <h3>Hi, erindhox. Welcome to the add marker panel.</h3>
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
</div>
`;

$(".add-marker").on('click', function() {
  $(".container-fluid").empty();
  $('.container-fluid').append(contentAddMarker);
})