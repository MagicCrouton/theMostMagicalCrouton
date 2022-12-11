var buttonEl = $('#clickMe')
var hideEl = $('#hideMe')
var removeEl = $('#hideMeTwo')


function removeImage(){
    removeEl.remove()
    hideEl.remove()
    buttonEl.remove()
}

buttonEl.on('click', function(){
    if (localStorage.getItem('key') === null) {
        window.location.href="./APIRegistration.html"
    }
})

