$(document).ready(function(){
	$('#btn').click(function(){
		$('#container').slideToggle(2000);
	})
	$('.img').mouseenter(function(){
		$(this).eq(0).css("width","100%");
		$(this).eq(1).css("width","100%");
		$(this).eq(2).css("width","100%");
		$(this).eq(3).css("width","100%");
		$(this).eq(4).css("width","100%");
	});
	$('.img').mouseleave(function(){
		$(this).eq(0).css("width","80px");
		$(this).eq(1).css("width","80px");
		$(this).eq(2).css("width","80px");
		$(this).eq(3).css("width","80px");
		$(this).eq(4).css("width","80px");
	});

	$('.sociall').mouseenter(function(){
		$(this).eq(0).css({
			"font-size": "35px",
			"transform":" translateY(-5px)",
			"transition": "0.2s ease-in-out"
		});
		$(this).eq(1).css({
			"font-size": "35px",
			"transform":" translateY(-5px)",
			"transition": "0.2s ease-in-out"

		});
		$(this).eq(2).css({
			"font-size": "35px",
			"transform":" translateY(-5px)",
			"transition": "0.2s ease-in-out"

		});
		$(this).eq(3).css({
			"font-size": "35px",
			"transform":" translateY(-5px)",
			"transition": "0.2s ease-in-out"

		});
		$(this).eq(4).css({
			"font-size": "35px",
			"transform":" translateY(-5px)",
			"transition": "0.2s ease-in-out"

		});
		$(this).eq(5).css({
			"font-size": "35px",
			"transform":" translateY(-5px)",
			"transition": "0.2s ease-in-out"

		});
		$(this).eq(6).css({
			"font-size": "35px",
			"transform":" translateY(-5px)",
			"transition": "0.2s ease-in-out"

		});
		$(this).eq(7).css({
			"font-size": "35px",
			"transform":" translateY(-5px)",
			"transition": "0.2s ease-in-out"

		});
	});
	$('.sociall').mouseleave(function(){
		$(this).eq(0).css({
			"font-size": "20px",
			
		});
		$(this).eq(1).css({
			"font-size": "20px",
		});
		$(this).eq(2).css({
			"font-size": "20px",

		});
		$(this).eq(3).css({
			"font-size": "20px",
		});
		$(this).eq(4).css({
			"font-size": "20px",
		})
		$(this).eq(5).css({
			"font-size": "20px",
		})
		$(this).eq(6).css({
			"font-size": "20px",
		})
		$(this).eq(7).css({
			"font-size": "20px",
		})

	});
	// //////////////
	$(".card-link").click(function(){
		$(".imge").attr("src",$(this).parent().siblings().attr("Src"));
		$(".product_name").text($(this).siblings("h3").text());
	});
	let name=$('#named').val();
	let num=$('#numr').val();
	let email=$('#email').val();

	$('.event').click(function(){
		if(name=""){
			$('#invalidname').show();
		}	
		else if(num=""){
			$('#invalidnum').show();
		}
		else if(email=""){
			$('#invalidemail').show();
		}
		else{
			$('.data1').append(`<div class='div my-3'>
			Name:${name}
			<br>
			phone:${num}
			<br>
			Email:${email}
			</div>`);
		}
		
	});
	$('.clo').click(function(){
		$('.alert-danger').hide();
	});
	
	// slick
	$('.center').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 768,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
			}
		}
		]
	});
})
new WOW().init();
// You can optionally pass in a y-position to scroll to as an integer
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000
});

jQuery("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '80px' });
jQuery("#responsive_headlin").fitText(1.2, { minFontSize: '20px', maxFontSize: '80px' });
jQuery("#responsive_headlin1").fitText(1.2, { minFontSize: '20px', maxFontSize: '80px' });
jQuery("#responsive_headlin2").fitText(1.2, { minFontSize: '20px', maxFontSize: '80px' });
jQuery("#responsive_headlin3").fitText(1.2, { minFontSize: '20px', maxFontSize: '80px' });


// js
let closeMessage=document.getElementById('closeMessage');
let closeMessageNum=document.getElementById('closeMessageNum');
let invalid=document.getElementById('invalid');
let invalidNum=document.getElementById('invalidNum');
let text=document.getElementById('text');
let buy=document.getElementById('buy');
let inpName=document.getElementById('name');
let num=document.getElementById('num');
let prod=document.getElementById('prod');
let data=document.querySelector('.data');
let regex =/^[\d,\s,\+,\-]{5,20}/;

let closeMessageInvalid=()=>{
    invalid.classList.add('none');
}
let closeMessageInvalidNum=()=>{
    invalidNum.classList.add('none');
}
let buyPhone=()=>{
	let inputName=inpName.value;
	let inputNum=num.value;
	let inputProd=prod.value;
	if(inputName.trim() == 0 || inputName.length < 3 || inputName.length > 7){
		invalid.classList.remove('none');
	}
	else if(inputNum==""){
		invalidNum.classList.remove('none');
	}
	else if(inputNum.match(regex)){
		text.innerText = "Congrats! You Enter A Valid Phone Number";
	}

	else{
		text.innerText = "Oops! Your Phone Number Is Invalid";
		data.innerHTML+=`<div class='div my-3'>
		Name:${inputName}
		<br>
		phone:${inputNum}
		<br>
		product:${inputProd}
		</div>`
	}

}
closeMessage.addEventListener('click',closeMessageInvalid)
closeMessageNum.addEventListener('click',closeMessageInvalidNum)
buy.addEventListener('click',buyPhone);

// js