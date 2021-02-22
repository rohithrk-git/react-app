import React,{useState} from 'react';


const ListOfItems = ({items}) => {
    const [search, setSearch] = useState([]);
    const [inputval,setInputval] = useState('');

    const serachitem = (event)=>{
        const value = event.target.value;
        setInputval(value);
       
    let finalResult =    items.filter((item)=>{

            if(item.name.toLowerCase().includes(value)){
                return item.name
            }

        })

        setSearch(finalResult);
       
         
       
    }
    const postdata = ()=>{
            search.push({inputval});
            alert(inputval+"  is pushed")
    }
return(
<div> 
<form className="myform">
<select className="selectlist">
      <option>List of countries ....</option>
{
  items.map(item=><option>{item.name}</option>)
}
</select>
    <input type="text" placeholder="Search Country Name" value={inputval} onChange={serachitem}></input>
       
    <div className="searchList">
       
    {
       search.length <= 0 ? <div className="initial">"{inputval}" Match Not Found <button className="btn"onClick={postdata}>Add / Post</button></div>: 
        search.map(item=><div className="Optionlist">{item.name}</div>)
    }
</div>
</form>
</div>

);

}
export default ListOfItems;