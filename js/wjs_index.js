$(function () {
	//初始化工具提示
	$('[data-toggle="tooltip"]').tooltip();
	//轮播图动态加载图片js逻辑
	var items = $(".carousel-inner .item" );
	$(window).on("resize",function(){
		var width=$(window).width();
		if (width>=768) {
			$(items).each(function(index,value) {
				var item=$(this);
				var imgSrc=item.data('largeImage');
				console.log(imgSrc);
				item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
			})
		}else {
			$(items).each(function(index,value) {
				var item=$(this);
				var imgSrc=item.data('smallImage');
				item.html('<a href="javascript:;" class="mobileImg hidden-sm hidden-md hidden-lg"><img src="'+imgSrc+'" alt="..."></a>');
			})
		}
	}).trigger('resize');
	//轮播图添加移动端左右滑动效果
	var startX,endX;
	var carousel_inner=$(".carousel-inner")[0];
	var carousel=$(".carousel");
	carousel_inner.addEventListener("touchstart", function(e) {
		// console.log('1111111111');
		startX = e.targetTouches[0].clientX;
	});
	carousel_inner.addEventListener("touchend",function(e) {
		// console.log('22222222');
		endX= e.changedTouches[0].clientX;
		if (endX-startX > 0) {
			carousel.carousel('prev');
		}else if (endX-startX < 0) {
			carousel.carousel('next');
		}
	});
	//产品块头部移动端滑动效果
	var ul=$(".wjs_product .nav-tabs");
	var lis=ul.find("li");
	var totalWidth=0;
	lis.each(function(index,value) {
		totalWidth=totalWidth+$(value).outerWidth(true);
		console.log($(value).outerWidth(true));
	});
	console.log(totalWidth);
	ul.width(totalWidth);
	var myScroll = new IScroll('.tabs_parent',{
		scrollX: true,scrollY: false
	});
	
});
