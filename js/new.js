const lik = document.querySelector('#buttan');
const read = document.querySelector('#word');

lik.addEventListener("click", function () {
    

    read.classList.toggle('invis')

    if (read.classList.contains('invis')) {
        lik.textContent = "MORE"
    } else {
        lik.textContent = 'LESS'
    }
});