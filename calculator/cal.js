const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const zero = document.getElementById('zero')
const clear = document.getElementById('clear')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const times = document.getElementById('times')
const divide = document.getElementById('divide')
const equal = document.getElementById('equal')

var limit = 19;
var operation = 1;
var value1 = 0;
var value2 = 10;
var state = 1;
var state2 = 01;
var digit = 1;
var digit2 = 1;
var first = 0;
var second = 0;
var final = 0;
var op = 0;

var d1 = ''
var d2 = ''
var d3 = ''
var d4 = ''
var d5 = ''
var d6 = ''
var d7 = ''
var d8 = ''
var d9 = ''
var d10 = ''
var d11 = ''
var d12 = ''
var d13 = ''
var d14 = ''
var d15 = ''
var d16 = ''
var d17 = ''
var d18 = ''
var d19 = ''

var ad1 = ''
var ad2 = ''
var ad3 = ''
var ad4 = ''
var ad5 = ''
var ad6 = ''
var ad7 = ''
var ad8 = ''
var ad9 = ''
var ad10 = ''
var ad11 = ''
var ad12 = ''
var ad13 = ''
var ad14 = ''
var ad15 = ''
var ad16 = ''
var ad17 = ''
var ad18 = ''
var ad19 = ''

function cpos(){
    if(operation == 1){
        ++digit
    }else if(operation == 0){
        ++digit2
    }
}
function fpos(data){
   
    if(operation == 1){
      
        if (digit == 1){
            d1 = data;
        }else if (digit == 2){
            d2 = data;
        }else if (digit == 3){
            d3 == data;
        }else if (digit == 4){
            d4 = data;
        }else if (digit == 5){
            d5 = data;
        }else if (digit == 6){
            d6 = data;
        }else if (digit == 7){
            d7 = data;
        }else if (digit == 8){
            d8 = data;
        }else if (digit == 9){
            d9 = data;
        }else if (digit == 10){
            d10 = data;
        }else if (digit == 11){
            d11 = data;
        }else if (digit == 12){
            d12 = data;
        }else if (digit == 13){
            d13 = data;
        }else if (digit == 14){
            d14 = data;
        }else if (digit == 15){
            d15 = data;
        }else if (digit == 16){
            d16 = data;
        }else if (data == 17){
            d17 = data;
        }else if (digit == 18){
            d18 = data;
        }else if (digit == 19){
            d19 = data;
        }
    }else if(operation == 0){
        if (digit2 == 1){
            ad1 = data;
        }else if (digit2 == 2){
            ad2 = data;
        }else if (digit2 == 3){
            ad3 = data;
        }else if (digit2 == 4){
            ad4 = data;
        }else if (digit2 == 5){
            ad5 = data;
        }else if (digit2 == 6){
            ad6 = data;
        }else if (digit2 == 7){
            ad7 = data;
        }else if (digit2 == 8){
            ad8 = data;
        }else if (digit2 == 9){
            ad9 = data;
        }else if (digit2 == 10){
            ad10 = data;
        }else if (digit2 == 11){
            ad11 = data;
        }else if (digit2 == 12){
            ad12 = data;
        }else if (digit2 == 13){
            ad13 = data;
        }else if (digit2 == 14){
            ad14 = data;
        }else if (digit2 == 15){
            ad15 = data;
        }else if (digit2 == 16){
            ad16 = data;
        }else if (digit2 == 17){
            ad17 = data;
        }else if (digit == 18){
            ad18 = data;
        }else if (digit2 == 19){
            ad19 = data;
        }
    }}





function total(){
    var yoo = new conclusion()
    document.getElementById('screen').innerHTML += yoo;
}
function add(){
    if(operation == 1){
        document.getElementById('screen').innerHTML += '<span>+</span>'
    }
}

plus.addEventListener('click', e =>{
    add();
})
plus.addEventListener('click', e =>{
    --operation;
}
 )

plus.addEventListener('click', e =>{
    op = 1;
})



function sub(){
    if(operation == 1){
        document.getElementById('screen').innerHTML += '<span>-</span>'
    }
}

minus.addEventListener('click', e =>{
    sub();
})
minus.addEventListener('click', e =>{
    op = 3;
})
minus.addEventListener('click', e =>{
    --operation;
}
 )

 function div(){
    if(operation == 1){
        document.getElementById('screen').innerHTML += '<span>÷</span>'
    }
}

divide.addEventListener('click', e =>{
    div();
})
divide.addEventListener('click', e =>{
    op = 4;
})
divide.addEventListener('click', e =>{
    --operation;
}
 )

 function mul(){
    if(operation == 1){
        document.getElementById('screen').innerHTML += '<span>x</span>'
    }
}

times.addEventListener('click', e =>{
    mul();
})
times.addEventListener('click', e =>{
    op = 2
})
times.addEventListener('click', e =>{
    --operation;
}
 )




function sevenDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>7</span>'
    }
    }

seven.addEventListener('click', e =>{
   sevenDigit();
}
 )

 seven.addEventListener('click', e =>{
    fpos('7')
    }
     )
     seven.addEventListener('click', e =>{
        cpos()
        }
         )
seven.addEventListener('click', e =>{
    --limit;
}
 )




 function eightDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>8</span>'
    }
    }
eight.addEventListener('click', e =>{
   eightDigit();
}
 )
 eight.addEventListener('click', e =>{
    fpos('8')
    }
     )
     eight.addEventListener('click', e =>{
        cpos()
        }
         )
eight.addEventListener('click', e =>{
    --limit;
}
 )

 function nineDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>9</span>'
    }
    }
nine.addEventListener('click', e =>{
   nineDigit();
}
 )
 nine.addEventListener('click', e =>{
    fpos('9')
    }
     )
     nine.addEventListener('click', e =>{
        cpos()
        }
         )
nine.addEventListener('click', e =>{
    --limit;
}
 )

 function fourDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>4</span>'
    }
    }
four.addEventListener('click', e =>{
   fourDigit();
}
 )
 four.addEventListener('click', e =>{
    fpos('4')
    }
     )
     four.addEventListener('click', e =>{
        cpos()
        }
         )
four.addEventListener('click', e =>{
    --limit;
}
 )

 function fiveDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>5</span>'
    }
    }
five.addEventListener('click', e =>{
   fiveDigit();
}
 )
 five.addEventListener('click', e =>{
    fpos('5')
    }
     )
     five.addEventListener('click', e =>{
        cpos()
        }
         )
five.addEventListener('click', e =>{
    --limit;
}
 )

 function sixDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>6</span>'
    }
    }
six.addEventListener('click', e =>{
   sixDigit();
}
 )
 six.addEventListener('click', e =>{
    fpos('6')
    }
     )
     six.addEventListener('click', e =>{
        cpos()
        }
         )
six.addEventListener('click', e =>{
    --limit;
}
 )

 function oneDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>1</span>'
    }
    }
one.addEventListener('click', e =>{
   oneDigit();
}
 )
 one.addEventListener('click', e =>{
    fpos('1')
    }
     )
    one.addEventListener('click', e =>{
        cpos()
        }
         )
one.addEventListener('click', e =>{
    --limit;
}
 )

 function twoDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>2</span>'
    }
    }
two.addEventListener('click', e =>{
   twoDigit();
}
 )
 two.addEventListener('click', e =>{
    fpos('2')
    }
     )
     two.addEventListener('click', e =>{
        cpos()
        }
         )
two.addEventListener('click', e =>{
    --limit;
}
 )

 function threeDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>3</span>'
    }
    }
three.addEventListener('click', e =>{
   threeDigit();
}
 )
 three.addEventListener('click', e =>{
    fpos('3')
    }
     )
     three.addEventListener('click', e =>{
        cpos()
        }
         )
         three.addEventListener('click', e =>{
            console.log(d1)
             }
              )
         three.addEventListener('click', e =>{
           console.log("man"+d2)
            }
             )
three.addEventListener('click', e =>{
    --limit;
}
 )

 function zeroDigit(){
    if(limit > 0){
        document.getElementById('screen').innerHTML += '<span>0</span>'
    }
    }
zero.addEventListener('click', e =>{
   zeroDigit();
}
 )
 zero.addEventListener('click', e =>{
    fpos('0')
    }
     )
