window.copyToClipboard = function(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

 var addrsField = $('.input_copy .txt');
addrsField.text("jpDotFranca@gmail.com");
$('.input_copy .icon').click(function() {
        copyToClipboard('.input_copy .txt');
        addrsField.addClass('flashBG')
          .delay('1000').queue(function(){
            addrsField.removeClass('flashBG').dequeue();
        });
    });