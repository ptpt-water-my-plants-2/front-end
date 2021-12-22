import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
       // baseUrl: 'https://water-my-plants-app2.herokuapp.com',
        headers: {
            authorization: token
        }

    })
}

export default axiosWithAuth;