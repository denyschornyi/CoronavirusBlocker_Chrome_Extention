replaceText(document.body);

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }else if(element.nodeType === Text.TEXT_NODE){
        element.textContent = element.textContent.replace(/coronavirus/gi, 'Love each other');
        element.textContent = element.textContent.replace(/covid-19/gi, 'Love each other');

    }
}