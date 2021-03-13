// $(window).on('load resize', function () {
// 	checkPosition();
// 	function checkPosition() {
//         if (window.matchMedia('(min-width: 1199px)').matches) {
// 			function fixButtonHeights() {
// 				var heights = new Array();
// 				$('.three-grid .link-section').each(function() {	
// 					$(this).css('min-height', '0');
// 					$(this).css('max-height', 'none');
// 					$(this).css('height', 'auto');
// 					 heights.push($(this).height());
// 				});
// 				var max = Math.max.apply( Math, heights );
// 				$('.three-grid .link-section').each(function() {
// 					$(this).css('height', max + 'px');
// 				});	
// 			}
		
// 		  $(document).ready(function() {
// 				fixButtonHeights();
// 				$(window).resize(function() {
// 					setTimeout(function() {
// 						  fixButtonHeights();
// 					}, 120);
// 				});
// 			});
// 		}
// 	}
// });