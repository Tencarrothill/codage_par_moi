$('document').ready(function(){
    $(".urlarea").each(function () {
        var $textInput = $(this).find('input[type="text"]');
        var $checkBox = $(this).find('input[type="checkbox"]');

        $textInput.on("input", function () {
            if ($.trim($(this).val()) !== "") {
                $checkBox.prop({
                    "disabled": false,
                    "checked": true
                }).attr("title", "활성화됨");
            } else {
                $checkBox.prop({
                    "disabled": true,
                    "checked": false
                }).attr("title", "비활성화");
            }
        });
    });
})//document