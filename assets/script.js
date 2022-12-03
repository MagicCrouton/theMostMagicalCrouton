var storyOne = $('#storyOne');
var storyTwo = $('#storyTwo');
var storyThree = $('#storyThree');
var storyFour = $('#storyFour');

var storyFormOne = $('#storyFormOne').val();
var storyFormTwo = $('#storyFormTwo').val();
var storyFormThree = $('#storyFormThree').val();
var storyFormFour = $('#storyFormFour').val();
var storyFormFive = $('#storyFormFive').val();
var storyFormSix = $('#storyFormSix').val();
var storyFormSeven = $('#storyFormSeven').val();
var storyFormEight = $('#storyFormEight').val();


var stories = [];
var story1 = {
    tile1:`you find yourself standing in front of * and wanting to`,
    tile2:`you ask * and do.`,
    tile3:`blurb 1 * asdfasdf 2.`,
    tile4:`blub 3 * asdfasdf`
    };


var randomGen = math.floor(math.random() * 4);
var storyGen = stories[randomGen];


var temp = stories[0].tile1.split("*");
for (i=0; i<temp.length ; ++i){
    story1.append(`temp[1]<span id=payload1 to dalle></span>`)
}
