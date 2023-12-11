import { msg1 } from "../two/third.js";
import { alertjs  } from "./second.js";


document.getElementById('doit').onclick = function(){
  alertjs(msg1)
}
/*
document.getElementById('doit').onclick = function(){
  alertjs(msg2)
}
*/