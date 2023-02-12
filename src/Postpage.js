import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Footer from './Footer';
import Navigationbar from './Navbar';
import './Postpage.css'

const Postpage = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);




    
    
    useEffect(() => {
        const getPostById = async () => {
            const res = await axios.get(`https://dummyapi.io/data/v1/post/${id}`,{
                headers:{
                    "app-id":"63e5b08d84c14d8ac8d33bda",
                }
            })
        
            console.log(res.data);
            setData(res.data);
        }
        getPostById();
    },[id])

    console.log(id);
   return (<div>
    <Navigationbar/>
    <div style={{backgroundColor:'antiquewhite'}}><div>
        <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div className="card-deck pcard" style={{display:'flex', width:'550px',marginTop:'20px'}}>
                <div className="card align-center">
                <img src={ data?.image && data.image}alt="ffy" style={{width:"500px",height:"200px",alignSelf: 'center'}} className="card-img-top center"/>
                    <div className="card-body">
                        <div className=" h2" style={{textAlign: "center"}}>ID :  <h6>{data.id}</h6></div><hr />
                        <div className="card-subtitle h2 " style={{textAlign: "center"}}>Likes: <h6>{data.likes}</h6></div><hr />
                        <div className="card-subtitle h2 " style={{textAlign: "center"}}>Link: <h6>{data.link}</h6></div><hr />
                        <div className="card-subtitle h2 " style={{textAlign: "center"}}>Owner : {`${data.owner?.title} ${data.owner?.firstName} ${data.owner?.lastName}`} </div><hr />
                        <div className="card-subtitle h2 " style={{textAlign: "center"}}>Owner ID : <h6>{data.owner?.id}</h6> </div><hr />
                        <img src={ data.owner?.picture && data.owner.picture}alt="ffy" style={{width:"400px",height:"400px",alignSelf: 'center'}} className="center"/><hr />
                        <div className="card-subtitle h2 " style={{textAlign: "center"}}>Publishdate: <h6>{data.publishDate} </h6></div><hr />
                        <div className=" h2" style={{textAlign: "center"}}>Tags :  </div>
                        {data?.tags?.map(ele => {
                            return (
                                <div>
                                    <div style={{textAlign: "center"}} ><h6>{ele}</h6></div>
                                </div>
                            )

                            
                        })}<hr />
                        <div className="card-text" style={{textAlign: "center"}}><h6>{data?.text && data.text} </h6></div>
                    </div>
                </div></div> </div>
    </div>
    <Footer />

    </div></div>
  )
}

export default Postpage;