
import React, {useEffect, useState} from 'react';
import './style.css';


const Index = ({product}) => {
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
                  <h1> {product.title} </h1>
                  <p> {product.description} </p>
                  <p> {product.price} &euro;</p>
                  <p>
                                    {
                                        product.stock < 50 && (
                                            <p> Attention plus que {product.stock} en stock </p>
                                            )   
                                    }
                                </p>
              </div>
           )
          )}
        </div>
    );
}

export default Index;
