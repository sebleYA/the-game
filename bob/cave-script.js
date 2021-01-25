var myimages = ["images/testpattern.jpg", "images/wandavision.jpg", "images/mando.jpg", "images/doom-patrol-show.jpg", "images/sabrina.jpg"];

var currentImage = 0;

document.getElementById("demo").setAttribute("src",myimages[0]);

function buildImages() {
    for (var i = 0; i < myimages.length; i++) {
       document.getElementById("thepic").src=images[i++];
   }
}

function goHigher() {
  currentImage++;
  currentImage = currentImage%5;
  document.getElementById("demo").setAttribute("src",myimages[currentImage]);
}

function goLower() {
  currentImage--;
  if(currentImage<0){currentImage=4;}
  else{currentImage = currentImage%5;}
  document.getElementById("demo").setAttribute("src",myimages[currentImage]);
}

