/* Section for buttons*/
var btn = document.querySelector('.btn');
var btn_css = document.querySelector('.btn_css');
var btn_js = document.querySelector('.btn_js');
var btn_tl = document.querySelector('.btn_tl');
/* Sectons for hide classes */
var hide_html = document.querySelector('.hide');
var hide_css = document.querySelector('.hide_css');
var hide_js = document.querySelector('.hide_js');
var hide_tl = document.querySelector('.hide_tl');
/* Section for ()=> */
btn.addEventListener('click', function () {
    
    if (hide_html.classList.toggle("hide")) {
        btn.textContent = 'Show';
    }
    else
        (btn.textContent = 'Hide');
});

 




btn_css.addEventListener('click', function () {
    if (hide_css.classList.toggle("hide_css")) {
        btn_css.textContent = 'Show';
    }
    else
        (btn_css.textContent = 'Hide');
});
btn_js.addEventListener('click', function () {
    if (hide_js.classList.toggle("hide_js")) {
        btn_js.textContent = 'Show';
    }
    else
        (btn_js.textContent = 'Hide');
});
btn_tl.addEventListener('click', function () {
    if (hide_tl.classList.toggle("hide_tl")) {
        btn_tl.textContent = 'Show';
    }
    else
        (btn_tl.textContent = 'Hide');
});
