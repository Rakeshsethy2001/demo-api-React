import { useState, useEffect } from 'react'
import axios from 'axios'
import './Api.css'
const Api = () => {
  const [productsList, setProductList] = useState([]);
  const getProduct = async () => {
    await axios.get("https://fakestoreapi.com/products/").then((res) => {
      console.log(res)
      setProductList(res.data)

    }).catch((Error) => {
      console.log(Error)
    })
  }
  useEffect(() => {
    getProduct();
  }, [])
  return (
    <div className='img-gallery'>
      {
        productsList.map(data => (
          <>
            <div className='parts'>
            <img className='images' src={data.image} />
            <p>{data.title}</p>
            <p>{data.price}</p>
            </div>
          </>
          
        ))
      }
    </div>
  )
}
export default Api;