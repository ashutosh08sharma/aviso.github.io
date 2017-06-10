/**
 * Created by Ashutosh on 6/9/2017.
 */
$(document).ready(function(){
    $('#less').click(function(){
        $('.bestCase2').hide(function(){
            $('.commit2').hide();
        });
        $('#more').click(function(){
            $('.bestCase2').show(function(){
                $('.commit2').show();
            });
        });
    });
});