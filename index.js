
var wid=window.outerWidth;
var hei=window.outerHeight;
var widper;
var heiper;
var a=hei;
var gdc=0;
if(wid>hei){
  a=wid;
}
for(var i=1 ;i<=a;i++){
  if(wid%i==0&&hei%i==0){
    gdc=i;
  }
}
widper=wid/gdc;
heiper=hei/gdc;
if((widper/heiper)==(1)){
$(function(){
$("#floater").css("height", "20%");
});
}
else if((widper/heiper)>(1)){
$(function(){
$("#floater").css("height", "0%");
});
}
else{
 
$(function(){
$("#floater").css("height", "20%");
});

}

  function month(obj) {
        var mon=parseInt(obj.value);
		if(mon==2){
		$("#day").children().remove();
		for(var i=1;i<=28;i++){
		   var html =
		   "<option value='"+i+"'>"+i+"일</option>"
		   $("#day").append(html);
			}
		}
		else if(mon==1||mon==3||mon==5||mon==7||mon==8||mon==10||mon==12){
		$("#day").children().remove();
		for(var i=1;i<=31;i++){
		   var html =
		   "<option value='"+i+"'>"+i+"일</option>"
		   $("#day").append(html);
			}
		}
		else if(mon==4||mon==6||mon==9||mon==11){
		$("#day").children().remove();
		for(var i=1;i<=30;i++){
		   var html =
		   "<option value='"+i+"'>"+i+"일</option>"
		   $("#day").append(html);
			}
		}
		else{
		$("#day").children().remove();
		   var html =
		   "<option value=''>선택해주세요</option>"
		   $("#day").append(html);
		}
    }
function timechk(){
var res=$("#customControlInline").is(":checked");
if(res==true){
$("#time").children().remove();
			var html =
		   "<option value='0'>생시모름</option>"
		   $("#time").append(html);
}
else{
$("#time").children().remove();
var html="<option value=''>선택해주세요</option>"+
   "<option value=\"1\">23:30 ~ 01: 30</option>"+
  "<option value=\"2\">01:30 ~ 03: 30</option>"+
  "<option value=\"3\">03:30 ~ 05: 30</option>"+
  "<option value=\"4\">05:30 ~ 07: 30</option>"+
  "<option value=\"5\">07:30 ~ 09: 30</option>"+
  "<option value=\"6\">09:30 ~ 11: 30</option>"+
  "<option value=\"7\">11:30 ~ 13: 30</option>"+
  "<option value=\"8\">13:30 ~ 15: 30</option>"+
  "<option value=\"9\">15:30 ~ 17: 30</option>"+
  "<option value=\"10\">17:30 ~ 19: 30</option>"+
  "<option value=\"11\">19:30 ~ 21: 30</option>"+
  "<option value=\"12\"> 21:30 ~ 23: 30</option>"
   $("#time").append(html);
}

}


function Check(object){
    if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);
    }    
	var year=parseInt(new Date().getFullYear());
	if(object.value>year){
	object.value=year;
	}
	else if(object.value.length==object.maxLength&&object.value<1925){
	object.value=1925;
	}

	}

  