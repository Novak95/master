//1.
const array1 = ["", 0, -0, +0, null, NaN, false, undefined, "foo", 23, {a: 1}, true];
const array2 = [];
for (let i = 0; i < array1.length; i++) {
    if (array1[i]) {
        array2.push(array1[i]);
    }
}
console.log(array1);
console.log(array2);


//2.
function indexOfArray(a, b) {
    let c = 0;
    a.sort();
    for (let i = 0; i < a.length; i++) {
        if (a[i] < b) {
            c = a.indexOf(a[i]);
        }
    }
    console.log(a, c);
}

indexOfArray([5,1,4,2], 3);


//3.
function groupArray(arr1, breaker) {
    let arr2 = [];
    let count1 = 0;
    let count2 = breaker;
    if (breaker > 3 && !(arr1.length % breaker === 0)){
        for (let i = 0; i <= arr1.length + breaker; i += count1 - (arr1.length % breaker)){
            if (!(arr1.slice(count1, count2).length < breaker)) {
                arr2.push(arr1.slice(count1, count2));
            }
            count1 += (arr1.length % breaker);
            count2 += (arr1.length % breaker);
        }
        console.log(arr2);
    } else if (!(arr1.length % breaker === 0)) {
        for (let i = 0; i <= arr1.length + (arr1.length % breaker) + breaker; i += count1 - (arr1.length % breaker)){
            if (!(arr1.slice(count1, count2).length < breaker)) {
                arr2.push(arr1.slice(count1, count2));
            }
            count1 += breaker - (arr1.length % breaker);
            count2 += breaker - (arr1.length % breaker);
        }
        console.log(arr2);
    } else {
        for (let i = 0; i < arr1.length; i += breaker){
            arr2.push(arr1.slice(count1, count2));
            count1 += breaker;
            count2 += breaker;
        }
        console.log(arr2);
    }
}

groupArray([1, 2, 3, 4, 5], 3);


//4.
function pair() {
    const mathArr1 = [];
    const mathArr2 = [];
    while (mathArr1.length < 10) {
        var random1 = Math.floor(Math.random() * 10);
        var random2 = Math.floor(Math.random() * 10);
        if (random1 !== random2 && !mathArr1.includes(random1) && !mathArr1.includes(random2)) {
            mathArr1.push(random1);
            mathArr1.push(random2);
            mathArr2.push([random1, random2]);
        }
    }
    console.log(mathArr2);
}

pair();