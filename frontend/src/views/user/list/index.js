import { React, useEffect, useState } from 'react'
import axios from "axios"

const UserList = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        await axios.get(
            `/api/users/`
        ).then((value) => {
            console.log("value", value.data)
            setList(value.data)
        }).catch((e) => {
            console.log("e", e)
        })
    }


    return (
        <div>
            <h1>User List</h1>

            {list.length > 0 ? list.map((user, i) =>
                <div key={i}>
                    <p style={{margin: 0}}>Email: {user.email}</p>
                    <p style={{margin: 0}}>Usename: {user.full_name}</p>
                    <br/>
                </div>
            )
            :
            <p>There are no users.</p>
        
        }
        </div>
    )
}

export default UserList