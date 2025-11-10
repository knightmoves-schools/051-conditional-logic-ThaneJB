var oldEnough = false;


function validateAge(oe = oldEnough) {
 if (oe) {
    document.getElementById("result").innerHTML = "old enough";
  }
}

validateAge();

