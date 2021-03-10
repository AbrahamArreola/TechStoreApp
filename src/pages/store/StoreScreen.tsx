import { Slider } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DesplegableForm } from "../../components/DesplegableForm";
import { ProductCard } from "../../components/ProductCard";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
    img?: string;
}

const marks = [
    {
        value: 0,
        label: "0k",
    },
    {
        value: 100,
        label: "100k",
    },
];

export const StoreScreen = () => {
    const [products, setProducts] = useState<IProduct[] | []>([
        {
            id: 1,
            name: "Computer",
            price: 12000,
            img:
                "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
        },
        { id: 2, name: "Mobile", price: 6000 },
        { id: 3, name: "Mobile", price: 6000 },
        { id: 4, name: "Mobile", price: 6000 },
        { id: 5, name: "Mobile", price: 6000 },
    ]);

    const [value, setValue] = React.useState<number[]>([10, 30]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="store-box-inner row justify-content-center">
            <DesplegableForm />
            <div className="col-12 col-sm-11">
                <div className="store-container row">
                    <div className="store-content-left col-12 col-lg-9">
                        <div className="store-actions-bar row">
                            <h3>TechStore products</h3>
                        </div>

                        <div className="store-products row">
                            {products.map((product: IProduct) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="store-sidebar-right col-12 col-lg-3">
                        <div className="search-product">
                            <input type="text" placeholder="search product" />
                            <button>
                                <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                        <div className="product-categories">
                            <div className="title">
                                <h4>Categories</h4>
                            </div>
                            <div id="categories" className="categories">
                                <Link
                                    to="#"
                                    data-toggle="collapse"
                                    data-target="#products"
                                >
                                    Some category
                                </Link>
                                <div
                                    className="products collapse"
                                    id="products"
                                >
                                    <div className="product-item">
                                        <p>Hello</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price-selector">
                            <div className="title">
                                <h4>Price</h4>
                            </div>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                marks={marks}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
