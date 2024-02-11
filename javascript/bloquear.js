// Deshabilitar la funcionalidad de retroceso y adelante del navegador
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

// Desactivar los botones de retroceso y adelante
window.onload = function () {
    disableBackForwardButtons();
};

function disableBackForwardButtons() {
    if (typeof history.pushState === "function") {
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    } else {
        window.onhashchange = function () {
            window.location.hash = "no-back-button";
        };
        window.location.hash = "no-back-button";
    }
}
