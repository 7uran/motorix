import axios from 'axios';
import { toast } from 'react-toastify';

export const getData = async (url: string) => {
    try {
        const response = await axios.get(url, { withCredentials: true });

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error("Error get data");
            return null;
        }
    } catch (error) {
        toast.error("Error");
        return null;
    }
};

export const handleGetData = async (customUrl: string) => {
    const data = await getData(customUrl);
  
};



