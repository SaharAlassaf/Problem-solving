let arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] 

function highestRank(arr){
    const duplicates = arr.filter((item, index) => index !== arr.indexOf(item));
    return duplicates;
}