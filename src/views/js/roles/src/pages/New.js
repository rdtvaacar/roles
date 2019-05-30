import React, {useContext, useEffect, useState} from 'react';
import instance from "../instance";
import Form from "./Form";
import AllRoles from "./AllRoles";
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {RoleContext, RolesContext} from "../Store";

const New = () => {
    const [role, setRole] = useContext(RoleContext)
    const [, setRoles] = useContext(RolesContext)
    useEffect(() => {
        if (role.id) {
            instance
                .get(`acr/roles/index/${role.id}`)
                .then(function (res) {
                    setRole(res.data)
                })
        } else {
            instance
                .get(`acr/roles/index`)
                .then(function (res) {
                    setRoles(res.data)
                })
        }
    }, [role.id])

    return (
        <div className=" App">
            <Form/>

            <Grid item xs={12} md={6}>
                <Typography variant="h6">
                    Roles
                </Typography>
                <div>
                    <List>
                        <AllRoles/>
                    </List>
                </div>

            </Grid>
        </div>
    );
}

export default New;