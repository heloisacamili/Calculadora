import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
  num : string = '';
  operacao : string | undefined;
  resolucao : string | undefined;
  num2 : string = '';
  valueNum : number | undefined;
  valueNum2 : number | undefined;
  resultado : string = '';
  ValueResultado : number | undefined;

  public deletar() {
    location.reload();
  }

  public mostrarNum(algarismo : string) {
    if (this.operacao == null) {
      this.num += algarismo;
      this.resolucao = this.num;
    } else {
      this.num2 += algarismo;
      this.resolucao = this.num + this.operacao + this.num2;
    }
  }

  public mostrarOperacao(op : string) {
    this.operacao = op;
    this.resolucao += this.operacao;
  }

  public mostrarResultado(igual : string) {
    this.valueNum = parseFloat(this.num);
    this.valueNum2 = parseFloat(this.num2);
    if (this.operacao == "+") {
      this.ValueResultado = this.valueNum + this.valueNum2;
      this.resultado = '' + this.ValueResultado;
      this.resolucao = this.resultado;
      this.num = this.resultado;
      this.num2 = '';
    } else if (this.operacao == "-") {
      this.ValueResultado = this.valueNum - this.valueNum2;
      this.resultado = '' + this.ValueResultado;
      this.resolucao = this.resultado;
      this.num = this.resultado;
      this.num2 = '';
    } else if (this.operacao == "*") {
      this.ValueResultado = this.valueNum * this.valueNum2;
      this.resultado = '' + this.ValueResultado;
      this.resolucao = this.resultado;
      this.num = this.resultado;
      this.num2 = '';
    } else {
      this.ValueResultado = this.valueNum / this.valueNum2;
      this.resultado = '' + this.ValueResultado;
      this.resolucao = this.resultado;
      this.num = this.resultado;
      this.num2 = '';
    }
  }
}
