$(function () {
    var $radioBtn = $("input:radio");

    $radioBtn.change(function () {
        $radioBtn.parent().removeClass("checked");
        $(this).parent().addClass("checked");
    });

    $("#view").change(function () {
        if ($("#view option:selected").val() == "list") {
            $(".product-container").removeClass("grid");
            $(".product-container").addClass("list");
        } else {
            $(".product-container").removeClass("list");
            $(".product-container").addClass("grid");
        }
    });

    var $checkbox = $("input:checkbox");
    $checkbox.change(function () {
        if (this.checked) {
            $(this).parent().addClass("checked");
        } else {
            $(this).parent().removeClass("checked");
        }
    });
});