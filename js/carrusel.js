var current = 0;
var imagenes = new Array();

$(document).ready(function () {
    var numImages = 6;
    if (numImages <= 3) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }

    $('.left-arrow').on('click', function () {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 2;
        }

        $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);

        return false;
    });



    $('#right-arrow').on('click', function () {
        if (numImages > current + 2) {
            current = current + 1;
        } else {
            current = 0;
        }

        $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);

        return false;
    });
});