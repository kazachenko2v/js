mouse.onfocus = function(event){
  alert('we')
  let target = event.target;
  target.style.position = 'absolute';
  document.onkeydown = function(event){
    let mouseWidth = mouse.offsetWidth;
    let mouseHeight = mouse.offsetHeight;
    let newPosLeft = mouse.getBoundingClientRect().left;
    let newPosTop = mouse.getBoundingClientRect().top;
    switch(event.code) {
      case 'ArrowRight':
        newPosLeft += mouseWidth;
        break;
      case 'ArrowDown':
        newPosTop +=  mouseHeight;
        break;
      case 'ArrowLeft':
        newPosLeft = newPosLeft - mouseWidth;
        break;
      case 'ArrowTop':
        newPosTop = newPosTop - mouseHeight;
        break;
    }

    mouse.style.left = newPosLeft + 'px';
    mouse.style.top = newPosTop + 'px';

  }
}