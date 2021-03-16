import React from "react";
import _ from "lodash";
import { Skeleton } from "@material-ui/lab";

const cardsNumber: number = 6;

export const StoreSkeleton = () => {
    return (
        <div className="store-skeleton row justify-content-center">
            <div className="col-12 col-sm-11">
                <div className="store-container row">
                    <div className="store-content-left col-12 col-lg-9">
                        <div className="skeleton-bar row">
                            <Skeleton
                                animation="wave"
                                style={{ height: 40, width: "100%" }}
                            />
                        </div>
                        <div className="store-products row">
                            {_.times(cardsNumber, (i) => (
                                <div className="col-12 col-sm-4" key={i}>
                                    <div className="skeleton-card">
                                        <Skeleton
                                            animation="wave"
                                            variant="rect"
                                            style={{
                                                marginBottom: 10,
                                                height: 140,
                                            }}
                                        />
                                        <Skeleton
                                            animation="wave"
                                            style={{
                                                marginBottom: 10,
                                                height: 20,
                                            }}
                                        />
                                        <Skeleton
                                            animation="wave"
                                            style={{ height: 10, width: "80%" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="store-sidebar-right col-12 col-lg-3">
                        <Skeleton
                            animation="wave"
                            variant="rect"
                            style={{ height: "50%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
