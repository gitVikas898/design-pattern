class CEO{
    constructor(){
        if(CEO.instance){
            return CEO.instance
        }

        this.name = 'Vikas'
        CEO.instance = this;
    }   
    
}
const ceo1 = new CEO();
const ceo2 = new CEO();

console.log(ceo1.name,ceo2.name)
