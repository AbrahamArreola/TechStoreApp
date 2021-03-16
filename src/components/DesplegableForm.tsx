import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import { createProduct } from "../services/product-services";

export interface IFormInput {
    nameInput: string;
    priceInput: number;
    categoryInput: string;
    descriptionText: string;
    imageInput: FileList;
}

const api = process.env.REACT_APP_API_URL;

export const DesplegableForm = () => {
    const [formExpanded, setFormExpanded] = useState<boolean>(false);
    const [sendingForm, setSendingForm] = useState<boolean>(false);
    const { register, handleSubmit, errors, reset } = useForm<IFormInput>();
    const toggleButton = useRef<HTMLButtonElement>(null);

    const onSubmit = async (data: IFormInput) => {
        setSendingForm(true);
        try {
            const formData = new FormData();
            formData.append("name", data.nameInput);
            formData.append("price", String(data.priceInput));
            formData.append("description", data.descriptionText);
            formData.append("image", data.imageInput[0]);

            const resp = await createProduct(formData);
            console.log(resp);

            mutate(`${api}/products`);
            setSendingForm(false);
            reset();
            setFormExpanded(false);
            toggleButton.current?.click();
        } catch (error) {
            setSendingForm(false);
            console.log(error);
        }
    };

    return (
        <div id="desplegable-form">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button
                            ref={toggleButton}
                            className="btn"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            onClick={() => setFormExpanded(!formExpanded)}
                        >
                            <span>Add product </span>
                            <i
                                className={
                                    formExpanded
                                        ? "fas fa-angle-down"
                                        : "fas fa-angle-up"
                                }
                            ></i>
                        </button>
                    </h5>
                </div>

                <div
                    id="collapseOne"
                    className="collapse"
                    data-parent="#desplegable-form"
                >
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="product-name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="product-name"
                                    name="nameInput"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "name required",
                                        },
                                    })}
                                />
                                <span className="text-danger">
                                    {errors.nameInput &&
                                        errors.nameInput.message}
                                </span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product-price">
                                    Price(usd)
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="product-price"
                                    min={0}
                                    name="priceInput"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "price required",
                                        },
                                        max: {
                                            value: 500000,
                                            message:
                                                "Value must be less than 500000",
                                        },
                                        min: {
                                            value: 1,
                                            message:
                                                "Value must be more than 0",
                                        },
                                    })}
                                />
                                <span className="text-danger">
                                    {errors.priceInput &&
                                        errors.priceInput.message}
                                </span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="product-name">Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="product-category"
                                    name="categoryInput"
                                    list="categories"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "category required",
                                        },
                                    })}
                                />
                                <datalist id="categories">
                                    <option value="category1"></option>
                                    <option value="category2"></option>
                                </datalist>
                                <span className="text-danger">
                                    {errors.categoryInput &&
                                        errors.categoryInput.message}
                                </span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="product-description">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="product-description"
                                    name="descriptionText"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "description required",
                                        },
                                        minLength: {
                                            value: 15,
                                            message:
                                                "Description must contain at least 15 characters",
                                        },
                                    })}
                                ></textarea>
                                <span className="text-danger">
                                    {errors.descriptionText &&
                                        errors.descriptionText.message}
                                </span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">
                                    Image
                                </label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleFormControlFile1"
                                    name="imageInput"
                                    ref={register}
                                />
                            </div>
                            <hr />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={sendingForm}
                            >
                                {sendingForm ? (
                                    <div
                                        className="spinner-border text-light"
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                ) : (
                                    <span>Submit</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
