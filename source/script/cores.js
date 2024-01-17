function mudarcor(){ 
    function cor(){
        return Math.floor(Math.random() * 255)
    }
    return `rgb(${cor()}, ${cor()}, ${cor()})`
}
export{ mudarcor }