import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

   
    // isSubmitted = false
    Firstinput
    Secondinput
    resultvalue

    // get add(){
    //     return this.Firstinput + this.Secondinput
    // }
    
    
    // get Substraction(){
    //     return this.Input1 - this.Input2
    // }

    // get multiplication(){
    //     return this.Input1 * this.Input2
    // }

    // get divide(){
    //     return this.Input1 / this.Input2
    // }

    // addition 

    Finput(event){
        this.Firstinput = event.target.value
        console.log("add first", this.Firstinput)
    }

    Sinput(event){
        this.Secondinput = event.target.value
        console.log("add sencond",this.Secondinput)
    }
   
    addHandaler(){
        console.log(this.resultvalue = parseInt(this.Firstinput) + parseInt(this.Secondinput))
        
    }

//  Subtraction

    // Finput(event){
    //     this.Firstinput = event.target.value
    //     console.log("Subtraction Finput",this.Firstinput)
    // }
    // Sinput(event){
    //     this.Secondinput = event.target.value
    //     console.log("Subtraction Sinput",this.Secondinput)
    // }

    subtractHandaler(){
        console.log(this.resultvalue=this.Firstinput - this.Secondinput)
        
        // this.isSubmitted = true
    }
    
// Multiplication


    // Finput(event){
    //     this.Firstinput = event.target.value
    //     console.log("Multiplication Finput",this.Firstinput)
    // }
    // Sinput(event){
    //     this.Secondinput = event.target.value
    //     console.log("Multiplication Sinput",this.Secondinput)
    // }

    MultiplyHandaler(){
        console.log(this.resultvalue = this.Firstinput * this.Secondinput)
    }

    //  division 

    // Finput(event){
    //     this.Firstinput = event.target.value
    //     console.log("division Finput",this.Firstinput)
    // }
    // Sinput(event){
    //     this.Secondinput = event.target.value
    //     console.log("division Sinput", this.Secondinput)
    // }

    divideHandaler(){
        console.log(this.resultvalue=this.Firstinput / this.Secondinput)
    }

// form reset handler

    resetHandaler(event){
        // this.Firstinput.querySelector('form')
        // this.Secondinput.querySelector('form')
        
        this.template.querySelector('lightning-input[data-id="Fname"]').value = null;
        this.template.querySelector('lightning-input[data-id="Sname"]').value = null;
        this.resultvalue=0
    }
}