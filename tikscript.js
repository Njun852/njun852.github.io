var turns = 2;
var a1 = 0;
var a2 = 0;
var a3 = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;

var pa1 = 0;
var pa2 = 0;
var pa3 = 0;
var pb1 = 0;
var pb2 = 0;
var pb3 = 0;
var pc1 = 0;
var pc2 = 0;
var pc3 = 0;

var sa1 = 0;
var sa2 = 0;
var sa3 = 0;
var sb1 = 0;
var sb2 = 0;
var sb3 = 0;
var sc1 = 0;
var sc2 = 0;
var sc3 = 0;

var res =0;

function winner1(){
    document.getElementById('win').innerHTML += "<h1>Player 1 Win!</h1>"
    turns = 10;
}
function winner2(){
    document.getElementById('win').innerHTML += "<h1>Player 2 Win!</h1>"
    turns = 10;
}

//pls self dont foget this this is really important
function fmovea1(){
    if(turns ==2 && a1 == 0){
        ++pa1;
        if(pa1 == 1 && pb1 == 1 && pc1 == 1){
            winner1();
        }else if(pa1 == 1 && pa2 == 1 && pa3 == 1){
            winner1();
        }
        else if(pa1 == 1 && pb2 == 1 && pc3 == 1){
            winner1();
        }
    document.getElementById("a1").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns; ++a1;  res= res+ 1;console.log(a1);
   
    
    
   }
   else if(turns ==3 && a1 == 0){ ++sa1;
    if(sa1 == 1 && sb1 == 1 && sc1 == 1){
        winner2();
    }else if(sa1 == 1 && sa2 == 1 && sa3 == 1){
        winner2();
    }
    else if(sa1 == 1 && sb2 == 1 && sc3 == 1){
        winner2();
    }
    document.getElementById("a1").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>');
--turns; ++a1;}
}
function fmovea2(){
    
    if(turns ==2  && a2 == 0){++pa2;
        if(pa1 == 1 && pa2 == 1 && pa3 == 1){
            winner1();
        }else if(pa2 == 1 && pb2 == 1 && pc2 == 1){
            winner1();
        }
    document.getElementById("a2").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns; ++a2; console.log(turns)
   
}else if(turns ==3 && a2 == 0) {++sa2;
    if(sa1 == 1 && sa2 == 1 && sa3 == 1){
        winner2();
    }else if(sa2 == 1 && sb2 == 1 && sc2 == 1){
        winner2();
    }
    document.getElementById("a2").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>');
    --turns; ++a2;}
}
function fmovea3(){
    
    if(turns ==2 && a3 == 0){++pa3;
        if(pa1 == 1 && pa2 == 1 && pa3 == 1){
            winner1();
        }else if (pa3 == 1 && pb3 == 1 && pc3 == 1){
            winner1();
        }if(pc1 == 1 && pb2 == 1 && pa3 == 1){
            winner1();
        }
    document.getElementById("a3").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns; ++a3;console.log(turns);
    console.log(a3+"see")
  
}else if(turns ==3 && a3 == 0) {++sa3;
    if(sa1 == 1 && sa2 == 1 && sa3 == 1){
        winner2();
    }else if (sa3 == 1 && sb3 == 1 && sc3 == 1){
        winner2();
    }if(sc1 == 1 && sb2 == 1 && sa3 == 1){
        winner2();
    }
        document.getElementById("a3").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>');
        --turns; ++a3;}
}

