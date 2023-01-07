var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// The total number of months included in the dataset
let totalMonths = finances.length;

// The total amount of profit/losses over the entire period
let totalProfit = 0;
for (let i =0; i<finances.length;i++) {
    totalProfit+=finances[i][1];
}

/*
The average of the changes in Profit/Losses over the entire period
First we need to track the changes in an array over the entire period
The changes variable considers the first month counting from 0 at the beginning of the first month in the entire period,
so finances and changes arrays have got the same length
and finances and changes arrays has got the same value for the first month
*/
let changeValue1 = 0;
let firstElementOfChanges1 = finances[0][1];
let changes1 = [];
changes1.push(firstElementOfChanges1);
// We need to subtract 1 from finances.length,
// otherwise the foor loop would not be able the reach the i+1th element for the last element
for (let i = 0; i<finances.length-1; i++) {
    changeValue1 = finances[i+1][1]-finances[i][1];
    changes1.push(changeValue1);
}
// Then wee need to find the average value in the changes array
let averageChange1 = 0;
for (let i= 0; i<changes1.length;i++) {
    averageChange1+=changes1[i];
}
averageChange1 = Math.round(((averageChange1 / changes1.length)+Number.EPSILON)*100) / 100;

// Then we need to find the greatest value in the changes array and match it with the date in the finances array
// Because both arrays have got the same length and order the index number will be the same
let greatestProfit1 = [finances[changes1.indexOf(Math.max(...changes1))][0] , Math.max(...changes1)];

// Then we need to find the greatest loss over the entire period with the same approach
let greatestLoss1 = [finances[changes1.indexOf(Math.min(...changes1))][0], Math.min(...changes1)];

// Print statements
console.log("Financial Analysis");
console.log("------------------------");
console.log("Total Months: " + totalMonths);
console.log("Total Profit: $" + totalProfit);
console.log("Average Change: $" + averageChange1);
console.log("Greatest Increase in Profits: " + greatestProfit1[0] + " ($" + greatestProfit1[1] + ")");
console.log("Greatest Decrease in Profits: " + greatestLoss1[0] + " ($" + greatestLoss1[1] + ")");
console.log("---------------------------------");
console.log("---------------------------------");


/*
------------------------------------------------------------------------------
------------------------------------------------------------------------------
*/

/*
There is another approach to tackle this problem based on that
we don't consider the first month's value in the finances array as a change
so the changes array this time contains 1 less element than the finances
*/
let changeValue2 = 0;
let changes2 = [];

for (let i = 0; i<finances.length-1; i++) {
    changeValue2 = finances[i+1][1]-finances[i][1];
    changes2.push(changeValue2);
}

let averageChange2 = 0;
for (let i= 0; i<changes2.length;i++) {
    averageChange2+=changes2[i];
}
averageChange2 = Math.round(((averageChange2 / changes2.length)+Number.EPSILON)*100) / 100;

// The array of changes is 1 element shorter than the finances so we need to add 1 to the first index of finances
let greatestProfit2 = [finances[changes2.indexOf(Math.max(...changes2))+1][0] , Math.max(...changes2)];

// Then we need to find the greatest loss over the entire period with the same approach
let greatestLoss2 = [finances[changes2.indexOf(Math.min(...changes2))+1][0], Math.min(...changes2)];

// Print statements
console.log("Financial Analysis");
console.log("------------------------");
console.log("Total Months: " + totalMonths);
console.log("Total Profit: $" + totalProfit);
console.log("Average Change: $" + averageChange2);
console.log("Greatest Increase in Profits: " + greatestProfit2[0] + " ($" + greatestProfit2[1] + ")");
console.log("Greatest Decrease in Profits: " + greatestLoss2[0] + " ($" + greatestLoss2[1] + ")");