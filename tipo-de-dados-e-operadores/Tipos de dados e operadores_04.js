/*4. Crie uma função que recebe 3 parâmetros, e utilizando
 a fórmula de Báskara, mostre o resultado de x' e x".*/

function calcularBascara(a,b,c){

  let delta = b**2 - 4*a*c;
  
  let x1 = (-b + Math.sqrt(delta)) / 2*a;
  
  let x2 = (-b - Math.sqrt(delta)) / 2*a;
  

  console.log('O valor de x1 é ' + x1 + ' o valor de x2 é ' + x2);
}

calcularBaskara(1,5,4)
