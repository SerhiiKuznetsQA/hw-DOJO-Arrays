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


export function insertHyphensBetweenEvenNumbers(str){
    if(typeof(str)!=='string' ){
         return `Sorry , data should be String`
    }
    let output = ''
for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        let item = parseFloat(str[i]);
        console.log(item);
    if(item % 2 === 0){
        output+="-" +item
    }else{
        output+=item
    }
    console.log(output);
}
 return output
}


console.log(insertHyphensBetweenEvenNumbers(str));

