export function modalWidget(id)
{
    let modal = document.querySelector('.modal');
    modal.classList.add("on")
    let el = document.getElementById(id);  // can also use a query selector
    let body = document.querySelector("body");
    let bg = document.createElement("div");
    bg.className = "modal-js-overlay";
    body.appendChild(bg);

    let escapeBtn = document.createElement("span");
    escapeBtn.className = "modal-js-close";
    escapeBtn.innerHTML = "✕";
    modal.appendChild(escapeBtn);

    let overlay = body.querySelector(".modal-js-overlay");
    
    overlay.addEventListener("click", closeModal);
    escapeBtn.addEventListener('click', closeModal)

    function closeModal() {
        let closebtnn = document.querySelector(".modal-js-close");
        body.removeChild(overlay);
        modal.classList.remove('on');
        modal.removeChild(closebtnn);
    };
}