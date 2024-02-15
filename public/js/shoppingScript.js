
const root = document.getElementById('root');

const _state = {
  createList : document.getElementById('createList'),
  searchList : document.getElementById('searchList'),
  deleteList : document.getElementById('deleteList'),
  listName   : document.getElementById('listName'),
  todo: [],
  tableName: undefined, 
  interval: undefined,

  crud:{
          create(url,object){
            fetch(url,{
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(object)
            })
            .then(res => console.log('Created'))
            .catch(err => console.log(err));
          },
          read(url,id){
            fetch(`${url}/${id}`,{
              method: 'GET',
              headers: {
                "content-type": 'application/json',
              }
            }).then(res => res.json())
              .then(res => {
                  _state.todo = res.a[0];
                  _state.tableName = res.b;
                   App();
                })
              .catch(error => {
                
              _state.listName.innerHTML = ' Wrong list name: '; 
                console.log(error)
              });
          },
          delete(url,id){
            fetch(`${url}/${id}`,{
              method: 'DELETE'
            }).catch(err => console.log(err));
          },
          put(url,id,object){
            fetch(`${url}/${id}`,{
              method: 'PUT',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(object)
            }).then((resp) => console.log('Ok!'))
              .catch((err) => console.log(err));
          },
          search(url){
            fetch(`/${url}`)
            .then((resp) => resp.json( ))
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
          },
          
       }
};

function choose(url){
  root.innerHTML = '';
  const innertext = url === '/deleteList' ? 'Delete a list' : url === '/createList' ? "Create a new list" : 'Search a list';
  listName.innerHTML = innertext; 
  const container = document.createElement('div');

    container.innerHTML = `<form>
    <div class="mb-3">
      <label  class="form-label"> Your list name </label>
      <input type="text" class="form-control" required  name="name" placeholder="name" id="exampleInputtext1" >
      <div id="emailHelp" class="form-text">
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Your list password</label>
      <input type="password" name="password" required  class="form-control" placeholder="password" id="exampleInputPassword1">
    </div>
   
    <button type="submit" class="btn btn-primary">${innertext}</button>

  </form>`;
  container.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    let name = document.getElementById('exampleInputtext1').value.trim();
    let password = document.getElementById('exampleInputPassword1').value.trim();

    if(url === '/createList'){
      _state.crud.create('/createList', { name, password } );
    } else if(url === '/searchList'){
      _state.crud.read('/searchList', name+password);
    } else if(url === '/deleteList'){
      _state.crud.delete('/deleteList', name+password);
    }          
  });
   root.appendChild(container);
};

_state.createList.addEventListener('click', (e) =>{
  root.innerHTML = '';
  choose('/createList');
});

_state.searchList.addEventListener('click', (e) =>{
  root.innerHTML = '';
  choose('/searchList');
});

_state.deleteList.addEventListener('click', (e) => {
root.innerHTML = '';
choose('/deleteList');
});


function App(){
    root.innerHTML = '';
    form();
    list();
    footer();
    
};
function form(){
  const container = document.createElement('form');
  container.className = 'row g-3 m-3 min-width: 600px;';
  container.id = 'form-header'
  container.innerHTML = `
  <div class="input-group mb-3">
    <input id="formInput" value="" type="text" class="form-control" placeholder=" Write subjects" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Add Item</button>
  </div>`;
  
  container.addEventListener('submit', (e)=> {
    e.preventDefault();
    let text = container.querySelector('input').value.trim();
      if(text.length >= 2){
          let id = _state.todo.length > 0 ? _state.todo[_state.todo.length - 1].id + 1 : 1;
          _state.todo.push({
            id,
            text,
            bul: false
          });
          App();
          _state.crud.create('/createItem', {name: _state.tableName, text});
      }
     
  });
  root.appendChild(container);
};

function list() {
  _state.todo.map(val => {
    val.bul === '0' || val.bul === false ? val.bul = false : val.bul = true;
    
  const container = document.createElement('div');
        container.className = 'row mb-3 m-3';
        container.id = val.id;
        container.innerHTML = 
        `
            <div  class="col-auto p-1">
                <input class="form-check-input mt-0 p-3"  type="checkbox" ${ val.bul === '1' || val.bul === true ? 'checked' : undefined}>
            </div>
            <div class="col h4 p-1 text-center" id='div_span'>
              <span  id='text'   title="Double click for change text"> ${val.text} </span>
            </div>
            <div  class="col-auto p-1">
              <button type="button" class="btn btn-outline-success">Remove</button>
            </div>
        `
      container.querySelector('button').addEventListener('click', (e) => {
        _state.todo = _state.todo.filter( e => e.id !== Number(container.id));
        App();
        _state.crud.create('/deleteItem',{id:Number(container.id),name:_state.tableName})
        
      });
      container.querySelector('input').addEventListener('click', (e) => {
          let bul ;
          _state.todo = _state.todo.map( item => {
            if(item.id ===  Number(container.id)){
              bul = item.bul;
              item.bul = !item.bul;
            }
            return item;
          });
          App();
            _state.crud.put('/updateItemChecked', Number(container.id),{name:_state.tableName, bul } );
         
      });
      container.querySelector('span').addEventListener('dblclick', (e) => {
          e.target.innerHTML = `<input id="cheang_text" type='text' value='${e.target.innerHTML}'/>`;
          document.getElementById('cheang_text').addEventListener('change',(e) => {
              _state.todo = _state.todo.map( item => {
                if( item.id === Number(container.id)){
                    item.text = e.target.value;
                    if(item.text.trim() === ''){
                      item.text,e.target.value = '-----';
                    }
                }
                return item;
              });
              App();
                _state.crud.put('/updateItemText',_state.tableName , {id:Number(container.id), text: e.target.value } );
          });
            
      });
      root.appendChild(container);
  });
};

function footer(){
  let checked = _state.todo.filter(item => item.bul === true);
  const container = document.createElement('div');
    container.className = 'row mb-3 m-3';
      container.id = 'footer';
      container.innerHTML = `
        <div class="col">
          <span class="h4">General - ${_state.todo.length} / ${checked.length} - Checked</span>  
        </div>
          <div class="col-auto p-1">
          <button type="button" class="btn btn-outline-success"> Clear complitet</button>
        </div>
        
      `;
      container.querySelector('button').addEventListener('click', (e) => {
        _state.todo = _state.todo.filter(item => item.bul === false);
        App();
          _state.crud.delete('/deleteCheckedItems',_state.tableName);
      })
      root.appendChild(container);
};

choose('/searchList');
