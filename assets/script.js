var pageOneEl = $('#pageOne');
var pageTwoEl = $('#pageTwo');
var storySubmitBtnEl = $('#storySubmit');
var payLoad = [];


setTimeout(function(){

pageOneEl.attr('class', 'invisible');
pageTwoEl.removeAttr('class');

var story1 = [
`story1 you find yourself standing in front of * and wanting to`,
`you ask * and do.`,
`blurb 1 * asdfasdf 2.`,
`blub 3 * asdfasdf`
];

var story2 = [
    `story2 you find yourself standing in front of * and wanting to`,
    `you ask * and do.`,
    `blurb 1 * asdfasdf 2.`,
    `blub 3 * asdfasdf`
];

var story3 = [
    `story3 you find yourself standing in front of * and wanting to`,
    `you ask * and do.`,
    `blurb 1 * asdfasdf 2.`,
    `blub 3 * asdfasdf`
];

var story4 = [
    `story4 you find yourself standing in front of * and wanting to`,
    `you ask * and do.`,
    `blurb 1 * asdfasdf 2.`,
    `blub 3 * asdfasdf`
];

var stories = [story1, story2, story3, story4];



var randomGen = Math.floor(Math.random() * 4);
var storyGen = stories[randomGen];


for (i=0; i < storyGen.length; ++i){
    var temp =storyGen[i].split("*");
    var tempEl = $(`#story${i+1}`);
    tempEl.text("");
    tempEl.html(`<span>${temp[0]}<input type="text" id="payLoadA${i}">${temp[1]}<input type="text" id="payLoadB${i}"</span>`)
}    

var storySubmitBtnEl = $('#storySubmit')
storySubmitBtnEl.on('click', function(event) {
    event.preventDefault()
    for (i=0; i < storyGen.length; ++i) {

        var tempPayload1 = $(`#payLoadA${i}`).val();
        console.log(tempPayload1);
        var tempPayload2 = $(`#payLoadB${i}`).val();
        console.log(tempPayload2);
        payLoad[i] = `${tempPayload1} ${tempPayload2}`
        }
    })
}, 5000)
