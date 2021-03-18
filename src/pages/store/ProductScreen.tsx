import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import useSWR from "swr";
import { IProduct } from "./StoreScreen";

const api = process.env.REACT_APP_API_URL;

export const ProductScreen = () => {
    const product = useParams<{ id: string; categoryId: string }>();

    const { error: productError, data: productData } = useSWR(
        `${api}/product/${product.id}`
    );

    const { error: productsError, data: productsData } = useSWR(
        `${api}/products?categoryId=${product.categoryId}&limit=${5}`
    );

    if (productError || productsError) {
        return <p>There was an error!</p>;
    }

    if (!productData || !productsData) {
        return (
            <div className="product-loading-screen">
                <CircularProgress className="circular-loading" />
            </div>
        );
    }

    if (!productData.product || !productsData.products) {
        return <Redirect to="/store/products" />;
    }

    return (
        <div className="product-box-inner row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-10">
                <div className="row">
                    <div className="product-content-left col-lg-8">
                        <div className="product-img">
                            <img
                                src={productData.product.img}
                                alt={productData.product.name}
                            />
                            <span className="price-tag">
                                ${productData.product.price}
                            </span>
                        </div>
                        <div className="product-info">
                            <h2>{productData.product.name}</h2>
                            <p>{productData.product.description}</p>
                            <div className="product-options">
                                <span className="rating">
                                    <i className="fas fa-star"></i> Rate: 4.5
                                </span>
                                <span className="comment">
                                    <i className="fas fa-comments"></i> Comment
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-sidebar-right col-lg-4">
                        <div className="container-inner">
                            <h4>Category</h4>
                            <hr />
                            <div className="categories">
                                <p className="category">
                                    - {productData.product.category.name}
                                </p>
                            </div>
                        </div>
                        <div className="container-inner">
                            <h4>Related products</h4>
                            <hr />

                            {productsData.products?.map(
                                (relatedProduct: IProduct) =>
                                    relatedProduct.id !== +product.id && (
                                        <div
                                            className="related-product"
                                            key={relatedProduct.id}
                                        >
                                            <div className="img">
                                                <img
                                                    src={relatedProduct.img}
                                                    alt={relatedProduct.name}
                                                />
                                            </div>
                                            <div className="details">
                                                <Link
                                                    to={`/store/products/${relatedProduct.id}/${relatedProduct.categoryId}`}
                                                >
                                                    {relatedProduct.name}
                                                </Link>
                                                <p>{relatedProduct.price}</p>
                                            </div>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
