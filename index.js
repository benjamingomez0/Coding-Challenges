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

    console.log(tripplets(a,b));
