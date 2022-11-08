$('#product-preview').on('click', 'button.btn', function() {
    let pressedBtn = $(this)
    let thumbsWrapper = pressedBtn.parent().parent()
    let thumbsList = thumbsWrapper.children().find('i')
    let pressedBtnElem = pressedBtn.find('i');

    if (thumbsList.hasClass('fa-solid')) {
        // Ja possui likes > fazer tratamento utilizando como refrência o botao apertado
        let isPressedBtnRegular = pressedBtn.children(0).hasClass('fa-regular');
        if (isPressedBtnRegular) {
            let pressedBtnSiblingElem = pressedBtn.parent().siblings('.wrapper').find('i');
            pressedBtnSiblingElem.removeClass('fa-solid').addClass('fa-regular');
            pressedBtnSiblingElem.text(parseInt(pressedBtnSiblingElem.text()) - 1);
            
            pressedBtnElem.removeClass('fa-regular').addClass('fa-solid');
            pressedBtnElem.text(parseInt(pressedBtnElem.text()) + 1);
        } else {
            pressedBtnElem.removeClass('fa-solid').addClass('fa-regular');
            pressedBtnElem.text(parseInt(pressedBtnElem.text()) - 1);  
        }
    } else {
        // Não possui likes ainda, adcionar normal
        pressedBtnElem.removeClass('fa-regular').addClass('fa-solid');
        pressedBtnElem.text(parseInt(pressedBtnElem.text()) + 1);
    }
})
