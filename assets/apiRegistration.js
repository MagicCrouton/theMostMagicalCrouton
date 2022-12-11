var APIButtonEl = $('#APISubmitBtn');
var APIFormEl = $('#APIentry');

APIButtonEl.on('click', function(event){
    event.preventDefault();
    localStorage.setItem('key', `${APIFormEl.val()}`);
    window.location.href= "./comicindex.html";
})