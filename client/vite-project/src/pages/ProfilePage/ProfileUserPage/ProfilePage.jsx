import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";

import { useLocation } from 'react-router-dom';
import { getAllUser } from "../../../services/axiosServices";

const UserCatalog = () => {
    let location = useLocation()
    const [user, setUser] = useState([])
    const userPro = location.pathname.split('/')[2]

    useEffect(() => {
        window.scrollTo(0, 0)
        getAllUser({ setUser, userPro })
    }, []);

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