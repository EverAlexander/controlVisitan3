$(document).ready(function() {
    $("#jugadoress").change(function() {
        var selectedOption = $(this).val();
        var jugadorContainer2 = $("#jugadorContainer2");
        var jugadorContainer3 = $("#jugadorContainer3");
        var jugadorContainer4 = $("#jugadorContainer4");

        var jugador2 = $("#nombreJ2");
        var jugador3 = $("#nombreJ3");
        var jugador4 = $("#nombreJ4");

        if (selectedOption === "opcion1") {
            jugadorContainer2.hide();
            jugadorContainer3.hide();
            jugadorContainer4.hide();
            
            jugador2.prop('readonly', true);
            jugador3.prop('readonly', true);
            jugador4.prop('readonly', true);

        } else if (selectedOption === "jugador2") {
            jugadorContainer2.show();
            jugadorContainer3.hide();
            jugadorContainer4.hide();

            jugador2.val("");
            jugador3.val("");
            jugador4.val("");

            jugador2.prop('readonly', false);
            jugador3.prop('readonly', true);
            jugador4.prop('readonly', true);
            
        } else if (selectedOption === "jugador3") {
            jugadorContainer2.show();
            jugadorContainer3.show();
            jugadorContainer4.hide();

            jugador2.val("");
            jugador3.val("");

            jugador2.prop('readonly', false);
            jugador3.prop('readonly', false);
            jugador4.prop('readonly', true);

        } else if (selectedOption === "jugador4") {
            jugadorContainer2.show();
            jugadorContainer3.show();
            jugadorContainer4.show();

            jugador2.val("");
            jugador3.val("");
            jugador4.val("");

            jugador2.prop('readonly', false);
            jugador3.prop('readonly', false);
            jugador4.prop('readonly', false);
        }
    });
});