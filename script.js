function seeMore(button) {
    const content = button.parentNode.querySelector('span');
    content.style.display = content.style.display === 'none' ? 'inline' : 'none';   
}
   
    document.querySelector(".date").innerHTML =new Date().toLocaleDateString();

    function startTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        text=h + ":" + m + ":" + s;
        document.querySelector(".time").innerHTML = text;
        setTimeout(startTime, 1000);
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }