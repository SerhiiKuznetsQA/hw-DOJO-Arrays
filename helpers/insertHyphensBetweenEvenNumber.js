export function insertHyphensBetweenEvenNumbers(arr){
   if(!Array.isArray(arr)){
    return `Sorry , data should be Array`
   }
    let newArray = arr
for (let i = 0; i < newArray.length; i++) {
    const element = newArray[i];
    if(typeof(element) !== 'number'){
        return `Should be a number : ${element}`
    }
    console.log(element);
    if(element % 2 === 0){
       newArray[i]=element-element*2;
    }
}
 return newArray
}