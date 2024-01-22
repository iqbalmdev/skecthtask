import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const data = [
    {
      "id": 1,
      "title": "Section 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": 2,
      "title": "Section 2",
      "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": 3,
      "title": "Section 3",
      "description": "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": 4,
      "title": "Section 4",
      "description": "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
  
  const immutableData = Object.freeze(data);
const [isOpen,setIsOpen] = useState(false);
const [accdata,setAccData] = useState([...immutableData])
const [clickIndex,setClickIndex] = useState(null)
function createIsOpenState(){

  const array =   accdata?.map((data,index)=>{
    return {
      ...data,isOpen:false,opneAcc:true
    }
  })
  setAccData([...array])
}
useEffect(()=>{
  createIsOpenState()
},[])
  function openSection(index){
    console.log('clicked',index)
    
    const isOpenAssignedArray =  accdata.map((data,ind)=>{
      return ind === index ? {
        ...data,isOpen:!data?.isOpen,
      }: data
    })
    setAccData(isOpenAssignedArray)
  
  }
  console.log(accdata)
  function addMore(){
    let length = accdata.length
    const obj = 
      {
        "id": length + 1,
        "title": `section ${length + 1}`,
        "description": "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      
    }
    setAccData([...accdata,obj])
  }
  return (
    <div className="App">
<button onClick={addMore}>Add one more</button>
    {
      accdata?.map((data,index)=>{
        return(
          <div key={index}>
            <button onClick={()=>openSection(index)}>Section {data?.title}</button>
            {
  data?.isOpen &&
          <p style={{colo:"black"}}>{data?.description}</p>
            }
          </div>
        )
      })
    }

    </div>
  );
}

export default App;