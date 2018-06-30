// $.ajax({
//   type: 'GET',
//   url: '/my/url',
//   success: function(resp) {
//
//   },
//   error: function() {
//
//   }
// });

// function pokeSubmit(){
//     var param = document.getElementById("pokeInput").value;
//     var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
//
//     // new URL for 3rd GET request
//     var pokeURL2 = "http://pokeapi.co/api/v2/pokemon/" + param;
//
//     $.getJSON(pokeURL, function(data){
//         console.log(data);
//         var pokeID = data.national_id;
//         var pokeName = data.name;
//         var pokeType1 = data.types[0].name;
//         if (data.types.length == 2) {
//             var pokeType2 = data.types[1].name;
//         }
//         else var pokeType2 = null;
//         var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
//         var pokeDescription = "";
//
//         $.getJSON(descriptionURI, function(data2){
//             console.log(data2);
//             pokeDescription = data2.description;
//         });
//
//         // 3rd GET request to get an image
//         $.getJSON(pokeURL2, function(data3){
//             console.log(data3);
//             console.log(JSON.stringify(data, null, "  "));
//
//             console.log("Number: ", pokeID);
//             console.log("Name: ", pokeName);
//             console.log("Type 1: ", pokeType1);
//             console.log("Type 2: ", pokeType2);
//             console.log("Description URI: ", descriptionURI);
//             console.log("Description: ", pokeDescription);
//
//         });
//
//     });	// 2nd and 3rd GET requests are nested in success function of 1st GET request
// }
document.querySelector("select").onchange = makeReq;

function makeReq(){

  // var  = document.getElementById("squirt").value;
  //
  // var  = document.getElementById("char").value;
  //
  // var  = document.getElementById("bulb").value;

  var pokemon = document.getElementById("choose").value;

  var request = new XMLHttpRequest();
  request.open('GET', '/api?pokemon='+ pokemon, true);

    console.log(pokemon);

  request.onload = function() {

      console.log("works")

      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data)

        // let img = document.createElement('img')
        // img.src = data.img;
        // document.appendChild(img);
        // document.getElementsByTagName("img").getAttribute(data.img);
        // document.getElementById("pokemon").appendChild(img);
        document.getElementById("pokemon").src = data.img
        document.getElementById("pokemonName").innerHTML = data.name;
        document.getElementById("pokemonType").innerHTML = data.type;
        document.getElementById("pokemonDescription").innerHTML = data.description;

      } else {
        // We reached our target server, but it returned an error


      }
    };

    request.onerror = function(er) {
      console.log(er);
      // There was a connection error of some sort
    };

    request.send();
}
