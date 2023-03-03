oState = localStorage.getItem('theme')??"0";
document.querySelector('.header__btn').setAttribute('data-count', oState)

document.querySelector('.header__btn').addEventListener('click' ,() => {
    let state = document.querySelector('.header__btn').getAttribute('data-count');
    console.log(state)
    state = localStorage.getItem('theme') === '0' ? '1': '0';
    localStorage.setItem('theme', state);
    document.querySelector('.header__btn').setAttribute('data-count', localStorage.getItem('theme'))
    console.log(state)
    changeTheme(state)
    
})
console.log(document.querySelector('.header__btn'))

function changeTheme(state){
    if(state === '0'){
        document.querySelector('.header').classList.add('header--dark');
        document.querySelector('.sign-up').classList.add('sign-up--dark');   
    }
    else{
        document.querySelector('.header').classList.remove('header--dark');
        document.querySelector('.sign-up').classList.remove('sign-up--dark');
    }
}

changeTheme(oState)

document.querySelector('.main').style.height = (100 - (document.querySelector('.header').offsetHeight/window.innerHeight) * 100) + 'vh';
