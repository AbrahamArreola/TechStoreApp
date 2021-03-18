import React from "react";
import { IProduct } from "../pages/store/StoreScreen";
import imageNotFound from "../assets/img/not-found.jpg";
import { Link } from "react-router-dom";

type ProductCardProps = {
    product: IProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="col-12 col-sm-4">
            <div className="product-card">
                <img src={product.img || imageNotFound} alt={product.name} />
                <div className="info-section">
                    <h4 className="product-name">
                        {product.name}{" "}
                        <Link
                            to={`/store/products/${product.id}/${product.categoryId}`}
                        >
                            (View)
                        </Link>
                    </h4>
                    <span className="price-tag">$ {product.price}</span>
                </div>
            </div>
        </div>
    );
};
