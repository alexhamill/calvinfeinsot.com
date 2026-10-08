document.addEventListener("DOMContentLoaded", () => {

    function Startup(){
        setTimeout(() => {
            document.querySelector("#photo1con").classList.toggle("slidedown");
        }, 500);
        setTimeout(() => {
            window.location.href = "photos.html";
        }, 500);
    }

    Startup();
});