/* 代码整理：懒人之家 www.lanrenzhijia.com */
var $houbei_width = 530; //宽度
var $houbei_height = 310; //高度

var $houbei_speed = 3000;//切换速度

var $houbei_box = $("#houbei-box");
var $houbei_li = $("#houbei-box li");
var $houbei_li_img = $("#houbei-box li img");
var $houbei_num_box = $("#houbei-num");
var $houbei_btn = $("#houbei-num span");
var $houbei_next = $("#houbei-next");
var $houbei = 0;

$houbei_li.hide();
$houbei_li.eq(0).show();

$houbei_box.width($houbei_width);
$houbei_box.height($houbei_height);

$houbei_li.width($houbei_width);
$houbei_li.height($houbei_height);

$houbei_li_img.width($houbei_width);
$houbei_li_img.height($houbei_height);

var $houbei_num = $houbei_li.size();
//右下角数字
$houbei_num_box.width($houbei_num*25+3);

var $num_con = '';
for(i=0;i<$houbei_num;i++){
	$num_con+= '<span>'+(i+1)+'</span>';
}

$houbei_num_box.html($num_con);

$("#houbei-num span").eq($houbei).addClass("this");

$("#houbei-num span").mouseover(function(){

	var $rnd_num = parseInt(Math.random()*3+1);

	$("#houbei-num span").removeClass("this");
	$(this).addClass("this");
	$houbei_li.eq($houbei).hide(); 
	var $thisnum = parseInt($(this).text());
	$houbei = $thisnum-1;
	if($rnd_num==1){
	    $houbei_li.eq($houbei).fadeIn(1000);
	}else if($rnd_num==2){
		$houbei_li.eq($houbei).show(500);
	}else if($rnd_num==3){
		$houbei_li.eq($houbei).slideDown(1000); 
	}else{
		$houbei_li.eq($houbei).fadeIn(1000);
	}
});

var $autoFun;

if($houbei_num>1){
autoNext();
clearFun($houbei_box);
}


$houbei_next.click(function(){
	if($houbei==$houbei_num-1){

		var $rnd_num = parseInt(Math.random()*3+1);

		$("#houbei-num span").removeClass("this");
		$("#houbei-num span").eq(0).addClass("this");
		$houbei_li.eq($houbei).hide(); 
		
		if($rnd_num==1){
			$houbei_li.eq(0).fadeIn(1000);
		}else if($rnd_num==2){
			$houbei_li.eq(0).show(500);
		}else if($rnd_num==3){
			$houbei_li.eq(0).slideDown(1000); 
		}else{
			$houbei_li.eq(0).fadeIn(1000);
		}
		$houbei = 0;

	}else{
		var $rnd_num = parseInt(Math.random()*3+1);

		$("#houbei-num span").removeClass("this");
		$("#houbei-num span").eq($houbei+1).addClass("this");
		$houbei_li.eq($houbei).hide(); 
		
		if($rnd_num==1){
			$houbei_li.eq($houbei+1).fadeIn(1000);
		}else if($rnd_num==2){
			$houbei_li.eq($houbei+1).show(500);
		}else if($rnd_num==3){
			$houbei_li.eq($houbei+1).slideDown(1000); 
		}else{
			$houbei_li.eq($houbei+1).fadeIn(1000);
		}
		
		$houbei = $houbei+1;

	}
	
})


function autoNext(){
        $houbei_next.trigger('click');
        $autoFun = setTimeout(autoNext, $houbei_speed);//此处不可使用setInterval,setInterval是重复执行传入函数,这会引起第二次划入时停止失效
}
function clearAuto(){
        clearTimeout($autoFun);
}
function clearFun(elem){
        elem.hover(function(){
            clearAuto();
        }, function(){
            autoNext();
        });
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */