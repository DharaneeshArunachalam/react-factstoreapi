import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import './App.css';
export default function Api() {

    const [details,setDetails] = useState ([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=20')
        .then(response=>response.json())
        .then(json=>setDetails(json));
        
    },[])

  return (
    <>
      <div className="container">
        <div className="mt-5">
            <table className="col-lg-12" border="2">
                <thead>
                    <tr>
                    <th>Product image</th>
                    <th>Product name</th>
                    <th>Product description</th>
                    <th>Product rating</th>
                    <th>Product category</th>
                    <th>Product count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((value,index)=>(
                            <tr>
                                <td><img src={value.image} className="img"/></td>
                                <td>{value.title}</td>
                                <td>{value.description}</td>
                                <td>{value.rating.rate}</td>
                                <td>{value.category}</td>
                                <td>{value.rating.count}</td>                               
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
}

