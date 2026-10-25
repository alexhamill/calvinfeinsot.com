document.addEventListener("DOMContentLoaded", () => {
    const candels = document.getElementById('candles')
    const templatecandel = '<div class="candle"><div class="flame unlit"></div><div class="shaft"></div></div>'
    let clist = document.querySelectorAll(".candle");
    clist.forEach(togglelight)

    function addcandels(number){
        for(let i=0;i<number;i++)
        candels.innerHTML += templatecandel;
        clist = document.querySelectorAll(".candle");
        clist.forEach(togglelight)
    }

    
    function togglelight(candle){
        candle.onclick = function() {
            const c = candle.querySelectorAll(".flame");
            c[0].classList.toggle("unlit");
            checkcandles();
        }
    }
    function checkcandles(){
        const unlitcandles = document.querySelectorAll(".unlit");
        if (unlitcandles.length <= 0){
            caketransition();
        }
    }

    function caketransition(){
        document.querySelector("#cake").classList.toggle("slideleft");
        document.querySelector("#caketext").classList.toggle("slideleft")
        document.querySelector("#photo1con").classList.toggle("slideright")
        setTimeout(() => {
            window.location.href = "transitionphoto.html";
        }, 2000);
        
    }

    addcandels(4);
});
