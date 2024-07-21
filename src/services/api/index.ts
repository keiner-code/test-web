const API = process.env.API_URL;

export const endPoint = {
    auth: {
        login: `${API}/auth/login`,
        check: `${API}/auth/user/check`
    },
    user: {
        create: `${API}/users`,
        findAll: `${API}/users`,
        update: (id: number) => `${API}/users/${id}`,
        findOne: (id: number) => `${API}/users/${id}`,
    },
    products: {
        create: `${API}/products`,
        update: (id: number) => `${API}/products/${id}`,
        findOne: (id: number) => `${API}/products/${id}`,
        findAll: (limit?: number, offset?: number) => `${API}/products?limit=${limit}&offset=${offset}`,
    },
    category: {
        create: `${API}/categories`,
        update: (id: number) => `${API}/categories/${id}`,
        findOne: (id: number) => `${API}/categories/${id}`,
        findAll: `${API}/categories`,
    },
    image: {
        create: `${API}/images`,
        update: (id: number) => `${API}/images/${id}`,
        findOne: (id: number) => `${API}/images/${id}`,
        findAll: `${API}/images`,
    }
}