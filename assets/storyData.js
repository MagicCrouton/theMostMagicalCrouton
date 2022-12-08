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
// var story2 = {
//     narration: [`You are driving a*and suddenly you see a critter that looks like a*`,
//     `you *and you hope*`,
//     `the critter grabs a*and*`,
//     `the critter*and everyone is*`],
//      payLoadGuide:[
//     ['a first person view of a person driving a','*','and suddenly seeing a', '*', 'on the road'],
//     ['a person','*','and praying about','*', "but you don't hear a thud"],
//     ['a','*','breakes through the wall holding a','*','to give to a magical crouton'],
//     ['a magical crouton is thinking','*','and a crowd of people around looking at the crouton is','*']
//     ],
//      style:`a ${style} ${art} of`
// }

var story2 = {
    narration: [`You are driving a*and suddenly you see a critter that looks like a*`,
    `you close your*and you hope*`,
    `the critter grabs a*and*`,
    `the critter*and everyone is*`],
    payLoadGuide:[
    ['first person view of someone driving a','*', 'and you see a', '*'],
    ['a driver closing his or her','*','and thinking','*'],
    ['a squirell swears a blood oath holding a','*','and','*'],
    ['a squirell','*','and','*']]
};
var story3 = {
    narration: [`While driving out of a tunnel a * is suddenly dropped on the planet of *`,
    `He/she encouters a * and that can also *`,
    `On this planet of * there are also  *`,
    `They eventually become *, and everyone is *`],
     payLoadGuide:[
    ['A','*','is driving out of tunnel, then being dropped on the plannet of', '*'],
    ['He/she encounters a ','*','it can also','*'],
    ['On this planet of','*','there are also','*'],
    ['They eventually become','*','and everyone is ','*']
    ],
     style:`a ${style} ${art} of`
};
// var story4 = {
//     narration: [`The most Magical Crouton has decided to fight a * with a*`,
//     `he remembers his * and decides to *`,
//     `suddenly a * burst through to door with a*`,
//     `the most Magical Crouton thinks * everyone watching is *`],
//      payLoadGuide:[
//     ['a Magical Crouton fights a','*','holding a', '*'],
//     ['a Magical Crouton remebers his','*','and decides to','*'],
//     ['a','*','breakes through the wall holding a','*','to give to a magical crouton'],
//     ['a magical crouton is thinking','*','and a crowd of people around looking at the crouton is','*']
//     ],
//      style:`a ${style} ${art} of`
// };
var story4 = {
    narration: [`One day a *make(s) some wishes about becoming a(n)*`,
    `Later on, the * share his/her wish with a friend a*`,
    `The wish is also about *and*`,
    `If the wish comes true, the * will be*.`],
     payLoadGuide:[
    ['*','is having a wish about becoming', '*'],
    ['*','then go share his/her wish with','*'],
    ['The wish is also about','*','and','*'],
    ['The ','*','will be','*','if his/her wish comes true.']
    ],
     style:`a ${style} ${art} of`
}