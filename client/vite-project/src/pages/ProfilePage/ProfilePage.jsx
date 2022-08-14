import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import { useLocation } from 'react-router-dom';

const UserCatalog = () => {
    let location = useLocation()
    const [user, setUser] = useState([])
    const userPro = location.pathname.split('/')[1]

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/user?userName=${userPro}`)
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));
    },[]);

    return (
            <div>
                <tbody
                    style={{
                        paddingTop: '4.3rem',
                        display: "flex",
                        justifyContent: "space-evenly",
                        alingContent: "center",
                        flexWrap: "wrap",
                        gap: "2rem",
                        margin: "2rem",
                    }}
                >
                    {user.map((user) => (
                        <tr key={user.id}>
                            <Card data={user} key={user.userName} />
                        </tr>
                    ))}
                </tbody>
            </div>
    );
};

export default UserCatalog;