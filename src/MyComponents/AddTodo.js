import React ,{useState} from 'react';
export const AddTodo = (props) => {

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");

const submit=(e)=>{
    e.preventDefault();
    if(title.length===0){
        alert("title can't be empty");
    }
    else if( description.length===0){
      alert("description can't be empty")
    }
    else{
      props.addTodo(title,description);
      setTitle("");
      setDescription("");
    }
}
    

    return (
        <div className="container my-3">
            <h3>Add todo's</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text"value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="title"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="Description" className="form-label">Description</label>
    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="Description"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add to do</button>
</form>
        </div>
    )
}
