export function maxNumber(num1 , num2){
    if(typeof(num1) != 'number'||typeof(num2) != 'number'){
        return `Your Input should be have Number type`
    }
    if(num1 == num2){
        return `Numbers are equal`
    }
    if(num1<num2){
        return num2
    }else{
        return  num1
    }
}