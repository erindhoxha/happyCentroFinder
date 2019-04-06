var date = new Date();
var dateNow = date.getFullYear();

var locations = {
  infoTauranga: {
    content: '<h1 class="title">Jobs currently at: Tauranga</h1>',
    pos: { lat: -37.6905593802915, lng: 176.16405071970848 }
  },
  littleGiant: {
    content: `
    <div style="text-align:center; max-width:230px;">
    <img style="width:50%;" src="../img/happycentro.jpg">
    <h1 class="title">Happycentro City Centre</h1>
    <a href="www.happycentro.com target="_blank" rel="nofollow"><h3>www.happycentro.com</h3></a>
    <p class="description"> HappyCentro is a full service digitally - led agency in Auckland, New Zealand.We transform brands, engage customers and grow businesses.</p>
    <a href="www.happycentro.com/jobs rel="nofollow" >
    <p>Careers</p></a>
    <button class="goTo">Find route</button>
    </div>
    `,
    pos: { lat: -36.8482384548642, lng: 174.76633429527283 }
  },
  wellington: {
    content: `
    <div class="happycentro">
    <div style="text-align:center; max-width:230px;">
    <img style="width:50%;" src="../img/happycentro.jpg">
    <h1 class="title">Happycentro Wellington</h1>
    <a href="www.happycentro.com target="_blank" rel="nofollow"><h3>www.happycentro.com</h3></a>
    <p class="description"> HappyCentro is a full service digitally - led agency in Auckland, New Zealand.We transform brands, engage customers and grow businesses.</p>
    <a href="www.happycentro.com/jobs rel="nofollow" >
    <p>Careers</p></a>
    <button class="goTo">Find route</button>
    </div>
    </div>
    `,
    pos: {lat: -41.3105186555517, lng: 174.7804648191384}
  },
  // EVENTFINDA CITY CENTER
  eventFindaCity: {
    content: `
    <div style="text-align:center; max-width:230px;">
    <img style="width:50%;" src="../img/eventfinda.png">
    <h1 class="title">Designers Conference ${dateNow} </h1>
    <a href="www.happycentro.com target="_blank" rel="nofollow"><h3>www.eventfinda.com</h3></a>
    <p class="description">NZ Events. What's on in New Zealand with Eventfinda, the guide to events in NZ - concerts, gigs, festivals, conferences, expos, theatre & sports in Auckland...</p>
    <a href="www.happycentro.com/jobs rel="nofollow" >
    <p>Events today: </p></a>
    <button class="goTo">Find route</button>
    </div>
    `,
    pos: { lat: -36.8478946802915, lng: 174.74209111970845 }
  },
  eventFindaPlymouth: {
    content: `
    <div style="text-align:center; max-width:230px;">
    <img style="width:50%;" src="../img/eventfinda.png">
    <h1 class="title">Eventfinda New Plymouth</h1>
    <a href="www.happycentro.com target="_blank" rel="nofollow"><h3>www.eventfinda.co.nz</h3></a>
    <p class="description">NZ Events. What's on in New Zealand with Eventfinda, the guide to events in NZ - concerts, gigs, festivals, conferences, expos, theatre & sports in Auckland...</p>
    <a href="www.happycentro.com/jobs rel="nofollow" >
    <a href="www.happycentro.com/jobs rel="nofollow" >
    <p>Events today: </p></a>
    <button class="goTo">Find route</button>
    </div>
    `,
    pos: { lat: -39.2273694, lng:173.85180020000007 }
  },
    //  one in rome 41.87527938233829, 12.553030471353736
    queensTown: {
      content: `
      <div style="text-align:center; max-width:230px;">
      <img style="width:50%;" src="../img/eventfinda.png">
      <h1 class="title">Eventfinda Queenstown</h1>
      <a href="www.happycentro.com target="_blank" rel="nofollow"><h3>www.happycentro.com</h3></a>
      <p class="description">NZ Events. What's on in New Zealand with Eventfinda, the guide to events in NZ - concerts, gigs, festivals, conferences, expos, theatre & sports in Auckland...</p>
      <a href="www.happycentro.com/jobs rel="nofollow" >
      <p>Events today: </p></a>
      <button class="goTo">Find route</button>
      </div>
      `,
      pos: { lat: -44.72457424179177, lng: 168.8155284953457 }
    },
  happyCentroChristchurch: {
    content: `
    <div style="text-align:center; max-width:230px;">
    <img style="width:50%;" src="../img/happycentro.jpg">
    <h1 class="title">Happycentro Christchurch</h1>
    <a href="www.happycentro.com target="_blank" rel="nofollow"><h3>www.happycentro.com</h3></a>
    <p class="description"> Happy centro is a full service digitally - led agency in Auckland, New Zealand.We transform brands, engage customers and grow businesses.</p>
    <a href="www.happycentro.com/jobs rel="nofollow" >
    <p>Careers</p></a>
    <button class="goTo">Find route</button>
    </div>
    `,
    pos: { lat: -43.55239648029149, lng: 172.61188791970847 }
  },
  parnell: {
    pos: { lat: -36.85532372663045, lng: 174.77961434494 },
    content: '<h1 class="title">Jobs currently at: Design Agency Parnell</h1>'
  },
  newPlymouthNews: {
    content: '<h1 class="title">Jobs currently at: New Plymouth</h1>',
    pos: { lat: -39.0598644802915, lng: 174.0681638197085 }
  },
  christchurchJobs: {
    content: '<h1 class="title">Jobs currently at: Christchurch</h1>',
    pos: { lat: -43.31125543528833, lng: 171.90920723680938 }
  },
};