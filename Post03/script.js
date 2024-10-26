document.addEventListener('DOMContentLoaded',function(){
    const infoButton = document.getElementById("info");
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("closePopup")

    // opens popup when info button clicked
    infoButton.addEventListener('click', function(){
        popup.style.display = 'block';
    });

    //unneccessary?
    // closes popup when close button clicked
    closeButton.addEventListener('click', function(){
        popup.style.display = 'none';
    });

    //closes popup if click occurrs outside of popup

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // window.addEventListener('click', function(event) {
    //     if (!popup.contains(event.target) && event.target !== infoButton) {
    //         popup.style.display = 'none';
    //     }
    // });

});
