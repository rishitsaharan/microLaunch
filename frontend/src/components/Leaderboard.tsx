import { useState, useEffect } from 'react';
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { ProductCard } from './ProductCard';

export const Leaderboard =  () => {
    const [products, setProducts] = useState< any []>([]);
    const [socket, setSocket] = useState<WebSocket | null>(null);

    async function getProducts() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/product/leaderboard`, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        });
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts();
    }, []);
    return <div className='mt-10'>
        {products.map((product, index) => {
            return (
                <div key={product.id}>
                    <ProductCard key={product.id} product={product} index={index}/>
                </div>
            )
        })}
    </div>
}