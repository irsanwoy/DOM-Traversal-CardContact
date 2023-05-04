const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');
for( let i = 0; i < close.length; i++){
    close[i].addEventListener('click',function(e){
        // close[i].parentElement.remove();
        e.target.parentElement.style.display = 'none';
    })
}