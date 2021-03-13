/*-----------------------------------------------------------------------------------

 Website Name:Vaultspay
 Website URI: 
 Description: 
 Author: 

 ----------------------------------------------------------------------------------- */
 // 01.Image to Background



 /*=====================
     01.Image to Background
  ==========================*/
  $(".bg-top").parent().addClass('b-top');
  $(".bg-bottom").parent().addClass('b-bottom');
  $(".bg-center").parent().addClass('b-center');
  $(".bg_size_content").parent().addClass('b_size_content');
  $(".bg-img").parent().addClass('bg-size');
  $(".bg-img.blur-up").parent().addClass('blur-up lazyload');

  jQuery('.bg-img').each(function() {

      var el = $(this),
          src = el.attr('src'),
          parent = el.parent();

      parent.css({
          'background-image': 'url(' + src + ')',
          'background-size': 'cover',
          'background-position': 'center',
          'display': 'block'
      });

      el.hide();
  });

