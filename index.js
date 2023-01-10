$('.slider1').slick({
	dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed:5000,
	prevArrow:".slide1 .pre",
	nextArrow:".slide1 .nex",
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 800,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	   ]
  });
				  
  $('.slider2').slick({
	dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed:5000,
	prevArrow:".slide2 .prev",
	nextArrow:".slide2 .next",
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 800,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	   ]
  });
				  
  $('.slider3').slick({
	dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed:5000,
	prevArrow:".slide3 .prv",
	nextArrow:".slide3 .nxt",
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 800,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	   ]
  });
  
  let obj;
  let arr=[];
  function Clear(){
   localStorage.clear();
  }
   function cart(className){
	let x=document.getElementsByClassName(className);
	console.log(x);
	img=x[0]['currentSrc'];
	product =x[1]['innerHTML'];
	price=x[2]['innerHTML'];
   let obj=new Object();
   obj.image=img;
   obj.name=product;
   obj.pri=price;
   arr.push(obj);
   y=window.localStorage.setItem("arr",JSON.stringify(arr));
  a=window.localStorage.getItem("arr");
  console.log(JSON.parse(a));
   }
   function redirect(){
	document.location.href="cart.html";

 }