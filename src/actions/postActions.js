import { FETCH_POSTS, NEW_POST } from './types';

//cada acción será una función. las acciones son las que cambian el estado y se tienen que exportar

export const fetchPosts= ()=>dispatch =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload:data
        }));  
}

export const createPost= (postData)=>dispatch =>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    headers:{
      'content-type': 'application/json' 
    },
    body: JSON.stringify(postData)
  })
  .then(res=>res.json())
  .then(data => dispatch({
    type: NEW_POST,
    payload:data
}));  
}


//Recordar que me instalé thunk-react.thunk middelware nos permite utilizar o llamar la dispach function directamente para poder hacer peticiones asíncronas. 
//Resolutor en una promesa. Para poder pasar lo que yo quiera. 
//cualquier tipo de data que venga con el reducer se acostumbra a llamarle payload pero se le puede poner como quieras. 