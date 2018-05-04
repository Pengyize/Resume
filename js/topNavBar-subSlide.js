!function () {
    let view = document.querySelectorAll('nav.menu > ul > li');
    let controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bintEvents();
        },
        bintEvents: function () {
            for(let i=0;i<view.length;i++){                 //for循环，这样就能同时监听数组里的所有值
                view[i].onmouseenter = (x) => {
                    x.currentTarget.classList.add('active');    //x.currentTarget是监听的元素，就是li元素
                };
                view[i].onmouseleave = (x) => {
                    x.currentTarget.classList.remove('active');
                };
            }
        }
    };
    controller.init(view)

}();
