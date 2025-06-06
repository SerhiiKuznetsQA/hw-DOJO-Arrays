function getElementsFromEndArray2(arr,n=1){
    if(!Array.isArray(arr)||typeof(n) !== 'number'){
        return `Check yours parameters Array should be Array and  n = number`
    }
    let num = arr.length
    let startPosition  = num - n 
    return arr.slice(startPosition)
}
