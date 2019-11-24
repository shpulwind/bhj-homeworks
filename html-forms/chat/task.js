const batton_open_chat = document.querySelector('.chat-widget'), 
     message_window = document.querySelector('.chat-widget__input'),
    messages_container = document.querySelector('.chat-widget__messages-container');



const praselist = [1, 'Здравствуйте! Вас приветствует электронный помощник Билайн.',
'Вы можете задать свой вопрос мне прямо сейчас, не ожидая в очереди.',
'Прошу Вас сформулировать вопрос более кратко, чтобы я смог уловить его суть.',
'Ответы на самые популярные вопросы есть на нашем сайте в разделе ЧаВо',
'Переформулируйте, пожалуйста, Ваш вопрос.',
'Уверен, что смогу Вам помочь! Какой вопрос Вас интересует?',
'Переформулируйте, пожалуйста, Ваш вопрос.',
'Вы хотите задать Ваш вопрос оператору в чате?', 
'Переформулируйте, пожалуйста, Ваш вопрос.',
'Спасибо, что вы с Билайн! Мы ценим Вас! Всего доброго!']

batton_open_chat.addEventListener('click', function() {
    batton_open_chat.classList.add('chat-widget_active')
});

message_window.addEventListener('keydown', function() {
    message_container_value = document.querySelector('.chat-widget__input').value;
    
    if(event.key == 'Enter' && message_container_value != '' && praselist[0] !== praselist.length) {
        messages_container.append(createDIV(message_container_value));
        messages_container.append(createDIV(praselist[praselist[0]], false))
        praselist[0]++;
        messages_container.scrollTop = 9999;
        message_window.value = '';
        if(praselist[0] == praselist.length) praselist[0] = 1;
                
    }
})
function createDIV(text, client = true) {
    const date = new Date();
    
    let element = document.createDocumentFragment();
    div_wrapper = document.createElement('div');
    div_child1 = document.createElement('div');
    div_child2 = document.createElement('div');

    div_wrapper.className = `message ${(client) ? 'message_client' : ''}`;
    div_child1.className = 'message__time';
    div_child1.innerText = `${date.getHours()} : ${date.getMinutes()}`
    div_child2.className = 'message__text';
    div_child2.innerText = text;

    div_wrapper.appendChild(div_child1);
    div_wrapper.appendChild(div_child2);
    element.appendChild(div_wrapper);
    return element;
}