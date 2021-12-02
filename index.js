function saturdayFun(toDo='roller-skate') {
    return `This Saturday, I want to ${toDo}!`;
}

function mondayWork(toDo='go to the office') {
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(prompt = '*'){
    
    let inner = function (adj = 'special') {
        return `You are ${prompt}${adj}${prompt}!`;
    };

    return inner;
}

console.log(wrapAdjective('dog', 'dogs'));