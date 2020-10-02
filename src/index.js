const paragraphs = document.getElementsByTagName('p');
console.log({paragraphs});

[].forEach.call(paragraphs, element => {
  element.style.color = 'paleviioletred'
});