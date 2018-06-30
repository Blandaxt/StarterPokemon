const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // else if (page == '/otherpage') {
  //   fs.readFile('hi.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //     // otherpage
  //   });
  // }
  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // 'squirtle', 'bulbasaur'
  else if (page == '/api') {
      if('pokemon' in params){
        if(params['pokemon']== 'charmander'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          var objToJson = {
            img: "img/charmander.jpg",
            name: "Charmendar",
            type: "Fire Lizard",
            description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
          }
          res.end(JSON.stringify(objToJson));
        }
        if(params['pokemon']== 'squirtle'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          var objToJson = {
            img: "img/squirtle.png",
            name: "Squirtle",
            type: "Water turtle",
            description: "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds."
          }
          res.end(JSON.stringify(objToJson));
        }
        if(params['pokemon']== 'bulbasaur'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          var objToJson = {
            img: "img/bulbasaur.png",
            name: "Bulbasaur",
            type: "Poisonous grassy lizard",
            description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
          }
          res.end(JSON.stringify(objToJson));
        }//student = leon
        // else if(params['pokemon'] != 'charmander'){
        //   res.writeHead(200, {'Content-Type': 'application/json'});
        //   var objToJson = {
        //     name: "unknown",
        //     type: "unknown",
        //     description: "unknown"
        //   }
        //   res.end(JSON.stringify(objToJson));
        // }
        //student != leon
      }//student if
    }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/index.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/css/style.css'){
    fs.readFile('css/normalize.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  // else if (page == '/css/style.css'){
  //   fs.readFile('css/reset.css', function(err, data) {
  //     res.write(data);
  //     res.end();
  //   });
  // }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/img/charmander.jpg'){
     var img = fs.readFileSync('img/charmander.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');
  }
  else if (page == '/img/bulbasaur.png'){
     var img = fs.readFileSync('img/bulbasaur.png');
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');
  }
  else if (page == '/img/squirtle.png'){
     var img = fs.readFileSync('img/squirtle.png');
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');
  }
  else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
