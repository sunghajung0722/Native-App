import axios from 'axios';

const baseUrl = 'https://8e29-143-44-185-160.ngrok-free.app/api';
export const getTodoList = async () => {
    return axios.get(`${baseUrl}/todo`)
        .then(({ data }) => data.results)
};

export const PostList = async (myTask = "") => {
    const { data } = await axios.post(`${baseUrl}/todo`, {
        task: myTask,
    });
    return data;
};


export const UpdateList = async (myId = "", addTask = "", myStatus = "") => {
    const { data } = await axios.patch(`${baseUrl}/todo/${myId}`, {
        id: myId,
        task: addTask,
        status: myStatus,
    });
    return data;
};