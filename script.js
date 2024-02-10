function seeMore(button) {
    const content = button.parentNode.querySelector('span');
    content.style.display = content.style.display === 'none' ? 'inline' : 'none';   
}
function addNews(this) {
    const content = this.parentElement.querySelector('span');
    content.style.display = content.style.display === 'none' ? 'inline' : 'none';   
}