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

      //calculation part
      this.valueCalculate(val);

      
    }

    
  }

  //method declare
  valueCalculate (val: String) {
    if (this.funcT == '+'){
      const total = this.firstNumber + this.secondNumber;
      //showing the output
      this.calValue = total;
      //
      this.firstNumber = total;
      this.secondNumber = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
    //subtraction
    if (this.funcT == '-'){
      const total = this.firstNumber - this.secondNumber;
      //showing the output
      this.calValue = total;
      //
      this.firstNumber = total;
      this.secondNumber = 0;
      this.calNumber = 'noValue';
      this.funcT = val;

  }
  //multiplication
  if (this.funcT == 'x'){
    const total = this.firstNumber * this.secondNumber;
    //showing the output
    this.calValue = total;
    //
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }

  //division
  if (this.funcT == '/'){
    const total = this.firstNumber / this.secondNumber;
    //showing the output
    this.calValue = total;
    //
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }
    
  }

}
