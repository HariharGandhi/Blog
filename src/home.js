import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Navigationbar from './Navbar';
import { Container, Form } from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import Footer from './Footer';
import "./home.css"
const Home = () => {
    const [data,setData] = useState([]);
    const navigate = useNavigate();

const getData = async () => {
    const res = await axios.get("https://dummyapi.io/data/v1/post?page=1&limit=12",{
        headers:{
            "app-id":"63e5b08d84c14d8ac8d33bda",
        }
    })

    console.log(res.data.data);
    setData(res.data.data);
}

useEffect(() => {
  getData();
},[])

const handleClick = (ele) => {
    console.log(ele);
    navigate(`/details/${ele.id}`);
}

  return (
    <div style={{backgroundColor: '#00FF7F'}}>
<Navigationbar />
<br></br>
<div>
        <div className="home">
      <Container className="root-container" >
        <h1 style={{alignContent:'center'}}> Our BLOGS :</h1>
        <Grid className="sample-grid" container spacing={3}>
          {data.map((ele) => (
            <Grid className="feedback-requesters-grid" container item xs={3}>
              <Form>
              <div class="form-group row">
              <div className="container m-2" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div className="card-deck" style={{width : '300px', height: '500px'}}>
                <div className="card hcard align-center" key={ele.id} onClick={() => handleClick(ele)}>
                <img src={ele.image} alt="ffy" style={{width:"250px",height:"200px",alignSelf: 'center'}} className="card-img-top center"/>
                    <div className="card-body">
                        <div className=" h2" style={{textAlign: "center"}}>{ele.id}</div>
                        <div className="card-text h6" style={{textAlign: "center"}}>{ele.text}</div>
                    </div>
                </div></div> </div>
                </div>
                </Form>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
    <Footer />
        {/* <div className='box' key={ele.id} onClick={() => handleClick(ele)}>
        <img src={ele.image}alt="ffy" style={{width:"200px",height:"200px"}} />
        <p>{ele.text}</p>
    </div>  */} </div>
  
</div>
    
  )
}

export default Home;