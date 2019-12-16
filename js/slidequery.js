$('#rdo1').click(function(e){    
    $('.slider li').fadeOut('slow').promise().done(function(){
        $('#pancake').fadeIn('slow');
    });
    $('.sldbtn li').css('background-color', 'rgba(255, 255, 255, 0.5)');
    $('#rdo1').css('background-color', 'white');
});


$('#rdo2').click(function(e){    
    $('.slider li').fadeOut('slow').promise().done(function(){
        $('#tiramisu').fadeIn('slow');
    });
    $('.sldbtn li').css('background-color', 'rgba(255, 255, 255, 0.5)');
    $('#rdo2').css('background-color', 'white');
});

$('#rdo3').click(function(e){    
    $('.slider li').fadeOut('slow').promise().done(function(){
        $('#eggtart').fadeIn('slow');
    });
    $('.sldbtn li').css('background-color', 'rgba(255, 255, 255, 0.5)');
    $('#rdo3').css('background-color', 'white');
});

