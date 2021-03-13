
const api = process.env.REACT_APP_API_URL;

export const createProduct = (product: FormData) => {
    return new Promise((resolve, reject) => {
        fetch(`${api}/products/create`, { method: "POST", body: product })
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
    });
};
