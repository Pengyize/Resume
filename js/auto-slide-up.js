!function(){
    window.sr = ScrollReveal();
    sr.reveal('.scrollMain', { duration: 700 });
    sr.reveal('.scrollSkill', { origin: 'top',duration: 700 });
    sr.reveal('.scrollWorks', { origin: 'top',duration: 700 });
    sr.reveal('.education', { duration: 700 });
    sr.reveal('.message', { duration: 700 });

    findClosestAndAddHighlight();

    window.addEventListener('scroll',function (xxx) {
        findClosestAndAddHighlight();
    });

    function findClosestAndAddHighlight() {
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for(let i=0;i<specialTags.length;i++){

            if(Math.abs(window.scrollY - specialTags[i].offsetTop + 285) < Math.abs(285 + window.scrollY - specialTags[minIndex].offsetTop)){
                minIndex = i;
            }
        }

        let id = specialTags[minIndex].id;
        let a = document.querySelector('a[href="#'+id+'"]');
        let li = a.parentNode;
        let brothersAndMe = li.parentNode.children;     //brotherAndMe是个数组
        for(let i=0;i<brothersAndMe.length;i++){
            brothersAndMe[i].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }


}();