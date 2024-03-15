const root = document.getElementById('to_do_list_root');
let todo = [
  {id: Math.random(), text: "Html", bul:false},
  {id: Math.random(), text: "Css", bul:false},
  {id: Math.random(), text: "Java", bul:false}
];

function header(){
  const container = document.createElement('form');
  container.className = 'row g-3 m-3';
  container.id = 'header_form'
  container.innerHTML = `
  <div class="input-group mb-3">
    <input id="formInput" value="" type="text" class="form-control" placeholder=" Write subjects" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Add </button>
  </div>`;
  
  container.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    let text = container.querySelector('input');
      if(text.value.trim().length >= 2){
          todo.push({
            id: Math.random() * 1,
            text: text.value,
            bul: false
          });
      }
      text.value = "";
      App();
  });
 
  return root.appendChild(container);
};
function list() {
  todo.map(val => {
  const container = document.createElement('div');
        container.className = 'row mb-3 m-3';
        container.id = val.id;
        container.innerHTML = 
        `
            <div  class="col-auto p-1">
                <input class="form-check-input mt-0 p-3"  type="checkbox" ${ val.bul === '1' || val.bul === true ? 'checked' : undefined}>
            </div>
            <div class="col h4 p-1 text-center" id='div_span'>
              <span  id='text'   title="Double-click to edit the text"> ${val.text} </span>
            </div>
            <div  class="col-auto p-1">
              <button type="button" class="btn btn-outline-success">X</button>
            </div>
        `
      container.querySelector('button').addEventListener('click', (e) => {
        todo = todo.filter( e => e.id != Number(container.id));
        App();
        
      });

      
      container.querySelector('span').addEventListener('dblclick', (e) => {
          e.target.innerHTML = `<input id="cheang_text" type='text' value='${e.target.innerHTML}'/>`;
          document.getElementById('cheang_text').addEventListener('change',(e) => {
              todo = todo.map( item => {
                if( item.id === Number(container.id)){
                    item.text = e.target.value;
                    if(item.text.trim() === ''){
                      item.text,e.target.value = '-----';
                    }
                }
                return item;
              });
              App();
          });
            
      });
      container.querySelector('input').addEventListener('click', (e) => {
        let bul ;
        todo = todo.map( item => {
          if(item.id ===  Number(container.id)){
            bul = item.bul;
            item.bul = !item.bul;
          }
          return item;
        });
        App();
       
    });
      root.appendChild(container);
  });
};
function footer(){
  let checked = todo.filter(item => item.bul === true);
  const container = document.createElement('div');
    container.className = 'row mb-3 m-3';
      container.id = 'footer';
      container.innerHTML = `
        <div class="col">
          <span class="h4"> ${todo.length} / ${checked.length} </span>  
        </div>
        <div class="col-auto ">
          <button type="button" class="btn btn-outline-success">Clear complitet</button>

        </div>
        
      `;
      container.querySelector('button').addEventListener('click', (e) => {
        todo = todo.filter(item => item.bul === false);
        App();
      })
      root.appendChild(container);
};

function App(){
  root.innerHTML = "";
  header();
  list();
  footer()
}
App();
