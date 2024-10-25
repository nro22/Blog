document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.querySelector(".info");
    const popup = document.querySelector(".popup");
    const closePopup = document.getElementById('closePopup');

    infoButton.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
