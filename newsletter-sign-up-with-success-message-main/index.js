$('button').click(function() {
    if ($("#container").css("display") === "flex") {
        $("#container").css("display", "none");
        $("#thanksbox").css("display", "flex");
    } else {
        $("#container").css("display", "flex");
        $("#thanksbox").css("display", "none");
    }
});