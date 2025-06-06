export function getELements(arr,count=1){
      if(Array.isArray(arr)){
       return arr.slice(0,count)
    }else{
        return `Input data should be Array`
    }
}