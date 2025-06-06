export function firstItemUseFilter(arr){
    return arr.filter((item,index) => index === 0 )
}



export function firstItem(arr){
       if(Array.isArray(arr)){
       return ` Yours item with index 0 : ${arr[0]}`
    }else{
        return `Input data should be Array`
    }
}
