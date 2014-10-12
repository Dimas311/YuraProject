
//font loading
(function() {
	var config = {
		kitId: 'goj7eyk',
		active: function() {Init();}
	};
	var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this
.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)})();

// detect devices
var isDevice = /ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase());

// initialization all functions
$(document).ready(function(){
	FirstLastChildIE();
	IEFix();
	BrowserDetect();
	ShareThis();
	FontResizer();
	LoggedFlyout();
	ExternalLinks();
	StudyDesignLinks();
	CloseLightbox();
	LandingIcons();
	SideNav();
	Overs();
});

// initialization functions after loading fonts
function Init(){
	PieInIE();
	MainNav();
	MainNavSetFlyoutWidth();
	SetEqualHeights();
	ShadowsAndCorners();
}

// adding last and first classes for ie
function FirstLastChildIE(){
	if ($.browser.msie) {
		$('.l-footer .b-footer-bav li:first-child, .b-spotlight-list .b-spotlight:first-child, .l-header .b-top-bar  ul > li:first-child, .b-article .b-tab-body:first-child').addClass('m-first');
		$('.l-header .b-main-nav > ul > li:last-child, .m-w33:last-child, .m-w50:last-child, .l-header .b-flyout ul li:last-child,.b-search-list .b-item:last-child, .b-icons-list.m-big .b-item:last-child, .b-callout-list .b-callout:last-child').addClass('m-last');
	}
}

// shadows and corners for old ie
function PieInIE(){
	if ($.browser.msie && $.browser.version <= 8.0) {
		$('.l-header .b-second-bar li.m-logged .b-flyout, .b-pagination li a, .b-contact-us .b-col2 .b-icon, .b-efficacy-chart .b-col, .l-header .b-second-bar li.m-contact-btn a, .b-btn, .b-manufacturing .b-icon').each(function() {
			PIE.detach(this);
			PIE.attach(this);
		});
	}
}

// form fix for ie7
function IEFix(){
	if ($.browser.msie && $.browser.version == 7.0) {
		$('.b-form-holder select').closest('.b-form-line').find('label').addClass('m-label-for-select');
		$('.b-btn + .b-btn').addClass('m-ml');
	}
}

// detect mac | ipad | ie10
function BrowserDetect(){
	// mac
	if(navigator.platform.indexOf("Mac") != -1) {
		$('body').addClass('m-mac');
	}

	// ipad
	if(navigator.userAgent.match(/iPad/i) != null) {
		$('body').addClass('m-ipad');
	}

	// ie10
	if ($.browser.msie && $.browser.version == 10.0){
		$('html').addClass('ie ie10');
	}
}

// shadows and corners for step list
function ShadowsAndCorners() {
	$('.m-shadow').append('<div class="b-shadow"><div class="m-lc"/></div>');
	$('.m-corner').append('<div class="b-corner"><div class="m-lc"/></div>');
}

// main navigation
function MainNav(){
	var nav_item = $('.l-header .b-main-nav ul > li');
	if(isDevice){
		if ('ontouchstart' in document.documentElement) {
			nav_item.each(function(){
				var $this = $(this);

				this.addEventListener('touchstart', function(e){
					if (e.touches.length === 1){
						e.stopPropagation();

						if (!$this.hasClass('m-over')){
							if (e.target === this || e.target.parentNode === this) {
								e.preventDefault();
							}
							if ($(e.target).parents().filter('.b-flyout:visible').length != 1) {
								nav_item.removeClass('m-over');
								nav_item.find('.b-flyout ul').slideUp();
							}
							$this.addClass('m-over');
							$this.find('.b-flyout ul:not(:visible)').slideDown();

							document.addEventListener('touchstart', closeDropdown = function(){
								if ($(e.target).parents().filter('.b-flyout:visible').length != 1) {
									e.stopPropagation();
									$this.removeClass('m-over');
									$this.find('.b-flyout ul').slideUp();
								}
								else {
									document.removeEventListener('touchstart', closeDropdown);
								}

							});
						}
					}
				}, false);
			});
		}
	}
	else {
		$('.l-header .b-main-nav ul > li').hover(
			function () {
				$(this).addClass('m-over'); 
				$(this).find('.b-flyout ul:not(:visible)').slideDown(); 
			},
			function (){ 
				$(this).removeClass('m-over'); 
				$(this).find('.b-flyout ul').slideUp();
			}
		);
	}
}

// adjusts the width the dropdown menu
function MainNavSetFlyoutWidth() {
	$('.l-header .b-main-nav ul > li').each(function(){
		var index = $(this).index();
		var current_width = $(this).outerWidth(true);
		var next_el = $(this).next('li').outerWidth(true);
		var el_sum = current_width + next_el;
		var flyout = $(this).find('.b-flyout ul');

		if(index == 1 || index == 2){
			el_sum += $(this).next('li').next('li').outerWidth(true);
		}

		if (index == 6 && $.browser.msie) {
			if ($.browser.version == 7.0) {
				flyout.outerWidth(el_sum+11);
			}
			else {
				flyout.outerWidth(el_sum+1);
			}
		}
		else{
			flyout.outerWidth(el_sum);
		}
	});
}

