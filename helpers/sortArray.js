function ascSortArr(arr){
    const newArr2 = []
    const positiveNumber = []
 const newArr = arrForSort.reduce((prev,current,index)=>{
if(current<0){
    console.log();
    newArr2.push(current)
}else{
    positiveNumber.push(current)
}
 },0)
 return newArr2.sort().reverse().concat(positiveNumber.sort())
}
console.log(ascSortArr(arrForSort));


 export function sortNumbersInArray(arr){
if(!Array.isArray(arr)){
    return `Input Should be a Array`
}else{
    for (let i = 0; i < arrForSort.length; i++) {
        const element = arrForSort[i];
        if(typeof(element) !== 'number'){
            return `Array should be contains Numbers`
        }
        
    }
}
    return arrForSort.sort((a,b)=> a- b)

}



function sortNumbersInArray(arr){
    const negativeNum = []
    const positiveNum = []
    for (let i = 0; i < arrForSort.length; i++) {
        const element = arrForSort[i];
        if(typeof(element) !== 'number'){
            return `Input Should be a Array`
        }
        if(element <= 0 ){
            console.log(element);
            negativeNum.push(element)
        }else{
            positiveNum.push(element)
        }
        
    }
    const result = negativeNum.sort().reverse().concat(positiveNum.sort())
    return result
}