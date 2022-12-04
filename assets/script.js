var pageOneEl = $('#pageOne');
var pageTwoEl = $('#pageTwo');
var storySubmitBtnEl = $('#storySubmit');
var payLoad = [];
var APIResponse=[];
var apiKey = `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`

// story data has been moved to separate sheet storyData.js

// API function
function fetchDallE(payLoad, i) {
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
        console.log('done')
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
    storySubmitBtnEl.on('click', function(event) {
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
        })
            console.log(payLoad)


}, 5000)
