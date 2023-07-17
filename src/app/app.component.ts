import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  calValue: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;


  //declare parameters and variables for onclick function
  onClickValue ( val:string, type:any) {
    if ( type === 'number') {
      this.onNumberClick(val);
    }
    else if (type === 'function'){
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string){
    if(this.calNumber != 'noValue'){
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);

  }

  onFunctionClick (val:string) {
    //checking if it's the first function input by the user
    if(this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
    else if ( this.funcT != 'NoFunction'){
      this.secondNumber = this.calValue;

      //calculation method called
      this.valueCalculate(val);
    }
    
  }

  //method declare
  valueCalculate (val: string) {
    if (this.funcT == '+'){
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, val);
      //equal
      if(val == '='){
        this.onEqualPress()
      }
     
    }

    //subtraction
    if (this.funcT == '-'){
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, val);
      //equal
      if(val == '='){
        this.onEqualPress()
      }
    
  }
  
  //multiplication
  if (this.funcT == 'x'){
    const Total = this.firstNumber * this.secondNumber;
    this.totalAssignValues(Total, val);
    //equal
    if(val == '='){
      this.onEqualPress()
    }
  }

  //division
  if (this.funcT == '/'){
    const Total = this.firstNumber / this.secondNumber;
    this.totalAssignValues(Total, val);
    //equal
    if(val == '='){
      this.onEqualPress()
    }
  }

  //percentage
  if (this.funcT == '%'){
    const Total = this.firstNumber % this.secondNumber;
    this.totalAssignValues(Total, val);
    //equal
    if(val == '='){
      this.onEqualPress()
    }
  }
    
  }
  totalAssignValues(Total: number, val: string) {
     //showing the output
     this.calValue = Total;
     this.firstNumber = Total;
     this.secondNumber = 0;
     this.calNumber = 'noValue';
     this.funcT = val;

  }

  //equal method
  onEqualPress () {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction'
    this.calNumber = 'noValue'

  }

}
