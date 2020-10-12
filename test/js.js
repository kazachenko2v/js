    let view = document.getElementById('view');

    view.onclick = function(){
      let textarea = document.createElement('textarea');
      textarea.setAttribute('class', this.getAttribute('class'));
      textarea.value = this.innerHTML;
      this.replaceWith(textarea);
      textarea.focus();
      
      textarea.onblur = function(){
        textarea.replaceWith(view);
        view.innerHTML = textarea.value;
      }
    }