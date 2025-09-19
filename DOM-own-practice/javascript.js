//  Level 1: Basics of DOM Selection & Manipulation
const style = document.createElement('style');
style.textContent=`

    .light {
        background-color: lavender;
    }

    .image1 {
        width: 15%;
        margin-right: 1rem;
    }

    .image2 {
        width: 15%;
    }
`;
document.head.append(style);


// 1. Display Hello World - Select a <div> with an ID and change its text to “Hello, DOM!”

const div1 = document.createElement('div');
div1.textContent = 'Hello world!';
div1.id='First-box';
// div1.classList.add('1st');
// document.body.append(div1, 'setia');     // append  accept both node and string
// document.body.append('Setia');          // and also accepts  only strings 
document.body.appendChild(div1);       // appendchild  only accept node

// const div2 =document.createElement('div');
// div2.textContent='kareena';
// document.body.append('setia', 'noor');

document.getElementById('First-box').textContent='Coding is love!';




// 2. Change Background Color - Change the background color of a page or a box when a button is clicked.

const btn1 = document.createElement('button');
btn1.textContent='Click here!';
btn1.style.display = "block";
document.body.appendChild(btn1);


btn1.addEventListener('click', ()=>{
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
})


// Light/Dark Theme Toggle
const body = document.querySelector('body');
body.classList.add('light');


const btn2 = document.createElement('button');
btn2.textContent='Toggle button';
btn2.style.display = "block";
document.body.append(btn2);

btn2.addEventListener('click', () => {

    if(body.classList.contains('light')){
        body.style.backgroundColor='black';
        body.style.color='white';
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.style.backgroundColor='white';
        body.style.color='black';
        body.classList.remove('dark');
        body.classList.add('light');
    }

});



// 3. Get Input Value - Display the value typed in an <input> field when a button is clicked.

const input1 = document.createElement('input');
input1.setAttribute('placeholder', 'Enter anything..');

const btn3 = document.createElement('button');
btn3.textContent='Display-input';
body.append(input1, btn3);

btn3.addEventListener('click', () => {
    console.log(input1.value);
})




// 4. Change Image Source - Click a button to change the src of an image.

const img1 = document.createElement('img');
img1.setAttribute('src', 'Flower-1-image.jpg');
img1.setAttribute('alt', 'Flower-1-image');
img1.classList.add('image1');

// const img2 = document.createElement('img');
// img2.setAttribute('src', 'Flower-2-image.jpg');
// img2.setAttribute('alt', 'Flower-2-image');
// img2.classList.add('image2');

const btn4 = document.createElement('button');
btn4.textContent = 'CHange image';
btn4.style.display = "block";
// btn4.innerHTML = '<i>image</i>';                                                 // image in italic font because it adds new content
// btn4.innerText = 'Change <span style="visibility: hidden">image<span>';          // it doesn't refer css in style
// btn4.style.visibility='hidden';                                                  // innerText follows this css
// btn4.textContent = 'Change <span>image<span>';                                   // it gives only text. 

body.append(btn4, img1);

btn4.addEventListener('click', () => {

    if(img1.getAttribute('src') == 'Flower-1-image.jpg'){
        img1.removeAttribute('src', 'Flower-1-image.jpg');
        img1.setAttribute('src', 'Flower-2-image.jpg');
    } else{
        img1.removeAttribute('src', 'Flower-2-image.jpg');
        img1.setAttribute('src', 'Flower-1-image.jpg');
    }

});




//  TRAVERSAL  DOM

const div2 = document.createElement('div');
body.appendChild(div2);

const h1 = document.createElement('h1');
h1.textContent='hloo';
const h3 = document.createElement('h3');
h3.textContent='byee';
const p1 = document.createElement('p');
p1.textContent='welcome!';
div2.append(h1, h3, p1);

console.log(div2.children);
console.log(div2.firstElementChild);
console.log(div2.lastElementChild);

console.log('first=', div2.firstChild);
console.log('last=', div2.lastChild);
console.log('child=', div2.childNodes);


//  LOCAL Storage Practice

// const input2 = document.createElement('input');
