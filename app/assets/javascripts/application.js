// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require twitter/bootstrap
//= require underscore
//= require moment
//= require parsley
//= require select2
//= require jquery.slimscroll.min
//= require_tree .

!function ($) {
    $(function(){
        $('.slim-scroll').each(function(){
            var $self = $(this), $data = $self.data(), $slimResize;
            $self.slimScroll($data);
            $(window).resize(function(e) {
                clearTimeout($slimResize);
                $slimResize = setTimeout(function(){$self.slimScroll($data);}, 500);
            });
        });


    })
}(window.jQuery);
