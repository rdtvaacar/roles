import React, {useContext, useEffect, useState} from 'react';
import instance from "../instance";
import Button from "@material-ui/core/Button";
import {RolesContext} from "../Store";

const Roles = ({match}) => {
    const [user, setUser] = useState([])
    const [roles, setRoles] = useContext(RolesContext)
    const [myRoles, setMyRoles] = useState([])
    useEffect(() => {
        instance
            .get('acr/roles/users', {
                params: {id: match.params.id}
            })
            .then(function (res) {
                setUser(res.data[0])
                setRoles(res.data[1])
                setMyRoles(res.data[2])
            })
    }, [])
    const RolesView = () => {
        const iRoles = myRoles[user.id];
        try {
            return roles.map(role =>
                <Button onClick={() => roleUpdate(role.id)} key={role.id} size="small" variant="contained" color={iRoles ? iRoles.includes(role.id) ? 'primary' : 'default' : 'default'} className={`acr-1`}>{role.name}</Button>
            )
        } catch (e) {
            return <></>
        }
    }

    const roleUpdate = (role_id) => {
        instance
            .post('acr/roles/update', {
                user_id: user.id, role_id: role_id
            })
            .then(function (res) {
                setMyRoles(res.data)
            })
    }

    return (
        <div className=" App">
            <RolesView/>
        </div>
    );
}

export default Roles;