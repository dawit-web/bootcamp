import {useState } from 'react';
import { Container, Form , Col ,Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"; 

const Register = () => {
    const [firstName,setFirstname] = useState ('')
    const [lastName,setLastname] = useState ('')
    const [email,setEamil] = useState ('')
    const [phone,setPhone] = useState ('')
    const [username,setUsername] = useState ('')
    const [password,setPassword] = useState ('')
    const Navigate = useNavigate()
    
    const getUser= () => {
        console.log(firstName,lastName,email,phone ,username,password)
        fetch('http://localhost:5000/users',{
        method:'POST',
        headers: {
            "Content-type": "application/json",
          },
          body:JSON.stringify({firstName,lastName,email,phone,username,password})
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            Navigate('/Login') 
           
         })
        .catch(err => {
            console.log(err);
        })  
    }


/* .Register {
  text-align: center;
  border: solid rgb(174, 178, 180);
  height: 50vh;
  width: 50vh;
  border-radius: 10px;
  margin: 80px 400px;
} */


        return(
            
             <Container id="Register" >
                <Form  className="text-center w-100" >
                <h1 className="mb-3 fs-3 fw-normal">SignUp</h1>
                <Form.Group  style={{margin:"10px auto" , width:"40%" ,  display:"flex", flexDirection:"column", gap:"10px" }}>
                {/* <Col sm={5}> */}
                    <Form.Control type="text" size="sm" placeholder="First name" onChange={(e) => setFirstname(e.target.value)}></Form.Control> 
                    <Form.Control type="text" size="sm" placeholder="Last name" onChange={(e) => setLastname(e.target.value)}></Form.Control>     
                    <Form.Control type="text" size="sm" placeholder="Email" onChange={(e) => setEamil(e.target.value)} ></Form.Control>                     
                    <Form.Control type="text" size="sm" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)}></Form.Control>  
                    <Form.Control type="text" size="sm" placeholder="user name"  onChange={(e) => setUsername(e.target.value)}></Form.Control>                     
                    <Form.Control type="text" size="sm" placeholder="password" onChange={(e) => setPassword(e.target.value)}></Form.Control> 
                    <Button type="submit" onClick={getUser} >SignUp</Button>
                {/* </Col> */}
                </Form.Group>
                </Form>
             </Container>   
            
       

        )
}

export default Register


// <Container id="login" className="d-grid h-100">
// <Form  className="text-center w-100">
//     <h1 className="mb-3 fs-3 fw-normal">please Login</h1>
//     <Form.Group>
//     <Col sm={5}>
//         <Form.Control type="username" size="sm" placeholder="user name" onChange={(e) => setUsername(e.target.value)}></Form.Control> 
//         <Form.Control type="password" size="sm" placeholder="password"  onChange={(e) => setPassword(e.target.value)}></Form.Control>
//         <Button  onClick={getConnect }>Login</Button> 
//      </Col>
//     </Form.Group>
// </Form>
// </Container>


// {/* <div className="Register" style={{ height: '50vh', display:"inline-block" , textAlign:"center" , margin: "50px"  }}>
            
// <h1>SignUp:</h1>
// first name <input style={{margin:"5px",}} type="text"  onChange={(e) => setFirstname(e.target.value)} />
// <br />
// Last name <input type="text" onChange={(e) => setLastname(e.target.value)} />
// <br />
// Email <input type="text" onChange={(e) => setEamil(e.target.value)} />
// <br />
// phone number <input type="text" onChange={(e) => setPhone(e.target.value)}/> <br />

// Username <input type="text"  onChange={(e) => setUsername(e.target.value)} />
// <br />
// password <input type="text" onChange={(e) => setPassword(e.target.value)}/> <br />


// <button type="submit" onClick={getUser} id="button">SignUp</button>

// </div> */}