function sing(){
    let str=""
    for (let i=1; i<=6; i++){
        if (i === 1 || i === 3) str+="let it be, let it be, let it be, let it be, "
        else if (i === 2) str+="there will be an answer, "
        else if (i === 4 || i === 6) str +="let it be"
        else str+=", whisper words of wisdom, "
    
    }
    return str
    

}

console.log(sing());