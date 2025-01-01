const infoButton = document.getElementById("info");
const modalOuter = document.querySelector('.modal-outer');

infoButton.addEventListener('click', handleInfoButtonClick);

modalOuter.addEventListener('click', handleModalClick);

function handleInfoButtonClick(){
    modalOuter.classList.add('open');
}

function handleModalClick(e){
    const isOutside = !e.target.closest('.modal-inner');
    const close = (e.target === document.getElementById("closePopup") );
    if (isOutside || close) {
        modalOuter.classList.remove('open');
    }
}