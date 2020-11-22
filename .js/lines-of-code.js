function say(sa){
  JSON.stringify(sa)
  switch(sa){
    case "up":
      document.getElimentById("consol").innerHTML = "you exit the house, what next. movement=up,back"
    break;
  }
}
