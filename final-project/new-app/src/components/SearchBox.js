import React from 'react'
import { Col, Form} from "react-bootstrap";

const SearchBox =(props) => {
    
    return(

        // <div className='search'>
            
        //     <input className = "pa2 input-reset ba bg-transparent w-100 measure"
        //     onChange={props.onInputChange} type="text" placeholder="search.." />

        // </div> 


        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Col sm={5}>
         <Form.Control onChange={props.onInputChange} type="text" placeholder="serch .." />
        </Col>
         </Form.Group>
        </Form>


   
      
    )
}


export default SearchBox






        // <Form>
        // <Form.Group className="mb-3" controlId="formGroupEmail">
        //   <Form.Label></Form.Label>
        //      <Col sm={10}>
        // //   <Form.Control onChange={props.onInputChange} type="email" placeholder="serch .." />
        // // </Form.Group>
        // // </Form>