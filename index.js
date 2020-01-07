const a =[17, 28, 30];
const b =[99, 16, 8];
function tripplets(a,b){
    let comparisonArr=[0,0];
    for(let i=0;i<3;i++)
    {
        if(a[i]>b[i])
        {
            comparisonArr[0]+=1;
        }
        else if(a[i]<b[i])
        {
            comparisonArr[1]+=1;
        }
    }
    return comparisonArr;
}

    // console.log(tripplets(a,b));
bigArr=[1000000001, 1000000002, 1000000003, 1000000004,1000000005]
function aVeryBigSum(ar)
{
    let sum = 0;
    for(let i=0;i<ar.length;i++)
    {
        sum+=ar[i]
    }
    return sum;
}

// console.log(aVeryBigSum(bigArr));
// matrixArr=[ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
// matrixArr = [[1,2,3],[4,5,6],[9,8,9 ]]

 
// const diagonalDifference=(arr)=>{
//     let sum1 = 0;
//     let sum2 =0;
//     let n = arr.length-1
//    for(let i =0; i<arr.length;i++)
//    {
//        sum1+=arr[i][i];
//        sum2+= arr[n-i][i]
//    }
//    let diff = Math.abs(sum1-sum2);
//     return diff
// }

// console.log(diagonalDifference(matrixArr))
const testArr= [-4,3,-9,0,4,1]

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let z = 0;
    for(let i = 0; i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            pos++
        }
        else if(arr[i]===0)
        {
            z++
        }
        else if(arr[i]<0)
        {
            neg++
        }
    }
    console.log((pos/arr.length).toFixed(6))
    console.log((neg/arr.length).toFixed(6))
    console.log((z/arr.length).toFixed(6))
}
plusMinus(testArr)