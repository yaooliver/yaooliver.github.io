   lastNum = sessionStorage.getItem("key");
   console.log(JSON.parse(lastNum));
   roles = JSON.parse(lastNum);
   checkstep = sessionStorage.getItem("step")
console.log(checkstep);
killdata = JSON.parse(sessionStorage.getItem("killdata"));
if (killdata==null) {
    killdata=new Array() 
}
var killidx
if (killidx) {
    killidx = new Array()
}
console.log(killdata)
   for (i = 0; i < roles.length; i++) {
       $('.main').append("<div class='box'><div class='box1'></div ><div class='box2'></div><div class='box3'><img src='素材/pic3.png'></div></div>");
       $('.box2').eq(i).html(i + 1 + "号");
       if (roles[i] == 1) {
           $('.box1').eq(i).html("杀手")
       } else if (roles[i] == 0) {
           $('.box1').eq(i).html("平民")
       } else if (roles[i] == 2) {
           $('.box1').eq(i).html("平民").css("background-color","rgb(160, 207, 145)")
       } else if (roles[i] == 3) {
           $('.box1').eq(i).html("杀手").css("background-color", "rgb(160, 207, 145)")
       }
   };
   $('.box').click(function () {
       $('.box').find($('.box3')).hide()
       $(this).find($('.box3')).show();
       killidx = $(this).index()

})
var guess = function () {
    if ($.inArray("1", roles) == -1 || $.inArray("0", roles) == -1) {
        console.log(1111111)
        bootbox.confirm("游戏结束，看看游戏结果", function (result) {
            if (result) {
                window.location.href="结果页.html"
            }
         });
    }
   }
   $('.footer').click(function () {
       if (checkstep % 4 == 1 && roles[killidx] == 1) {
           bootbox.confirm("杀手不能杀死同职业玩家", function (result) {});
       } else if (checkstep % 4 == 1 && roles[killidx] == 0) {
           roles.splice(killidx, 1, "2");
           var nextPage = JSON.stringify(roles);
           sessionStorage.setItem("key", nextPage);
           killdata.push(killidx+1, "平民");
           console.log(killdata)
           sessionStorage.setItem("killdata", JSON.stringify(killdata));
           if ($.inArray("1", roles) == -1 || $.inArray("0", roles) == -1) {
               console.log(1111111)
               guess()
           }else {
                       window.location.href = "法官台本.html"
                   }
           
       } else if (checkstep % 4 == 0 && roles[killidx] == 0) {
           roles.splice(killidx, 1, "2");
           var nextPage = JSON.stringify(roles);
           sessionStorage.setItem("key", nextPage);
           killdata.push(killidx+1, "平民");
           console.log(killdata)
           sessionStorage.setItem("killdata", JSON.stringify(killdata));
           if ($.inArray("1", roles) == -1 || $.inArray("0", roles) == -1) {
               console.log(1111111)
               guess()
           }else {
                       window.location.href = "法官台本.html"
                   }
           
       } else if (checkstep % 4 == 0 && roles[killidx] == 1) {
           roles.splice(killidx, 1, "3");
           var nextPage = JSON.stringify(roles);
           sessionStorage.setItem("key", nextPage);
           killdata.push(killidx+1, "杀手");
           console.log(killdata)
           sessionStorage.setItem("killdata", JSON.stringify(killdata));
           if ($.inArray("1", roles) == -1 || $.inArray("0", roles) == -1) {
               console.log(1111111)
               guess()
           }else {
                        window.location.href = "法官台本.html"
                   }
          
       } else if (roles[killidx] == 2 || roles[killidx] == 3) {
           bootbox.confirm("玩家已经死亡，请选择其他玩家", function (result) {});
       } else if (checkstep % 4 == 1 && !roles[killidx]) {
           if ($.inArray("1", roles) == -1 || $.inArray("0", roles) == -1) {
               console.log(1111111)
               bootbox.confirm("游戏结束，看看游戏结果", function (result) {
                   if (result) {
                       window.location.href = "index.html"
                   } 
               });
           }else {
                       window.location.href = "法官台本.html"
           killdata.push(-1, -2);
           console.log(killdata)
           sessionStorage.setItem("killdata", JSON.stringify(killdata));
                   }
               
       }
   })