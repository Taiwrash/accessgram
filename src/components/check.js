import {useState} from 'react'
import Loader from './loader'
const Check =()=>{
  const [url, SetUrl] = useState('www.google.com')
  const [data, SetData] = useState([])
  const [loading, SetLoading] = useState(false)

const handleClick = (e) =>{
    e.preventDefault()
    SetLoading(true)
    fetch(`http://localhost:4000/api/${url}`)
    .then(res=>res.json())
    .then(result=>{
      SetData(result.issues)
      SetLoading(false) 
    })
    .catch(err=>console.log(err))
}
console.log(data.length);
 const list = data.length ? data.map((item,index)=>{
   return <>
   <ul key={index}>
   <li><span>Runners:</span> {item.runner}</li>
   <li><span>CSS Selector:</span> {item.selector}</li>
   <li><span>HTML:</span> {item.context}</li>
   <li><span>Rule:</span> {item.code}</li>
   <li><span>Reason:</span> {item.message}</li>
   </ul>
   <div className="line" style={{backgroundColor:"#f1f1f1", height:"10px"}}></div>
   </>
 }):null

    return(
        <>
   <div className="page-section banner-seo-check" id="check" >
    <div className="wrap bg-image" style={{backgroundImage: "url(../assets/img/bg_pattern.svg)"}}>
      <div className="container text-center">
        <div className="row justify-content-center wow fadeInUp">
          <div className="col-lg-8">
            <h2 className="mb-4">Check the Accessibility of Websites</h2>
            <form action="#">
              <input type="text" className="form-control" placeholder="E.g www.google.com" onChange={(e)=>SetUrl(e.target.value)} />
              <button type="submit" className="btn btn-success" onClick={handleClick}>Check Now</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
  </div>
  <header>
    <div className="container">
      <div className="list">
     <p style={data.length===0 ? {display:"none"}: {display:"block"}}>Number of Errors: {data.length}</p>
          {loading ? <Loader/>: list}
      </div>
    </div>
  </header>

</>
)
}

export default Check