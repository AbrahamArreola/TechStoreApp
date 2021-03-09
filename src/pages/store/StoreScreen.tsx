import React, { useState } from "react";
import { DesplegableForm } from "../../components/DesplegableForm";
import { ProductCard } from "../../components/ProductCard";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
    img?: string;
}

export const StoreScreen = () => {
    const [products, setProducts] = useState<IProduct[] | []>([
        { id: 1, name: "Computer", price: 12000, img: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg" },
        { id: 2, name: "Mobile", price: 6000 },
        { id: 3, name: "Mobile", price: 6000 },
        { id: 4, name: "Mobile", price: 6000 },
        { id: 5, name: "Mobile", price: 6000 },
    ]);

    return (
        <div className="store-box-inner row justify-content-center">
            <DesplegableForm />
            <div className="col-12 col-lg-11">
                <div className="store-container row">
                    <div className="store-content-right col-12 col-sm-9">
                        <div className="store-actions-bar row">
                            <h3>TechStore products</h3>
                        </div>

                        <div className="store-products row">
                            {
                                products.map((product: IProduct) => (
                                    <ProductCard key={product.id} product={product}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="store-sidebar-left col-12 col-sm-3"></div>
                </div>
            </div>
        </div>
    );
};
