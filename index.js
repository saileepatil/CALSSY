const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');


let string = "";

buttons.forEach((btn) => {
btn.addEventListener('click' , (e) => {
  if(e.target.innerText == '='){
 string = String(eval(string))
 inputBox.value = string
  }else if(e.target.innerText == 'AC'){
     string = "";
     inputBox.value = string
  }else if(e.target.innerText == 'DEL'){
  string = string.substring(0,string.length-1)
  inputBox.value = string
  }else if( e.target.id == 'plusMinus'){
      string = String (-eval(string))
  inputBox.value = string

  }
  
  else{
    string += e.target.innerText
    inputBox.value = string
  }
})
})
