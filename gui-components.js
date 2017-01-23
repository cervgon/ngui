/*
The MIT License (MIT)

Copyright (c) 2016 Gonzalo Cervantes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Version 0.1
// github.com/cervgon/gui-components

function guiComponentsFunctions(){
    $('switch').each(function(){
        var content = $(this).html();
        var html  = '';
        var switchID = $(this).attr('id');
        var checked = $(this).attr('checked');
        var checkedClass = '';
        if(checked!== undefined){checkedClass = ' checked'}
        if (switchID !== undefined){
                html = '<div class="slideOne'+checkedClass+'"><input type="checkbox" value="None" id="'+switchID+'" name="check" /><label for="'+switchID+'"></label></div>';
            }
        $(this).replaceWith(html);
        if(checked != undefined){$('#'+switchID).prop('checked', true);}
    });
    $('.slideOne label').click(function(){
        var bgcolor = $(this).parent().css("background-color");
        if(bgcolor =='rgb(255, 255, 255)' || bgcolor == '#fff'){
           $(this).parent().addClass('checked');
        }
        else{
            $(this).parent().removeClass('checked');
        }    
    });
    $(".dropdown").click(function(){
        console.log('dhadas');
        if($(this).hasClass("open")){
            $(this).removeClass("open");
        }
        else{
            $(this).addClass("open");
        }
    });
    $(".dropdown .inner .list").click(function(){
        $(this).parent().parent().removeClass("open");
    });
    // ScrollToTop
    $(".scrollToTop").click(function(){
        $('html,body').animate({scrollTop: "0px"}, 500);
    });
    var hasScrolled = false;
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 400){
            $('.scrollToTop').removeClass('fadeOutBottom');
            $('.scrollToTop').addClass('fadeInBottom');
            hasScrolled = true;
        }
        else{
            if(hasScrolled){
                $('.scrollToTop').removeClass('fadeInBottom');
                $('.scrollToTop').addClass('fadeOutBottom');
            }
        }
    });
}

function loadJQ() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    var t = 0;
    var timer = setInterval(function(){
      if (window.jQuery) {
        guiComponentsFunctions();
        clearInterval(timer);
      }
      else {
        t++;
        if (t>100){
            clearInterval(timer);
            console.error("This is taking too much.. :(");
        }
      }
    },50);
}

document.addEventListener("DOMContentLoaded", function(event){
    // Check if jQuery is loaded.
    if (!window.jQuery){loadJQ();}
    else {guiComponentsFunctions();}
});
