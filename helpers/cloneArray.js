export function copyArray(arr){
    if(Array.isArray(arr)){
        return arr.copyWithin(0)
    }else{
        return `Input data should be Array`
    }
}

export function copyArrayUseMap(arr){
       if(Array.isArray(arr)){
        return arr.map(item => item )
    }else{
        return `Input data should be Array`
    }
}
