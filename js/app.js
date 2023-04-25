const btnAll = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
const butnn = document.querySelector('#butn');
const carsContatnt = document.querySelector('#carscontant');




btnAll.forEach(function(ele){
   ele.addEventListener('click', function(){
   console.log(this.dataset.tab);
    
    
    
    contentBoxes.forEach(function(ele){
        ele.classList.add('hidden');

    });

    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden')



   })
})


butnn.addEventListener("click", function () {
    console.log("нажал");

    carsContatnt.classList.toggle('invis')

    
});



