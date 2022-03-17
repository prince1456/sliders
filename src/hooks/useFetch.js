import { useState, useEffect } from "react"
const mockUrl = "https://api.unsplash.com/photos/random";

const useFetch = (url = mockUrl, options) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await fetch(url, options);
                const data = await result.json();
                setData(data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [url, options]);
    const reFetch = async () => {
        setLoading(true);
        try {
            const result = await fetch(url, options);
            const data = await result.json();
            setData(data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
}

export default useFetch;