import GeraCPF from './modules/geraCPF';

import './assets/css/style.css';

const cpfGerado = document.querySelector('.cpf-gerado');
const botaoGerar = document.querySelector('.botao-gerar');

botaoGerar.addEventListener('click', ()=>{
  const gerar = new GeraCPF();
  cpfGerado.innerHTML = gerar.geraNovoCpf();
})


