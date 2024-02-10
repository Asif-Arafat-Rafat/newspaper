function seeMore(button) {
    const content = button.parentNode.querySelector('span');
    content.style.display = content.style.display === 'none' ? 'inline' : 'none';   
    button.innerHTML = button.innerHTML === 'See More....' ? 'See Less' : 'See More....';
}
