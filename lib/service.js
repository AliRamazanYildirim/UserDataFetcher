import axios from 'axios';

const getData = async (userId) => {
    try {
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        
        const user = userResponse.data;
        const posts = postsResponse.data;
        
        return {
            ...user,
            posts: posts
        };
    } catch (error) {
        console.error("Error fetching data", error);
        throw error;
    }
};

export default getData;