function fmoveb1(){
    if(turns==2 && b1 == 0){
        ++pb1;
        if(pa1 == 1 && pb1 == 1 && pc1 == 1){
            winner1();
        } else if(pa1 == 1 && pb2 == 1 && pc3 == 1){
            winner1();
        } else if (pb1 == 1 && pb2 == 1 && pb3 == 1){
            winner1();
        }
    document.getElementById("b1").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns; ++b1; res= res+ 1;console.log(turns)
   
}
else if(turns ==3 && b1 == 0) {++sb1;
    if(sa1 == 1 && sb1 == 1 && sc1 == 1){
        winner2();
    } else if(sa1 == 1 && sb2 == 1 && sc3 == 1){
        winner2();
    } else if (sb1 == 1 && sb2 == 1 && sb3 == 1){
        winner2();
    }
        document.getElementById("b1").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>'); --turns;++b1;}
    }
function fmoveb2(){
       
    if(turns ==2 && b2 == 0){ ++pb2;
        if(pa2 == 1 && pb2 == 1 && pc2 == 1){
            winner1();
        }else if (pb1 == 1 && pb2 == 1 && pb3 == 1){
            winner1();
        }if(pc1 == 1 && pb2 == 1 && pa3 == 1){
            winner1();
            }
        document.getElementById("b2").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns;++b2; console.log(turns)
    
    
}else if(turns ==3 && b2 == 0) { ++sb2;
    if(sa2 == 1 && sb2 == 1 && sc2 == 1){
        winner2();
    }else if (pb1 == 1 && pb2 == 1 && pb3 == 1){
        winner2();
    }if(pc1 == 1 && pb2 == 1 && pa3 == 1){
        winner2();
        }
        document.getElementById("b2").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>');--turns;++b2;}
    }
    function fmoveb3(){
        
    if(turns ==2 &&b3 == 0){++pb3;
        if (pa3 == 1 && pb3 == 1 && pc3 == 1){
            winner1();
        }else if (pb1 == 1 && pb2 == 1 && pb3 == 1){
            winner1();
    }
    document.getElementById("b3").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns;++b3; console.log(turns);
   
    }else if (turns ==3 && b3 == 0){++sb3;
        if (sa3 == 1 && sb3 == 1 && sc3 == 1){
            winner1();
        }else if (sb1 == 1 && sb2 == 1 && sb3 == 1){
            winner1();
    }
        document.getElementById("b3").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>');--turns;++b3;}
    }function fmovec1(){
       
    if(turns ==2 && c1 == 0){ ++pc1;
        if(pa1 == 1 && pb1 == 1 && pc1 == 1){
            winner1();
        } else if(pc1 == 1 && pb2 == 1 && pa3 == 1){
            winner1();
        } else if (pc1 == 1 && pc2 == 1 && pc3 == 1){
            winner1();
        }
    document.getElementById("c1").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns;++c1;  res= res+ 1;console.log(turns);
    
    
   }else if(turns ==3 && c1 == 0){++sc1;
    if(sa1 == 1 && sb1 == 1 && sc1 == 1){
        winner2();
    } else if(sc1 == 1 && sb2 == 1 && sa3 == 1){
        winner2();
    } else if (sc1 == 1 && sc2 == 1 && sc3 == 1){
        winner2();
    }
        document.getElementById("c1").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>');--turns;++c1;
        }
        }
         function fmovec2(){
   
            if(turns ==2 && c2 == 0){
                ++pc2;
                if(pa2 == 1 && pb2 == 1 && pc2 == 1){
                    winner1();
                } else if (pc1 == 1 && pc2 == 1 && pc3 == 1){
                    winner1();
                }
    document.getElementById("c2").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns;++c2; console.log(turns);
   }
   else if(turns ==3 && c2 == 0){++sc2;
    if(sa2 == 1 && sb2 == 1 && sc2 == 1){
        winner2();
    } else if (sc1 == 1 && sc2 == 1 && sc3 == 1){
        winner2();
    }
        document.getElementById("c2").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>');--turns;++c2;}
    }
    function fmovec3(){
      
    if(turns ==2 && c3==0){  ++pc3;
        if(pa1 == 1 && pb2 == 1 && pc3 == 1){
            winner1();
        }else if (pa3 == 1 && pb3 == 1 && pc3 == 1){
            winner1();
            } else if (pc1 == 1 && pc2 == 1 && pc3 == 1){
                winner1();
            }
    document.getElementById("c3").innerHTML +=('<svg id="cross" width="152" height="152"><line x1="10" y1="10" x2="140" y2="140"></line><line x1="142" y1="10" x2="10" y2="140"></line></svg>');
    ++turns;++c3;console.log(turns);
    
}else if(turns ==3 && c3 == 0){ ++sc3;
    if(sa1 == 1 && sb2 == 1 && sc3 == 1){
            winner2();
        }else if (sa3 == 1 && sb3 == 1 && sc3 == 1){
            winner2();
            } else if (sc1 == 1 && sc2 == 1 && sc3 == 1){
                winner2();
            }
        document.getElementById("c3").innerHTML +=('<svg id="circle" width="152" height="152"><circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle></svg>');--turns;++c3;
    }
    }

//stop
console.log("pa1"+pa1);
console.log("pc1"+pc1);
console.log("pb1"+pb1);
console.log("res"+res);

function move(){

document.getElementById("a1").onclick =
fmovea1;
document.getElementById("a2").onclick =
fmovea2;
 
fmovea2;
document.getElementById("a3").onclick =
fmovea3;
document.getElementById("b1").onclick =
fmoveb1;
document.getElementById("b2").onclick =
fmoveb2;
document.getElementById("b3").onclick =
fmoveb3;
document.getElementById("c1").onclick =
fmovec1;
document.getElementById("c2").onclick =
fmovec2;
document.getElementById("c3").onclick =
fmovec3;
}



move();

console.log(turns)
/*<svg id="cross" width="152" height="152">
            <line x1="10" y1="10" x2="140" y2="140"></line>
            <line x1="142" y1="10" x2="10" y2="140"></line>
           </svg>
           <svg id="circle" width="152" height="152">
            <circle cx="76" cy="76" r="65" style="border: 5px;" fill="white"></circle>
        </svg>*/
