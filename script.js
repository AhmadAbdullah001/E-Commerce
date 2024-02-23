
    let Eight=document.getElementById("Eight");
    let Ten=document.getElementById("Ten");
    // First Timer Variable Starts
    let D1=document.getElementById("D1")
    let H1=document.getElementById("H1")
    let M1=document.getElementById("M1")
    let S1=document.getElementById("S1")
    // First Timer Variable Ends
    // Second Timer Variable Starts here
    let D2=document.getElementById("D2")
    let H2=document.getElementById("H2")
    let M2=document.getElementById("M2")
    let S2=document.getElementById("S2")
    var C1=4,C2=8,C3=55,C4=42;
    var CT1=6,CT2=4,CT3=45,CT4=33;
    // Second Timer Variable Ends here
    function FirstTimer() {
  C4--;
  if (C4 == 0) {
    C4 = 60;
    C3--;
    if (C3 == 0) {
      C3 = 60;
      C2--;
      if (C2 == 0) {
        C2 = 60;
        C1--;
      }
    }
  }

  // Checking conditions for single digit display
  if (C1 < 10) D1.innerText = "0" + C1;
  else D1.innerText = C1;

  if (C2 < 10) H1.innerText = "0" + C2;
  else H1.innerText = C2;

  if (C3 < 10) M1.innerText = "0" + C3;
  else M1.innerText = C3;

  if (C4 < 10) S1.innerText = "0" + C4;
  else S1.innerText = C4;
}
setInterval(FirstTimer,1000)
function SecondTimer()
{
    CT4--;
  if (CT4 == 0) {
    CT4 = 60;
    CT3--;
    if (CT3 == 0) {
      CT3 = 60;
      CT2--;
      if (CT2 == 0) {
        CT2 = 60;
        CT1--;
      }
    }
  }

  // Checking conditions for single digit display
  if (CT1 < 10) D2.innerText = "0" + CT1;
  else D2.innerText = CT1;

  if (CT2 < 10) H2.innerText = "0" + CT2;
  else H2.innerText = CT2;

  if (CT3 < 10) M2.innerText = "0" + CT3;
  else M2.innerText = CT3;

  if (CT4 < 10) S2.innerText = "0" + CT4;
  else S2.innerText = CT4;      
}
setInterval(SecondTimer,1000)
    function Back()
    {
        Eight.scrollLeft=-2000;
    }
    function Forward()
    {
        Eight.scrollLeft=1220;
    }
    function Back1()
    {
        Ten.scrollLeft=-2000;
    }
    function Forward1()
    {
        Ten.scrollLeft=1220;
    }
    