// font size adjuster
function FontResizer(){
	$(".l-header .m-font a").addClass('increase');
	var content = $('.l-content');

	$(".increase").live('click',function(){
		$(this).removeClass('increase').addClass('decrease');
		content.css('font-size', '12px');
		content.addClass('m-increase-font');
		PieInIE();
	});

	$(".decrease").live('click',function(){
		$(this).removeClass('decrease').addClass('increase');
		content.removeAttr("style");
		content.removeClass('m-increase-font');
		PieInIE();
	});
}

// logged flyout
function LoggedFlyout() {
	var flyout = $('.l-header li.m-logged .b-flyout');

	$('.l-header li.m-logged > a').click(function(){
		if(flyout.is(':visible')){
			flyout.slideUp();
		}
		else {
			flyout.slideDown();
		}
		return false;
	});

	if(isDevice){
		$(document).bind('touchstart',function(e){
			if ($(e.target).parents().filter(flyout).is(':visible') != 1) {
				flyout.slideUp();
			}
		});
	}
	else{
		$(document).click(function(e){
			if ($(e.target).parents().filter(flyout).is(':visible') != 1) {
				flyout.slideUp();
			}
		});
	}
}

// share this lightbox
function ShareThis() {
	$('.l-header .b-first-bar .m-share a').live('click', function () {
		$(".b-overlay,.b-lightbox#share").show();
	});
}

// external links lightbox
function ExternalLinks() {
	var lightbox = $('.b-lightbox#external');
	lightbox.find('a').unbind('click');

	$('a[rel="external"]').click(function() {
		var link = $(this).attr('href');

		$(".b-overlay,.b-lightbox#external").show();

		 lightbox.find('a[name="continue"]').one('click', function () {
			window.open(link);
			CloseLightbox();
		 });

		 lightbox.find('a[name="cancel"]').one('click', function () {
			CloseLightbox();
		 });
		 return false;
 	});
}

// manufacturing lightbox
function Manufacturing(){
	$('.b-lightbox#manufacturing iframe').attr('src','http://www.biogenidechemophilia.com/manufacturing-tour.html');
	$(".b-overlay,.b-lightbox#manufacturing").show();
}

// study design lightbox
function StudyDesignLinks(ev,type) {
	var lightbox = $('.b-lightbox#study_design');
	var lightbox_content = lightbox.find('.b-content');

	lightbox.find('a').unbind('click');
	lightbox_content.find('p').hide();

	lightbox_content.find('p[name='+type+']').show();

	$(".b-overlay,.b-lightbox#study_design").show();
}

// close lightbox
function CloseLightbox(){
	$(".b-overlay,.b-lightbox").hide();
	$(".b-lightbox a").unbind('click');

	$('.b-lightbox .b-close-btn').live('click', function () {
		CloseLightbox();
	});

	 if(isDevice){
		$(".b-overlay").bind('touchstart',function(){
			CloseLightbox();
		});
	}
	else{
		$(".b-overlay").live('click', function(){
			CloseLightbox();
		});
	}

	$(document).on('keydown', function (e) {
		if (e.keyCode === 27) {
			CloseLightbox();
		}
	});
}

// functions for icons on landing pages
function LandingIcons() {
	if(isDevice){
		$('.b-icons-list a').live("touchstart", function() {
			$(this).parent().find('.b-icon').addClass("m-over");
		}).live("touchend", function() {
			 $(this).parent().find('.b-icon').removeClass("m-over");
		});

		var overs = $('.b-icons-list .b-icon');
		overs.live("touchstart", function() {
			overs.removeClass("m-over");
			$(this).addClass("m-over");
		}).live("touchend", function() {
			$(this).removeClass("m-over");
		});
	}
	else{
		$('.b-icons-list a').hover(
			function(){$(this).parent().find('.b-icon').addClass('m-over');},
			function(){$(this).parent().find('.b-icon').removeClass('m-over');}
		);

		$('.b-icons-list .b-icon').hover(
			function(){$(this).addClass('m-over');},
			function(){$(this).removeClass('m-over');}
		);
	}

	$('.b-icons-list .b-icon').click(function(){
		var link = $(this).parent('.b-item').find('a').attr('href');
		window.open(link,'_self');
	});
}

// left navigation
function SideNav() {
	$('.b-aside .b-sidenav ul ul').each(function(){
		var current = $(this);
		if(current.children().size() > 0) {
			$(this).parent('li').addClass('m-nested');
		}
	});

	$('.b-sidenav > ul > li.m-active > a').click(function(){
		return false;
	});
}

// hovers
function Overs() {
	if(!isDevice){
		$('.l-header .b-first-bar .m-icon > a, .b-efficacy-chart .b-col').hover(
			function(){$(this).addClass('m-over');},
			function(){$(this).removeClass('m-over');}
		);
	}
	else {
		var overs = $('.l-header .b-first-bar .m-icon > a, .b-efficacy-chart .b-col');
		overs.live("touchstart", function() {
			overs.removeClass("m-over");
			$(this).addClass("m-over");
		}).live("touchend", function() {
			$(this).removeClass("m-over");
		});
	}
}

// adjusts the column height
function EqualHeight(group) {
	tallest = 0;
	group.each(function() {
		thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

// adjusts the height for sitemap columns
function SetEqualHeights() {
	EqualHeight($(".b-site-map:eq(0) .b-col ul"));
	EqualHeight($(".b-site-map:eq(1) .b-col ul"));
}