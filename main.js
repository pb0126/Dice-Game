function result(){
  var num= 7;
  var res1= Math.floor(Math.random()*num);
  var res2=Math.floor(Math.random()*num);
  
  if(res1===0 || res2===0){
    arr1=0;
    arr2=0;
  }else{
    arr1=res1-1;
    arr2=res2-1;
  }
  document.getElementById("play").classList.add("hide");
  document.getElementsByClassName("dice-img")[arr1].style="display:block;";
  document.getElementsByClassName("dice2-img")[arr2].style="display:block;";
  document.getElementsByClassName("filler-img")[0].style="display:none;";
  document.getElementsByClassName("filler-img")[1].style="display:none;";
  

  if(res1>res2){
    document.getElementById("p1Result").innerHTML="Player 1 wins";
    document.getElementById("p2Result").innerHTML="Bad Luck!";
  }else if(res1==res2){
    document.getElementById("p1Result").innerHTML="Its a Tie";
    document.getElementById("p2Result").innerHTML="Its a Tie";
  }
  else{
    document.getElementById("p2Result").innerHTML="Player 2 wins";
    document.getElementById("p1Result").innerHTML="Bad Luck!";
  }
  setTimeout(() => {
    location.reload();
  }, 3000);
}

