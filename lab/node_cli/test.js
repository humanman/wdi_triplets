//Part 1 and 2
var arg1 = process.argv[2];
var arg2 = process.argv[3];

var mta = {
    'lines': ['N', '6', 'L'],
    'Ntrain': ['times square', '34th', '28th', '23rd', 'union square', '8th'],
    'Ltrain': ['8th', '6th', 'union square', '3rd', '1st'],
    'sixTrain': ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']
}

if (arg1 === 'lines') {
    console.log(mta.lines);
}

if (arg1 === 'stops') {
    if (arg2 === 'L') {
        console.log(mta.Ltrain);
    } else if (arg2 === 'N') {
        console.log(mta.Ntrain);
    } else if (arg2 === '6') {
        console.log(mta.sixTrain);
    }
}

//Part 3 ---- I had a lot of difficulties with this one. Heather gave me some help but I still am not able to get it.
var mta = {
    'lines': ['N', '6', 'L'],
    'Ntrain': ['times square', '34th', '28th', '23rd', 'union square', '8th'],
    'Ltrain': ['8th', '6th', 'union square', '3rd', '1st'],
    'sixTrain': ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']
}

var calculate = function calculate(startingLine, stopOne, endingLine, stopTwo){
   if (startingLine === "Ltrain" && endingLine === "Ltrain"){
       var startingLineIndex = mta.stopsL.indexOf(stopOne);
       var endingLineIndex = mta.stopsL.indexOf(stopTwo);
       var stopDiff = startingLineIndex - endingLineIndex;
       console.log(Math.abs(stopDiff));
   } else if (startingLine === "sixTrain" && endingLine === "sixTrain"){
       var startingLineIndex = mta.stopsL.indexOf(stopOne);
       var endingLineIndex = mta.stopsL.indexOf(stopTwo);
       var stopDiff = startingLineIndex - endingLineIndex;
       console.log(Math.abs(stopDiff));
   } else if (startingLine === "Ntrain" && endingLine === "Ntrain"){
       var startingLineIndex = mta.stopsL.indexOf(stopOne);
       var endingLineIndex = mta.stopsL.indexOf(stopTwo);
       var stopDiff = startingLineIndex - endingLineIndex;
       console.log(Math.abs(stopDiff))
   }
};
