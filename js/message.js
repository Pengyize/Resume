!function () {
    let view = View('section.message');

    let model = Model({resourceName:'Message'});

    let controller = Controller({
        messageList: null,
        form: null,
        init: function (view) {
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.loadMessages();
        },
        loadMessages: function () {

            this.model.fetch().then(
                    (messages) => {
                        let array = messages.map((item) => item.attributes);
                        let ol = document.createElement('ol');
                        ol.id = 'messageList';
                        array.forEach((item) => {
                            let divName = document.createElement('div');
                            let li = document.createElement('li');
                            divName.className = 'name';
                            divName.innerText = `${item.name}`;
                            li.append(divName);
                            let divContent = document.createElement('div');
                            divContent.className = 'content';
                            divContent.innerText = `${item.content}`;
                            li.append(divContent);
                            ol.append(li);
                        });
                        let siteMessage = document.querySelector('#siteMessages');
                        siteMessage.appendChild(ol);
                    }
                );
        },
        bindEvents: function () {
            this.form.addEventListener('submit',(e) => {
                e.preventDefault();
                this.saveMessage();
            });
        },
        saveMessage: function () {
            let myForm = this.form;
            let content = myForm.querySelector('input[name=content]').value;
            let name = myForm.querySelector('input[name=name]').value;
            if (!name && !content){
                alert('请输入姓名和内容哦~')
            }else if(!name){
                alert('你好像没有输入姓名~')
            }else if(!content){
                alert('你好像没有输入内容~')
            }else{
                this.model.save({'content':content,'name':name}).then(function(object) {
                    let li = document.createElement('li');
                    let divName = document.createElement('div');
                    divName.className = 'name';
                    divName.innerText = `${object.attributes.name}`;
                    li.appendChild(divName);
                    let divContent = document.createElement('div');
                    divContent.className = 'content';
                    divContent.innerText = `${object.attributes.content}`;
                    li.appendChild(divContent);
                    this.messageList.insertBefore(li,this.messageList.firstChild);
                    myForm.querySelector('input[name=content]').value = '';
                });
            }
        }
    });
    controller.init(view,model);
}.call();
