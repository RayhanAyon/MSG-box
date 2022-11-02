(function(){
    const form = document.querySelector("#msg-form")
    form.addEventListener('submit',function(e){
        e.preventDefault()
        const message = document.querySelector('#msg')
        const feedback = document.querySelector('.feedback')
        const messageContent = document.querySelector('.msg-content')
        if(message.value === '')
    {
        feedback.classList.add('show')
        setTimeout(function(){
            feedback.classList.remove('show')
        },3000)}
         else {
            messageContent.textContent = message.value
             message.value=' '
        }
    
    })
})()