zero.addEventListener('click', e =>{
    cpos()
}
 )


 

 


  function switching(){
    --state;
    ++state2;
  }
  function setting(){
if(state2 == 1){
           
              
                
                    d1 = d1;
              
                    d2 = d2;
              
                    d3 = d3;
               
                    d4 = d4;
           
                    d5 = d5;
               
                    d6 = d6;
             
                    d7 = d7;
       
                    d8 = d8;
         
                    d9 = d9;
            
                    d10 = d10;
       
                    d11 = d11;
         
                    d12 = d12;
           
                    d13 = d13;
          
                    d14 = d14;
        
                    d15 = d15;
     
                    d16 = d16;
       
                    d17 = d17;
           
                    d18 = d18;
           
                    d19 = d19;
                
  
      
                    ad1 = ad1;
    
                    ad2 = ad2;
          
                    ad3 = ad3;
          
                    ad4 = ad4;
        
                    ad5 = ad5;
         
                    ad6 = ad6;

                    ad7 = ad7;
   
                    ad8 = ad8;
      
                    ad9 = ad9;
       
                    ad10 = ad10;
       
                    ad11 = ad11;
          
                    ad12 = ad12;
    
                    ad13 = ad13;
     
                    ad14 = ad14;
         
                    ad15 = ad15;
         
                    ad16 = ad16;
       
                    ad17 = ad17;
 
                    ad18 = ad18;
   
                    ad19 = ad19;
                }
            
        
        }
        function adding(){
    
            first = Number(d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+d11+d12+d13+d14+d15+d16+d17+d18+d19);
            second = Number(ad1+ad2+ad3+ad4+ad5+ad6+ad7+ad8+ad9+ad10+ad11+ad12+ad13+ad14+ad15+ad16+ad17+ad18+ad19);
            final = first + second;
            return final;
        }
        
        function divving(){
            first = Number(d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+d11+d12+d13+d14+d15+d16+d17+d18+d19);
            second = Number(ad1+ad2+ad3+ad4+ad5+ad6+ad7+ad8+ad9+ad10+ad11+ad12+ad13+ad14+ad15+ad16+ad17+ad18+ad19);
            final = first / second;
            return final;
        }
        function multing(){
            first = Number(d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+d11+d12+d13+d14+d15+d16+d17+d18+d19);
            second = Number(ad1+ad2+ad3+ad4+ad5+ad6+ad7+ad8+ad9+ad10+ad11+ad12+ad13+ad14+ad15+ad16+ad17+ad18+ad19);
            final = first * second;
            return final;
         
        }
        

        function subbing(){
    
            first = (d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+d11+d12+d13+d14+d15+d16+d17+d18+d19);
            second = (ad1+ad2+ad3+ad4+ad5+ad6+ad7+ad8+ad9+ad10+ad11+ad12+ad13+ad14+ad15+ad16+ad17+ad18+ad19);
            final = parseInt(first - second);
            return first;
        }
        function conclusion(){
            if(op == 1){
                adding()
            }else if(op == 2){
                multing()
            }else if(op == 3){
                subbing()
            }else if(op == 4){
                divving()
            }
            return final;

        }
   
        clear.addEventListener('click', e =>{
            state2 = 2;
           }
           )
        clear.addEventListener('click', e =>{
            setting()
           }
           )
        
           clear.addEventListener('click', e =>{
            console.log("uo"+state2)
           }
           )
        
           clear.addEventListener('click', e =>{
            digit = 1
           }
           )
    
        equal.addEventListener('click', e =>{
            setting()
           }
           )
           equal.addEventListener('click', e =>{
           console.log("digit:"+digit2)
           }
           )
           equal.addEventListener('click', e =>{
            console.log("op:"+operation)
            }
            )
            equal.addEventListener('click', e =>{
                console.log("state:"+state2)
                }
                )
           equal.addEventListener('click', e =>{
            console.log("da:"+d2)
            }
            )
            equal.addEventListener('click', e =>{
                conclusion()
                }
                )
                equal.addEventListener('click', e =>{
                    console.log(final)
                    }
                    )
                    const cleard = document.getElementById('n')
                    const clearn = document.getElementById('last')                

equal.addEventListener('click', e =>{
   state2 = 1
   }
   )
equal.addEventListener('click', e =>{
    console.log(state2+"oio")
   }
   )
  

equal.addEventListener('click', e =>{
    console.log(state2+"oio")
   }
   )

equal.addEventListener('click', e =>{
    document.getElementById('ans').innerHTML = (final)
    }
    )
    equal.addEventListener('click', e =>{
        cleard.removeChild(cleard.firstElementChild);
      }
      )
      equal.addEventListener('click', e =>{
        document.getElementById("n").innerHTML += '<div id="screen"></div>'
      }
      )
      equal.addEventListener('click', e =>{
        document.getElementById("last").innerHTML += '<span id="ans"></div>'
      }
      )
      equal.addEventListener('click', e =>{
        limit = 19;
      }
      )
      equal.addEventListener('click', e =>{
        operation = 1;
      }
      )
      equal.addEventListener('click', e =>{
        digit = 1;
      }
      )
      equal.addEventListener('click', e =>{
        digit2 = 1;
      }
      )

clear.addEventListener('click', e =>{
clearn.removeChild(clearn.firstElementChild);
      }
    )
   
      clear.addEventListener('click', e =>{
    document.getElementById("n").innerHTML += '<div id="screen"></div>'
  }
  )
 
   clear.addEventListener('click', e =>{
    cleard.removeChild(cleard.firstElementChild);
  }
  )

  clear.addEventListener('click', e =>{
    clearn.removeChild(clearn.firstElementChild);
  }
  )
  clear.addEventListener('click', e =>{
    document.getElementById("n").innerHTML += '<div id="screen"></div>'
  }
  )
 
  clear.addEventListener('click', e =>{
    limit = 19;
  }
  )
  clear.addEventListener('click', e =>{
    operation = 1;
  }
  )
  clear.addEventListener('click', e =>{
    digit = 1;
  }
  )
  clear.addEventListener('click', e =>{
    digit2 = 1;
  }
  )

  clear.addEventListener('click', e =>{
    console.log(document.getElementById("screen").value)
  }
  )


 
