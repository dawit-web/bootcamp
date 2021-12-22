import {useState } from 'react';
import { Container, Form , Col ,Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"; 

const Login = () => {
    const [username,setUsername] = useState ('')
    const [password,setPassword] = useState ('')
    const Navigate = useNavigate()
   
    const getConnect  = () => {
        console.log(username,password)
      
        fetch('http://localhost:5000/connect',{
        method:'POST',
        headers: {
            "Content-type": "application/json",
          },
          body:JSON.stringify({username,password})
        }).then(res => res.json())
        .then(data => {
            // console.log(data[0]);
            localStorage.setItem('user', JSON.stringify(data))
            // Navigate('/') 
            if (data[0].user_id > 0 ){
                Navigate('/');
            } else {
              
            }
            // console.log('i am user' )
           
         })
        .catch(err => {
            console.log(err);
        })  



        // useEffect(() => {
        // console.log(login_info, "<-- this is the login info");
        // if (login_info.auth === "ok") navigation("/d");
        // }, [login_info]);‏

    }

        return(
            <Container id="login" >
            <Form  className="text-center w-100">
                <h1 className="mb-3 fs-3 fw-normal">Login</h1>
                <Form.Group className="center"  style={{margin:"10px auto" , width:"40%" ,  display:"flex", flexDirection:"column", gap:"10px" }}>
                {/* <Col sm={10}> */}
                    <Form.Control type="username" size="sm" placeholder="user name" autoComplete="username" onChange={(e) => setUsername(e.target.value)}></Form.Control> 
                    <Form.Control type="password" size="sm" placeholder="password" autoComplete="password" onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    <Button  onClick={getConnect }>Login</Button> 
                 {/* </Col> */}
                </Form.Group>
            </Form>
            </Container>
     

        )
}


export default Login


// <div className="login">
// <h1>Login:</h1>
//  Username <input type="text"  onChange={(e) => setUsername(e.target.value)} />
//  <br />
//  password <input type="text" onChange={(e) => setPassword(e.target.value)}/> <br />

//  <button type="submit" onClick={getConnect } id="button">Login</button> 
// </div>


// <Container id="login" className="d-grid h-100">
// <Form  className="text-center w-100">
//     <h1 className="mb-3 fs-3 fw-normal">please Login</h1>
//     <Form.Group>
//     <Col sm={5}>
//         <Form.Control type="username" size="sm" placeholder="user name" onChange={(e) => setUsername(e.target.value)}></Form.Control> 
//         <Form.Control type="password" size="sm"   onChange={(e) => setPassword(e.target.value)}></Form.Control>
//         <Button  onClick={getConnect }>Login</Button> 
//      </Col>
//     </Form.Group>
// </Form>
// </Container>

{/* <div className="login" style={{ textAlign:"center" , margin: "70px"  }}>
<h1 className="mb-3 fs-3 fw-normal">Login:</h1>
 <input type="text" placeholder="user name"  onChange={(e) => setUsername(e.target.value)} />
 <br />
 <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/> <br />

 <button type="submit" onClick={getConnect } id="button">Login</button> 
</div> */}