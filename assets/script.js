var storyOne = $('#storyOne');
var storyTwo = $('#storyTwo');
var storyThree = $('#storyThree');
var storyFour = $('#storyFour');
var storySubmitBtnEl = $('#storySubmit');
var payLoad = [];

// var storyFormOne = $('#storyFormOne').val();
// var storyFormTwo = $('#storyFormTwo').val();
// var storyFormThree = $('#storyFormThree').val();
// var storyFormFour = $('#storyFormFour').val();
// var storyFormFive = $('#storyFormFive').val();
// var storyFormSix = $('#storyFormSix').val();
// var storyFormSeven = $('#storyFormSeven').val();
// var storyFormEight = $('#storyFormEight').val();

var stories = [];

var story1 = [
`you find yourself standing in front of * and wanting to`,
`you ask * and do.`,
`blurb 1 * asdfasdf 2.`,
`blub 3 * asdfasdf`
];

var storyGen = story1;

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
