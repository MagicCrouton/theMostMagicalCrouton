var artStyles = ['comicbook style','popArt','baroque','street Art','surrealism'];

var subStyle = ['cyberpunk', 'steampunk', 'synthwave', 'hand Drawn','photorealistic'];

var randomGen = Math.floor(Math.random() * artStyles.length);
var randomArt = Math.floor(Math.random() * artStyles.length);
var art = artStyles[randomGen];
var randomGen = Math.floor(Math.random() * subStyle.length);
var randomStyle = Math.floor(Math.random() * subStyle.length);
var style = subStyle[randomGen];


var story1 = {
    narration: [`The most Magical Crouton has decided to fight a * with a*`,
    `he remembers his * and decides to *`,
    `suddenly a * burst through to door with a*`,
    `the most Magical Crouton thinks * everyone watching is *`],
     payLoadGuide:[
    ['a Magical Crouton fights a','*','holding a', '*'],
    ['a Magical Crouton remebers his','*','and decides to','*'],
    ['a','*','breakes through the wall holding a','*','to give to a magical crouton'],
    ['a magical crouton is thinking','*','and a crowd of people around looking at the crouton is','*']
    ],
     style:`a ${style} ${art} of`
};
var story2 = {
    narration: [`You are driving a*and suddenly you see a critter that looks like a*`,
    `you *and you hope*`,
    `the critter grabs a*and*`,
    `the critter*and everyone is*`],
     payLoadGuide:[
    ['a first person view of a person driving a','*','and suddenly seeing a', '*', 'on the road'],
    ['a person','*','and praying about','*', "but you don't hear a thud"],
    ['a','*','breakes through the wall holding a','*','to give to a magical crouton'],
    ['a magical crouton is thinking','*','and a crowd of people around looking at the crouton is','*']
    ],
     style:`a ${style} ${art} of`
}
// var story2 = {
//     narration: [`You are driving a*and suddenly you see a critter that looks like a*`,
//     `you close your*and you hope*`,
//     `the critter grabs a*and*`,
//     `the critter*and everyone is*`],
//      tile1: 'Magical Crouton holding a',
//      tile2:'Magical Crouton holding a',
//      tile3:'Magical Crouton holding a',
//      tile4:'Magical Crouton holding a',
// };
var story3 = {
    narration: [`The most Magical Crouton has decided to fight a * with a*`,
    `he remembers his * and decides to *`,
    `suddenly a * burst through to door with a*`,
    `the most Magical Crouton thinks * everyone watching is *`],
     payLoadGuide:[
    ['a Magical Crouton fights a','*','holding a', '*'],
    ['a Magical Crouton remebers his','*','and decides to','*'],
    ['a','*','breakes through the wall holding a','*','to give to a magical crouton'],
    ['a magical crouton is thinking','*','and a crowd of people around looking at the crouton is','*']
    ],
     style:`a ${style} ${art} of`
};
var story4 = {
    narration: [`The most Magical Crouton has decided to fight a * with a*`,
    `he remembers his * and decides to *`,
    `suddenly a * burst through to door with a*`,
    `the most Magical Crouton thinks * everyone watching is *`],
     payLoadGuide:[
    ['a Magical Crouton fights a','*','holding a', '*'],
    ['a Magical Crouton remebers his','*','and decides to','*'],
    ['a','*','breakes through the wall holding a','*','to give to a magical crouton'],
    ['a magical crouton is thinking','*','and a crowd of people around looking at the crouton is','*']
    ],
     style:`a ${style} ${art} of`
};