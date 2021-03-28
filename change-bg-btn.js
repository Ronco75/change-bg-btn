const btn = document.querySelector('button')

const colors = [
'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
'linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)', 
'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)',
'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)',
'linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)',
'linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)',
'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)',
'linear-gradient( 135deg, #F97794 10%, #623AA2 100%)'
]

btn.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundImage = colors[randomColor];
    btn.style.backgroundImage = colors [randomColor];
})

