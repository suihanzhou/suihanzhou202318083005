
         //document.write("hello world.")

          function sayHello(){                                           //function=运作机制
               var question="What is your name?";                        //var=定义元素内容
               var response=prompt(question);                            //prompt=弹窗并需要填写
               alert("Hello "+response+",welcome to my first game.");    //alert=弹窗并不需要填写
          };

        //sayHello();

         function add(a,b){
           return a+b;
         }
            console.log(add(20,30))
            console.log(add(158,20078));                                //后台运算

         function showTopic(){
           var x=document.getElementById('demo');
           x.style.fontSize="25px";
           x.style.color="red";
         }
