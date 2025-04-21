import React, { useContext } from 'react'
import products from "./store/Products.json"
import { Button, Col, Row } from 'react-bootstrap'
import { CreateContextData } from '../context/ContextData'

const Store = () => {

  const {getquantity , increaseItems ,decreaseItems ,removeitem } =useContext(CreateContextData)
  return (
    <>
      <h1 className="text-center my-4">Store</h1>
      <div className='items p-3'>
        <Row>
          {products.map((product) => {
            const quantity = getquantity(product.id) ;
            
return(
            <Col key={product.id} xs={12} sm={6} lg={4} className='g-4'>
              <div className="card shadow-sm p-3">
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name}
                  style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
                />
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{product.name}</h5>
                  <span className="fw-bold text-primary text-end">{product.price} جنيه</span>
                </div>
                {quantity === 0 ?<button className='btn btn-success fw-bold p-2' 
                onClick={()=>increaseItems(product.id)}>🛒 Add to Cart</button>:
                <div style={{display:"flex" ,alignItems:"center", flexDirection:"column" ,margin:"10px 0"}}>
                <div style={{display:"flex" ,justifyContent:"center" , alignItems:"center", margin:"10px 0"}}>  
                <Button style={{
                  borderRadius:"50%" , textAlign:"center",
                  padding:"15px" ,fontWeight:"bold" ,fontSize:"25px"}} onClick={()=>decreaseItems(product.id)} >-</Button>
                <h2 style={{margin:"0 8px"}}>{quantity} in cart</h2>
                <Button style={{borderRadius:"50%" , textAlign:"center", padding:"15px" ,
                  fontWeight:"bold" ,fontSize:"25px"}} onClick={()=>increaseItems(product.id)} >+</Button>
                </div>
                <Button className='btn btn-danger fw-bold p-2' style={{width:"50%"}} onClick={()=>removeitem(product.id)} >remove to Cart</Button>
                </div>
              }
              </div>
            </Col>

)
          }
          

          )
        
          }
        </Row>
      </div>
    </>
  )
}

export default Store
