// code your solution here
saturdayFun();
function saturdayFun(doThis){
    if (doThis != null) {
    return `This Saturday, I want to ${doThis}!`;
    } else {
        return `This Saturday, I want to roller-skate!`;
    };
}
const mondayWork = function(doThis) {
    if (doThis != null) {
    return `This Monday, I will ${doThis}.`
    } else {
        return "This Monday, I will go to the office."
    }
}
function wrapAdjective(str = `*`) {
    return function (adj = `special`) {
        return `You are ${str}${adj}${str}!`;
        }
    }
