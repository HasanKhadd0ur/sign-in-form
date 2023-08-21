let i=1;
        let text=["err","Contact info","Email","Birth","submit"];
        function prev(){
            
            
            if(i==1){

				return ;
            }else{

              close("form-"+i);
              
              color("step-"+i,"./icons/wait.png");
              i--;
              open("form-"+i);
              var r=document.getElementById("aftLog");
            
              r.innerText=text[i];
              
              var e="url(./icons/"+text[i]+".png)";
              r.style.backgroundImage=e;
              console.log(e);
           
            }
          }
          function next(){
            
            
            if(i==4 ){
                 return ;
            }else{

				close("form-"+i);
              
              i++;
              open("form-"+i);
              color("step-"+i,"./icons/checked.png");
              var r=document.getElementById("aftLog");
              r.innerText=text[i];
              var e="url(./icons/"+text[i]+".png)";
              r.style.backgroundImage=e;
              console.log(e);
            }
          }
          function close(s){
            
            var m=document.getElementById(s);
            m.style.visibility="hidden";
            m.style.width="0px";            
            m.style.height="0px";            


          }
          
          function color(s,c){

            
            var m=document.getElementById(s);
            m.style.backgroundImage="url("+c+")";
            console.log(c);

          }
          function open(s){

          var c=document.getElementById(s);
          c.style.visibility="visible";
          c.style.width="298px";            
          c.style.height="150px";            


          }
