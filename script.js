function seeMore(button) {
    const content = button.parentNode.querySelector('span');
    content.style.display = content.style.display === 'none' ? 'inline' : 'none';   
}
    const d = new Date();
    let text = d.toLocaleTimeString();
    document.querySelector(".time").innerHTML = text;
    document.querySelector(".date").innerHTML =new Date().toLocaleDateString();


function addNews() {
    let newNews=document.querySelector(".allnews")
    newNews+=`
    <div class="news">
    <h1></h1>
    <h4 class="snippet">
        
    </h4>
    <div class="minews">
      <p>

        <span>
        </span>
        <button class="morebtn" onclick="seeMore(this)">View</button>
      </p>
      <img
        src="https://hackster.imgix.net/uploads/attachments/1682669/robotinlab-scaled_VBqz2nneDV.jpg?auto=compress%2Cformat&w=830&h=466.875&fit=min&dpr=1"
        alt=""
      />
    </div>
  </div>
    
    `
}
