$(document).ready(function(){	
$("a").attr("onfocus","this.blur()");
$(".top").click(function(){$("html,body").stop().animate({"scrollTop":0},1000,"easeOutCirc");});


(function(){
var PREV=$(".banner a.prev");
var NEXT=$(".banner a.next");
var li=$(".banner .bigbox li");
var smallli=$(".banner .smallbox li");
var n=li.length;
var i=0;	
if(n>1){
li.not(li.eq(0)).hide();		
li.eq(0).addClass("hover");
smallli.eq(0).addClass("hover");
var workstabs=function(){
var tabs=function(m,i){
			 li.eq(m).fadeOut(1000);
			 li.eq(i).fadeIn(1000);
			 smallli.eq(m).removeClass("hover");
			 smallli.eq(i).addClass("hover");
           };
	
NEXT.click(function(){nextclickbanner();});	
PREV.click(function(){prevclick();});	
	   
nextclickbanner=function(){
	if(i==n-1){
	li.eq(i).removeClass("hover");
	li.eq(0).addClass("hover");
	m=i;
	i=0;
	tabs(m,i);
	}else{
		li.eq(i).removeClass("hover");
	    li.eq(i+1).addClass("hover");
		m=i;
	    i++;
	    tabs(m,i);
	}
		}
    		
 prevclick=function(){
	if(i==0){
	li.eq(0).removeClass("hover");
	li.eq(n-1).addClass("hover");
	m=0;
	i=n-1;
	tabs(m,i);
	}else{
		li.eq(i).removeClass("hover");
	    li.eq(i-1).addClass("hover");
		m=i;
	    i--;
	    tabs(m,i);
	}
		}			
				
};
autobasebanner=window.setInterval(function(){nextclickbanner()},8000);
PREV.hover(function(){window.clearInterval(autobasebanner)},function(){autobasebanner=window.setInterval(function(){nextclickbanner()},8000);});
NEXT.hover(function(){window.clearInterval(autobasebanner)},function(){autobasebanner=window.setInterval(function(){nextclickbanner()},8000);});
workstabs();
}
})();
});



$(function(){
//index and showcase guest special effects
	$(".showcase-con-list a").bind("mouseenter mouseleave",
	function(e) {
	    
		var w = $(this).width();
		var h = $(this).height();
		var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
		var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
		var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
		var eventType = e.type;
		var dirName = new Array('上方','右侧','下方','左侧');
		if(e.type == 'mouseenter'){
	        
	        $(this).find("em").animate({"left":"0"});
	        
			switch(direction){
				case 0:
				 $(this).find("span").css({"top":"-835px","left":"0"});
			     $(this).find("span").animate({"top":"0px"});
				 break;
				case 1:
				 $(this).find("span").css({"top":"0px","left":"285px"});
			     $(this).find("span").animate({"left":"0px"});
				 break;
				case 2:
				 $(this).find("span").css({"top":"435px","left":"0px"});
			     $(this).find("span").animate({"top":"0px"});
				 break;
				case 3:
				 $(this).find("span").css({"top":"0px","left":"-285px"});
			     $(this).find("span").animate({"left":"0px"});
				 break;
				 
			}
		}else{
			
			  $(this).find("em").animate({"left":"-285px"});
			
	          switch(direction){
				case 0:
			     $(this).find("span").animate({"top":"-435px"});
				 break;
				case 1:
			     $(this).find("span").animate({"left":"285px"});
				 break;
				case 2:
			     $(this).find("span").animate({"top":"435px"});
				 break;
				case 3:
			     $(this).find("span").animate({"left":"-285px"});
				 break; 
			}
		}
	});
	
	
	
	
	
	
	
		$(".major-item").bind("mouseenter mouseleave",
	function(e) {
	    
		var w = $(this).width();
		var h = $(this).height();
		var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
		var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
		var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
		var eventType = e.type;
		var dirName = new Array('上方','右侧','下方','左侧');
		if(e.type == 'mouseenter'){
	  
			switch(direction){
				case 0:
				 $(this).find(".back-face").removeClass("from-top from-right from-bottom from-left to-top to-right to-bottom to-left");
				 $(this).find(".back-face").addClass("from-top");
				break;
				case 1:
				 $(this).find(".back-face").removeClass("from-top from-right from-bottom from-left to-top to-right to-bottom to-left");
				 $(this).find(".back-face").addClass("from-right");
				 break;
				case 2:
				 $(this).find(".back-face").removeClass("from-top from-right from-bottom from-left to-top to-right to-bottom to-left");
				 $(this).find(".back-face").addClass("from-bottom");
				 break;
				case 3:
				 $(this).find(".back-face").removeClass("from-top from-right from-bottom from-left to-top to-right to-bottom to-left");
				 $(this).find(".back-face").addClass("from-left");
				 break;
				 
			}
		}else{
			
	          switch(direction){
				case 0:
				 $(this).find(".back-face").removeClass("from-top from-right from-bottom from-left to-top to-right to-bottom to-left");
			     $(this).find(".back-face").addClass("to-top");
				 break;
				case 1:
				 $(this).find(".back-face").removeClass("from-top from-right from-bottom from-left to-top to-right to-bottom to-left");
			     $(this).find(".back-face").addClass("to-right");
				 break;
				case 2:
				 $(this).find(".back-face").removeClass("from-top from-right from-bottom from-left to-top to-right to-bottom to-left");
			     $(this).find(".back-face").addClass("to-bottom");
				 break;
				case 3:
				 $(this).find(".back-face").removeClass("from-top from-right from-bottom from-left to-top to-right to-bottom to-left");
			     $(this).find(".back-face").addClass("to-left");
				 break; 
			}
		}
	});
	
	
	
	
	
	
	
	

})

