let button = document.querySelector('.li_button');
button.addEventListener('mouseenter', function () {
    button.classList.add('color1btn');
    console.log('Кто залез в консоль)' );
});
button.addEventListener('mouseleave', function () {
    button.classList.remove('color1btn');
});

let scbutton=document.querySelector('.optima_color');
scbutton.addEventListener('mouseenter', function () {
    scbutton.classList.add('color1btn');
    console.log('Кто залез в консоль)' );
});
scbutton.addEventListener('mouseleave', function () {
    scbutton.classList.remove('color1btn');
});

let thutton=document.querySelector('.pro_color');
thutton.addEventListener('mouseenter', function () {
    thutton.classList.add('color1btn');
    console.log('Кто залез в консоль)' );
});
thutton.addEventListener('mouseleave', function () {
    thutton.classList.remove('color1btn');
});

