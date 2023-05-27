import {React, useEffect, useState} from 'react'
import axios from "axios"

const UserList = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers  = async () => {
        await axios.get(
            `api/users/`
        ).then((value) => {
            console.log("value", value)
            //setList(value)
        }).catch((e) => {
            console.log("e", e)
        })
    }
    

    return (
        <div>
            <h1>User List</h1>
        </div>
    )
}

export default UserList