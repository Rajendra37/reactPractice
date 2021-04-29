import React from 'react';

const getData=(e)=>{

    e.preventDefault();

    let Uname=document.getElementById('name').value;
    let Uroll=document.getElementById('roll').value;

    let data={
        name:Uname,
        roll:Uroll
    }

    let mydata=JSON.stringify(data)
    console.log(mydata);
}

const Myform=()=>{
    
    return(<>
        <div>
        <form>
        <p>Enter Name</p>
        <input type="text" id="name"/>
        <p>Enter Roll No</p>
        <input type="text" id="roll"/><br/><br/>
        <button type="submit" onClick={getData}>Submit</button>
        
        </form>
        </div>
    </>);


}

export default Myform;