import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import useSWR from "swr";

const api = process.env.REACT_APP_API_URL;

export const ProductScreen = () => {
    const productId = useParams<{ id: string }>();

    const { error, data } = useSWR(`${api}/products/${productId.id}`);

    if (error) {
        return <p>There was an error!</p>;
    }

    if (!data) {
        return (
            <div className="product-loading-screen">
                <CircularProgress className="circular-loading" />
            </div>
        );
    }

    if (!data.product) {
        return <Redirect to="/store/products" />;
    }

    return (
        <div className="product-box-inner row justify-content-center">
            <div className="col-10 col-sm-8 col-lg-10">
                <div className="row">
                    <div className="product-content-left col-lg-8">
                        <div className="product-img">
                            <img
                                src={data.product.img}
                                alt={data.product.name}
                            />
                            <span className="price-tag">
                                ${data.product.price}
                            </span>
                        </div>
                        <div className="product-info">
                            <h2>{data.product.name}</h2>
                            <p>{data.product.description}</p>
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
                                <p className="category">- Category</p>
                            </div>
                        </div>
                        <div className="container-inner">
                            <h4>Related products</h4>
                            <hr />
                            <div className="related-product">
                                <div className="img">
                                    <img
                                        src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
                                        alt="product"
                                    />
                                </div>
                                <div className="details">
                                    <Link to="#">Hello</Link>
                                    <p>$6000</p>
                                </div>
                            </div>
                            <div className="related-product">
                                <div className="img">
                                    <img
                                        src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
                                        alt="product"
                                    />
                                </div>
                                <div className="details">
                                    <Link to="#">
                                        Hello this is some large text hello
                                    </Link>
                                    <p>$6000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
