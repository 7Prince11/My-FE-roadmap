/* Section for buttons*/
const btn : any = document.querySelector('.btn');
const btn_css : any = document.querySelector('.btn_css');
const btn_js : any = document.querySelector('.btn_js');
const btn_tl : any = document.querySelector('.btn_tl');

/* Sectons for hide classes */

const hide_html : any = document.querySelector('.hide');
const hide_css : any = document.querySelector('.hide_css');
const hide_js : any = document.querySelector('.hide_js');
const hide_tl : any = document.querySelector('.hide_tl');

/* Section for ()=> */

btn.addEventListener('click', () => {
   if(hide_html.classList.toggle("hide")){
       btn.textContent = 'Show';
   } else (btn.textContent = 'Hide');
})

btn_css.addEventListener('click', () => {

    if(hide_css.classList.toggle("hide_css")){
        btn_css.textContent = 'Show';
    } else (btn_css.textContent = 'Hide');
})

btn_js.addEventListener('click', () => {

    if(hide_js.classList.toggle("hide_js")){
        btn_js.textContent = 'Show';
    } else (btn_js.textContent = 'Hide');
})

btn_tl.addEventListener('click', () => {

    if(hide_tl.classList.toggle("hide_tl")){
        btn_tl.textContent = 'Show';
    } else (btn_tl.textContent = 'Hide');
})
 
  

 