import React, {useContext} from 'react';
import instance from "../instance";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Edit} from '@material-ui/icons';
import {NameContext, RoleContext, RolesContext} from "../Store";


const AllRoles = () => {
    const [, setRole] = useContext(RoleContext)
    const [roles, setRoles] = useContext(RolesContext)
    const [, setName] = useContext(NameContext)
    const deleteRole = (id) => {
        instance
            .delete(`acr/roles/index/${id}`)
            .then(function () {
                    const result = roles.filter(val => val.id !== id)
                    setRoles(result)
                }
            )
    }

    const editRole = (role) => {
        setRole(role)
        setName(role.name)
    }
    return roles.map(role =>
        <ListItem key={role.id}>
            <ListItemText
                primary={role.name}
            />
            <ListItemSecondaryAction>
                <IconButton onClick={() => editRole(role)} edge="end" aria-label="Edit">
                    <Edit/>
                </IconButton>
                <IconButton onClick={() => deleteRole(role.id)} edge="end" aria-label="Delete">
                    <Delete/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>

    )
}


export default AllRoles;