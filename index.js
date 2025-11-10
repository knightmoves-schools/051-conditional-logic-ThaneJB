var oldEnough = true;


function validateAge(oe = oldEnough) {
 if (oe) {
    document.getElementById("result").innerHTML = "old enough";
  }
}

validateAge();

