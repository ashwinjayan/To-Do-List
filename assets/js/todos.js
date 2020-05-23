//check off specific todos by clicking
$("ul").on("click", "li", function (e) {
    $(this).toggleClass("completed");
    e.stopPropagation();
});

//click on x to delete todo
$("ul").on("click", "span", function (event) {
    $(this)
        .parent()
        .fadeOut(300, function () {
            $(this).remove();
        });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todo text
        var todoInput = $(this).val();
        $(this).val("");

        //create new li and add to ul
        $("ul").append(
            "<li><span><i class='far fa-trash-alt'></i></span> " +
                todoInput +
                "</li>"
        );
    }
});

$("h1").on("click", "span", function () {
    $("input[type='text']").slideToggle();
});
