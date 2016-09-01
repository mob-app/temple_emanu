// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
 var myApp = new Framework7({
    swipeBackPage: false,
    pushState: true,
    
    animateNavBackIcon: true,
    swipePanel: 'left',
    modalTitle: 'Title',
});
 
// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});


var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});     



myApp.onPageInit('sermons', function (page) {


  var str='net';  


$.ajax({
        async: true,
        
        type: "GET",
        url: 'http://gicebmedia.com/sahana/temple/rss.php?q=net',
        success: function (html) {
            $('#output').html(html);
            // $('#output').find('a').addClass('item-link');
        var anchor= $('#output').find('a');
         $(anchor).each(function(){
            var link=$(this).attr('href');
            
           $(this).attr('onclick', 'window.open("'+link+'","_system", "location=yes")');
           $(this).attr('href', 'javascript:void(0)');

        })
            
            
        },
    });
})


myApp.onPageInit('shabbat', function (page) {


  var str='heb';         

$.ajax({
        async: true,
        
        type: "GET",
        url: 'http://gicebmedia.com/sahana/temple/rss.php?q=heb',
        success: function (html) {
            $('#output').html(html);
           //$('#output').find('a').addClass('item-link');
           var anchor= $('#output').find('a');
           $(anchor).each(function(){
            var link=$(this).attr('href');
            
            $(this).attr('onclick', 'window.open("'+link+'","_system", "location=yes")');
            $(this).attr('href', 'javascript:void(0)');

           })
            
        },
    });
})




// var myFeed = myApp.feeds('.my-feed', {
//   url: 'http://images.apple.com/main/rss/hotnews/hotnews.rss',
//   openIn: 'popup'
// });









         
