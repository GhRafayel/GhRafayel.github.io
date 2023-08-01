const root = document.getElementById('root');

function App(){
  fetch('/todo',).then((strim) => strim.json()).then(((json) => {
      todo = json.map((v) => v = {...v,kod: Math.random()});
      render();
  })).catch((err) =>{
    console.log('This is a error');
  })
  function sendTodo(){
    fetch('/todo', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(todo),
    })
  }
  function Header(){
    let form = document.createElement("form");
    let input = form.appendChild(document.createElement('input'));
      form.appendChild(document.createElement("button")).textContent = 'click here';
      form.id = 'form-header';
      input.id = 'form-input';
      input.value = '';
      input.placeholder = '';
    root.appendChild(form); 
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        createObject();
      });
  }
  function list(){
    todo.map((v)=>{
      let div = document.createElement('div');
          div.id = 'div-list';
      let label = div.appendChild(document.createElement('label'));
          label.textContent = v.text;
      let input = label.appendChild(document.createElement('input'));
          input.type = 'checkbox';
          input.className = 'list-input';
          input.checked = v.complitet;
          input.addEventListener('click',(e)=> checked({...v,complitet: e.target.checked }))
      let button = div.appendChild(document.createElement('button'));
          button.textContent = 'X';
          button.addEventListener('click',() => delet(v.kod) );
      root.appendChild(div);
  })
  }
  function footer(){
    let div = document.createElement('div');
        div.id = 'div-footer';
    let span1  = div.appendChild(document.createElement('span'));
    let span2  = div.appendChild(document.createElement('span'));
    let span3  = div.appendChild(document.createElement('span'));
    let button = div.appendChild(document.createElement('button'));
        span1.classList = 'footer-span1';
        span2.classList = 'footer-span2';
        span3.classList = 'footer-span3';
        span1.textContent = todo.length;
        span2.textContent = '/';
        span3.textContent = todo.filter((val) => val.complitet === true).length;
        button.id = 'footer-button';
        button.textContent = 'Delete completed';
        button.addEventListener('click',()=> removeComplitet())
    root.appendChild(div); 
  }
  function delet(kod){
    todo = todo.filter((val) => val.kod !== kod);
    sendTodo();
    render();
   
  }
  function createObject(){
    let text = document.getElementById('form-input').value;
    let value = text.trim();
      if(value.length > 1){
          todo.push({
            text: value,
            complitet: false,
            kod: Math.random(),
        });
      }
      sendTodo();
      render();
      
  }
  function removeComplitet(){
    todo = todo.filter((val) => val.complitet === false);
    sendTodo();
    render();
  }
  function checked(obj){
    todo = todo.map((val)=>{
      if(obj.kod === val.kod){
        return obj
      }
      return val
    });
    sendTodo();
    render();
  }
  function render(){
    root.innerHTML = "";
    Header();
    list();
    footer();
  }
}
App();
