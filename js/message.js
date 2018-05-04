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
                        console.log(messages);
                        let array = messages.map((item) => item.attributes);
                        array.forEach((item) => {
                            let li = document.createElement('li');
                            li.innerText = `${item.name}: ${item.content}`;
                            this.messageList.appendChild(li);
                        });
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
            this.model.save({'content':content,'name':name}).then(function(object) {
                let li = document.createElement('li');
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
                this.messageList.insertBefore(li,this.messageList.firstChild);
                myForm.querySelector('input[name=content]').value = '';
            });
        }
    });
    controller.init(view,model);

}.call();
