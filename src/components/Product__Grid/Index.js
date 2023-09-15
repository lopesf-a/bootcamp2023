
import React, {useEffect, useState} from 'react';
import './style.css';
import Product_Card from '../Product__Card/index';

const Index = () => {
     // Créé une state products
  const [products, setProduct] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {console.log(data);
      setProduct(data.products);
    console.log(products);})
  }, []);
    return (
        <div>
            {/* map des states poru afficher chaque produits */}
             {products.map(
            (product) => (
              <div className='product__card'>
                  <table>
                      <tbody>
                          <tr key={product.id}>
                              <td>  <img src={product.thumbnail} alt="icons" className='item__thumbnail'/></td>
                            </tr>
                            <tr key={product.id}>
                              <td className='item__title'> {product.title}  </td>
                            </tr>
                            
                            <tr key={product.id}>
                              <td className='item__desc'> {product.description}  </td>
                              
                            </tr>
                            <tr key={product.id}>
                              <td className='item__title'> {product.price} &euro;  </td>
                            </tr>
                            <tr key={product.id}>
                                <p>
                                    {
                                        product.stock < 50 && (
                                            <p> Attention plus que {product.stock} en stock </p>
                                            )   
                                    }
                                </p>
                            </tr>
                      </tbody>
                  </table>
              </div>
           )
          )}
        </div>
    );
}

export default Index;
