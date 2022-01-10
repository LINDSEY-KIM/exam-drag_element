(function(){

    const wrap = document.querySelector(".wrap"),
    header = wrap.querySelector("header");

    function onDrag({movementX, movementY}) {
        let getStyle = window.getComputedStyle(wrap);
        let left = parseInt(getStyle.left);
        let top = parseInt(getStyle.top);
        wrap.style.left = `${left + movementX}px`;
        wrap.style.top = `${top + movementY}px`;
    }

    header.addEventListener("mousedown", () => {
        header.classList.add("active");
        header.addEventListener("mousemove", onDrag);
    });
    document.addEventListener("mouseup", () => {
        header.classList.remove("active");
        header.removeEventListener("mousemove", onDrag);
    });

})();