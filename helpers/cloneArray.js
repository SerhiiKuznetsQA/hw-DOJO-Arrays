export function copyArrayUseMap(arr){
       if(Array.isArray(arr)){
        return arr.map(item => item )
    }else{
        return `Input data should be Array`
    }
}
