import React from "react";

export const ProductScreen = () => {
    return (
        <div className="product-box-inner row justify-content-center">
            <div className="col-10 col-sm-8 col-lg-10">
                <div className="row">
                    <div className="product-content-left col-lg-8">
                        <div className="product-img">
                            <img src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg" alt="not found" />
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
                        <div className="next-previous-posts">
                            <div className="previous-post"></div>
                            <div className="next-post"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
