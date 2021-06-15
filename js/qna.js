/*
  Yoast FAQ JS
*/
jQuery(document).ready(function() {
    jQuery(".wp-block-yoast-faq-block .schema-faq-section:first-child").addClass("active").children(".schema-faq-answer").slideDown();//Remove this line if you dont want the first one to be opened automatically.
    jQuery(".schema-faq-question").on("click", function(){
      if( jQuery(this).parent().hasClass("active") ){
        jQuery(this).next().slideUp();
        jQuery(this).parent().removeClass("active");
      }
      else{
        jQuery(".schema-faq-answer").slideUp();
        jQuery(".schema-faq-section").removeClass("active");
        jQuery(this).parent().addClass("active");
        jQuery(this).next().slideDown();
      }
    });
  });