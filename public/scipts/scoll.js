$('nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    window.scrollTo($anchor.left,$anchor.top);
    return false;
}
);

//Scrolling JS solution found on stack overflow
//https://stackoverflow.com/questions/52091560/need-smooth-a-scroll-in-given-code-for-single-page-website?noredirect=1&lq=1