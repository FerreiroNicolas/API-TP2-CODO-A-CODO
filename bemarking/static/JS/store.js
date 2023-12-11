document.addEventListener("DOMContentLoaded", function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


    if (!isMobile) {
        var script = document.createElement('script');
        script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
        document.head.appendChild(script);

        script.onload = function() {
            var typed = new Typed("#multiple-text", {
                strings: ["trabajan con nosotros.", "confían en nosotros."],
                typeSpeed: 100,
                backSpeed: 100,
                startDelay: 500,
                backDelay: 1000,
                loop: true,
                smartBackspace: true
            });
        };
    }
});
