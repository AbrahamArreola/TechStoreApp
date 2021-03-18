import { Slider } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { DesplegableForm } from "../../components/DesplegableForm";
import { ProductCard } from "../../components/ProductCard";
import { StoreSkeleton } from "../skeletons/StoreSkeleton";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    description?: string;
    img?: string;
}

interface ICategory {
    id: number;
    name: string;
    products: IProduct[];
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

const api = process.env.REACT_APP_API_URL;

export const StoreScreen = () => {
    const { error: productsError, data: productsData } = useSWR(
        `${api}/products`
    );
    const { error: categoriesError, data: categoriesData } = useSWR(
        `${api}/categories`
    );

    const [value, setValue] = useState<number[]>([10, 30]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    if (productsError || categoriesError) {
        return <p>There was an error!</p>;
    }

    if (!productsData || !categoriesData) {
        return <StoreSkeleton />;
    }

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
                            {productsData.products?.length === 0 && (
                                <p>There aren't products to show</p>
                            )}
                            {productsData.products?.map((product: IProduct) => (
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
                                {categoriesData.categories?.length === 0 && (
                                    <p>There aren't categories to show</p>
                                )}
                                {categoriesData.categories?.map(
                                    (category: ICategory) => (
                                        <Fragment key={category.id}>
                                            <Link
                                                to="#"
                                                data-toggle="collapse"
                                                data-target={`#${category.name}`}
                                            >
                                                {category.name}
                                            </Link>

                                            <div
                                                key={category.id}
                                                className="products collapse"
                                                id={`${category.name}`}
                                            >
                                                <div className="product-item">
                                                    {category.products.map(
                                                        (product: IProduct) => (
                                                            <p key={product.id}>
                                                                <Link
                                                                    to={`/store/products/${product.id}/${product.categoryId}`}
                                                                >
                                                                    {
                                                                        product.name
                                                                    }
                                                                </Link>
                                                            </p>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </Fragment>
                                    )
                                )}
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
