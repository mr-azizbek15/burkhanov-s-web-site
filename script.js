document.addEventListener('DOMContentLoaded', function () {

    // card-1
    document.querySelectorAll('.pl')[0].textContent = '617 h/p';
    document.querySelectorAll('.cl')[0].textContent = 'white';
    document.querySelectorAll('.cs')[0].textContent = '$400/day';
    document.querySelectorAll('.lg')[0].textContent = 'M5F90compitation';

    // card-2
    document.querySelectorAll('.pl')[1].textContent = '840 H/P';
    document.querySelectorAll('.cl')[1].textContent = 'Black';
    document.querySelectorAll('.cs')[1].textContent = '$300/day';
    document.querySelectorAll('.lg')[1].textContent = 'chalenger';

    // card-3
    document.querySelectorAll('.pl')[2].textContent = '1 163 h/p';
    document.querySelectorAll('.cl')[2].textContent = 'red';
    document.querySelectorAll('.cs')[2].textContent = '$20000/day';
    document.querySelectorAll('.lg')[2].textContent = 'ferrari la ferrari';

    // card-4
    document.querySelectorAll('.pl')[3].textContent = '1500 h/p';
    document.querySelectorAll('.cl')[3].textContent = 'black';
    document.querySelectorAll('.cs')[3].textContent = '$20000/day';
    document.querySelectorAll('.lg')[3].textContent = 'chiron';
});

let btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    window.open('https://www.bbc.com/news')
})


function com(){
    document.querySelector('.name-1').innerHTML='Azizbek';
    document.querySelector('.name-2').innerHTML='Azizbek';
    document.querySelector('.name-3').innerHTML='Azizbek';
    document.querySelector('.name-4').innerHTML='Azizbek';
    
}
com();

function add(){
    document.querySelector('.coment-1').innerHTML='Bu sayt eng zo`r sayt bundan zo`rini ko`rmaganman malodes. Burhanov Azizbekga rahmat';
    document.querySelector('.coment-2').innerHTML='Bu sayt eng zo`r sayt bundan zo`rini ko`rmaganman malodes. Burhanov Azizbekga rahmat';
    document.querySelector('.coment-3').innerHTML='Bu sayt eng zo`r sayt bundan zo`rini ko`rmaganman malodes. Burhanov Azizbekga rahmat';
    document.querySelector('.coment-4').innerHTML='Bu sayt eng zo`r sayt bundan zo`rini ko`rmaganman malodes. Burhanov Azizbekga rahmat';
}
add()



let ci = 0;  
function moveCarousel(tc) {  
    let c = document.querySelector('.comments');  
    let cL = document.querySelectorAll('.comment').length;
    let iv = 3;  
    console.log(cL);
    
    ci += tc;
    
    if (ci < 0) {
        ci = cL - iv;
    } else if (ci >= cL - iv + 1) {
        ci = 0;
    }

    c.style.transform = `translateX(-${ci * (100 / iv)}%)`;
}
