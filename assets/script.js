var pageOneEl = $('#pageOne');
var pageTwoEl = $('#pageTwo');
var pageThreeEl = $('pageThree');
var comicLayoutEl = $('#comic-layout');
var storySubmitBtnEl = $('#storySubmit');
var comicTargetEl = $('#comicTarget');
var target1EL = $('target1');
var target2EL = $('#target2');
var target3EL = $('#target3');
var target4EL = $('#target4');
var saveBtnEl = $('#saveBtn');
var quotes = [];
var payLoad = [];
var APIResponse=[];
var captions=[];
var clearEl = $('#clear');
var urls = [];
var comicText = [];

// checks to see if there is local memory for the array
if(localStorage.getItem('historyImg') != null){
    var historyImgArr = JSON.parse(historyImg);
    var historyCapArr = JSON.parse(historyCap);
}

    // for (n=0; n < captions.length; ++n) {
    //     var tempImg = urls[n];
    //     var tempCap = captions[n];
    //     historyImgArr.push(tempImg);
    //     historyCapArr.push(tempCap);
    // }

// API functions
// this function takes in words and makes them better
function fetchText(payLoad,i) {
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('key')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": `make the following a caption for a scene ${payLoad}`,
            "max_tokens": 500,

            "temperature": .9,
        })
    })
    .then(response => {
        return response.json()
    })
    .then(data=>{
        APIResponse =data;
        captions[i]=(data.choices[0].text);
        // captions.undefined returns back the string.
    })
        .catch(error => {
            console.log(error)
        });
    }
        
// this function calls to openAPI/DallE then returns the image url. payload is the string to feed the AI 
// comicLayoutEl is the jquery element that the picture will append to and i is the iterator

//payload is single string
function fetchDallE(payLoad,x,i) {
    fetch("https://api.openai.com/v1/images/generations", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('key')}`,
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
        // console.log(data);
        pictureUrl= APIResponse.data[0].url;
        urls[i]=pictureUrl;
        x.append(`
        <figure class="figure">
            <img src="${APIResponse.data[0].url}" class="figure-img img-fluid rounded" alt="Image${i}">
            <figcaption class="figure-caption">${captions[i]}</figcaption>
        </figure>`);
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

    pageOneEl.remove();
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
    var loadingEl = $('#loading');

    storySubmitBtnEl.on('click', function(event){
        event.preventDefault(event);
        storySubmitBtnEl.attr('class', 'invisible');
        clearEl.attr('class', 'invisible');
        pageTwoEl.attr('class', 'invisible');
        loadingEl.attr('class', 'loading');

        comicLayoutEl.empty()
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
            // payLoad[i] = `${stories[randomGen].style} ${currentTemp}`;
             payLoad[i] = ` ${currentTemp}`;       
            }

            // fetchDallE(payLoad[1], comicLayoutEl, i)
            var i = 1
            payLoad.forEach(element => {
              fetchText(element,i);
              if (i === 1) {
                fetchDallE(element, target1EL, i);
              }
              else if (i === 2) {
                fetchDallE(element, target2EL, i);
              }
              else if (i === 3) {
                fetchDallE(element, target3EL, i);
              }
              else {
                fetchDallE(element, target4EL, i);
              }
            i = i+1;
            })
            
            setTimeout(function(){
                loadingEl.removeAttr('class');
            },5000)

})


}, 5000)

clearEl.on("click", () => {
    console.log(`Cleared the display`)
    pageOneEl.children().remove();
  

  })

  saveBtnEl.on('click', function() {
    if (localStorage.getItem('historyImg')===null){
        var historyImgArr = [];
        var historyCapArr = [];
    }

    for (n=0; n < captions.length; ++n) {
        var tempImg = urls[n];
        var tempCap = captions[n];
        historyImgArr.push(tempImg);
        historyCapArr.push(tempCap);
    }
    localStorage.setItem('historyImg', `${JSON.stringify(historyImgArr)}`);
    localStorage.setItem('historyCap', `${JSON.stringify(historyCapArr)}`);
  }) 
  
