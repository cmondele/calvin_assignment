
function myGreater() {
  var text = "";
  var i;
  for (i = 0; i < 5; i++) {
    if (i === 3) {
      continue;
    }
    text = "Yes you are right, 5 is greater than 3"}
  document.getElementById("great").innerHTML = text;
}

function myCat() {
    var cat = ["water ",  "meat ", "milk"];
    var text = "";
    var i;
    for (i = 0;; i++) {
      if (i == 3) {
        break;
      }
      text += cat[i];
    }
  
    document.getElementById("animal").innerHTML = text;
  }

  function myBlackCat() {
    var animal =
    document.getElementById("myBlackCat").value; 
  
   var text;
   if (animal === "cat") {
    text = " Good job!";
    
  } else {
    text = "You Wrong!";
  }
  document.getElementById("demo").innerHTML = text;
}