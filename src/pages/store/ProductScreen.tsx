import React from "react";
import { Link } from "react-router-dom";

export const ProductScreen = () => {
    return (
        <div className="product-box-inner row justify-content-center">
            <div className="col-10 col-sm-8 col-lg-10">
                <div className="row">
                    <div className="product-content-left col-lg-8">
                        <div className="product-img">
                            <img
                                src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
                                alt="not found"
                            />
                            <span className="price-tag">$6000</span>
                        </div>
                        <div className="product-info">
                            <h2>Title</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Quas iste fugiat laborum
                                doloribus voluptatem, deleniti voluptates
                                voluptas. Ipsam deserunt tempora, molestiae
                                porro fuga dolor? Fuga quos voluptate assumenda
                                soluta debitis.
                            </p>
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
                            <h4>Categories</h4>
                            <hr />
                            <div className="categories">
                                <p className="category">- Category</p>
                                <p className="category">- Category</p>
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
