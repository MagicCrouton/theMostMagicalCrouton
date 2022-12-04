var pageOneEl = $('#pageOne');
var pageTwoEl = $('#pageTwo');
var comicLayoutEl = $('#comic-layout')
var storySubmitBtnEl = $('#storySubmit');
var quotes = [];
var payLoad = [];
var APIResponse=[];
var apiKey = `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`

// story data has been moved to separate sheet storyData.js

// API function
// this function calls to openAPI/DallE then returns the image url. payload is the string to feed the AI 
// comicLayoutEl is the jquery element that the picture will append to and i is the iterator
function fetchDallE(payLoad,comicLayoutEl,i) {
    fetch("https://api.openai.com/v1/images/generations", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "prompt": `${payLoad}`,
            "n": 1,
            "size": `256x256`,
            "response_format": 'url'
        })
    })
    .then(response => {
        return response.json()
    })
    .then(data=>{
        APIResponse =  data;
        pictureUrl= APIResponse.data[0].url;
        comicLayoutEl.append(`
        <div class="card spot${i}" style="width: 18rem;">
        <img class="card-img-top" src="${APIResponse.data[0].url}" alt="Image${i}">
        <div class="card-body">
          <p class="card-text">${payLoad}</p>
        </div>`)
    })
        .catch(error => {
            console.log(error)
        });

        // use APIResponse.data[0].url to grab image url.
}
// the fetch function retrieves an image and you need to use APIResponse.data[0].url to grab image url.
// end API function

    var stories = [story1, story2, story3, story4];
    var randomGen = Math.floor(Math.random() * stories.length);
    var storyCurrent= stories[randomGen]
    var storyGen = storyCurrent.narration;

setTimeout(function(){

    pageOneEl.attr('class', 'invisible');
    pageTwoEl.removeAttr('class');
    for (i=0; i < storyGen.length; ++i){
        var temp =storyGen[i].split("*");
        var tempEl = $(`#story${i+1}`);
        tempEl.text("");
        tempEl.html(`
        <span>
                 ${temp[0]}<input class="specificInput" type="text" id="payLoadA${i}">${temp[1]}
                  <input class="specificInput" type="text" id="payLoadB${i}"
        </span>`)
    }    

    var storySubmitBtnEl = $('#storySubmit')
    storySubmitBtnEl.on('click', function(event){
        event.preventDefault(event);
        for (i=0; i < storyGen.length; ++i) {
            var tempPayload = [];
            tempPayload[0] = $(`#payLoadA${i}`).val();
            tempPayload[1] = $(`#payLoadB${i}`).val();
            var currentTemp = stories[randomGen].payLoadGuide[i];
            var index = 1;
                for (n=0; n<2; ++n) {
                    index = currentTemp.indexOf('*');
                    currentTemp[index] = ` ${tempPayload[n]} `;
                }
            currentTemp = currentTemp.join('');
            // console.log(currentTemp);
            payLoad[i] = `${stories[randomGen].style} ${currentTemp}`;
            }

            // fetchDallE(payLoad[1], comicLayoutEl, i)

            payLoad.forEach(element => {
            var i = 1;
              fetchDallE(element, comicLayoutEl, i);
            i = i+1;    
            })

            
})


}, 5000)
