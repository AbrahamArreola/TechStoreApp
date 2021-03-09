import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
    nameInput: string;
    priceInput: number;
    descriptionText: string;
    imageInput: FileList;
}

export const DesplegableForm = () => {
    const [formExpanded, setFormExpanded] = useState<boolean>(false);
    const { register, handleSubmit, errors } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        console.log(data);
    };

    return (
        <div id="desplegable-form">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button
                            className="btn"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
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
                    aria-labelledby="headingOne"
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
                            <button type="submit" className="btn btn-primary">submit</button>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
