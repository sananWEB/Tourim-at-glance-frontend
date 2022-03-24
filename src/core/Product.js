import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };
  console.log(product);
  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <Layout>
      <div className="mx-2 gap-5 flex flex-col lg:flex lg:flex-row md:flex md:flex-row">
        <div className="w-full">
          {product && product.description && (
            <Card
              product={product}
              days={product.days}
              showViewProductButton={false}
              desc={product.description.substring(0, 400)}
            />
          )}
        </div>

        <div className="w-full ">
          <h4 className="my-5 mr-5 text-yellow-600 text-center border-2 rounded border-yellow-600 p-3">
            Related products
          </h4>
          {relatedProduct.map((p, i) => (
            <Card key={i} product={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
