const navOptions = document.querySelectorAll('header nav ul li');
const contato = navOptions[1];
const contatoInformacoes = document.querySelector('.contatoInformacoes');
const contatoInformacoesButtonClose = document.querySelector('.contatoInformacoes .close');
const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];

contato.addEventListener('click', ()=>
{
    contatoInformacoes.classList.add('show');
    header.classList.add('blur');
    main.classList.add('blur');
    footer.classList.add('blur');
});

contatoInformacoesButtonClose.addEventListener('click', ()=>
{
    contatoInformacoes.classList.remove('show')
    header.classList.remove('blur');
    main.classList.remove('blur');
    footer.classList.remove('blur');
})