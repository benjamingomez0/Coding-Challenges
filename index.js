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

console.log(aVeryBigSum(bigArr));
