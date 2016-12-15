$(document).ready(function () {
    var MAX_DESCRIPTION_LENGHT = 50;
    var MAX_MERCHANT_LENGHT = 50;

    /**
     * Отображение / скрытие полного описания заказа при нажатии на кнопку
     */
    function order_info() {       
        var order_info_length = $('.js_header_order_info_text').text().length;
        var merchant_length = $('.js_header_merchant_name').text().length;
        
        var merchant_name = $('.js_header_merchant_name');
        var parent = $('.js_header_order_info');
        var more = $('.js_header_order_info_more');
        var close = $('.js_header_order_info_close');
        

        if (order_info_length > MAX_DESCRIPTION_LENGHT || merchant_length > MAX_MERCHANT_LENGHT) {
            more.show();
        }
        else {
            more.hide();
        }

        more.on('click', function () {
            merchant_name.addClass('order_title_full');
            parent.addClass('is_active');
            return false;
        });

        close.on('click', function () {
            merchant_name.removeClass('order_title_full');
            parent.removeClass('is_active');
            return false;
        });
        
        parent.click(function (event) {
            event.stopPropagation();
        });
    }
    order_info();
});