import React, {useContext, useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import instance from "../instance";
import {Directions, Add, ViewList} from '@material-ui/icons';
import {NameContext, RoleContext, RolesContext} from "../Store";
import {Link} from 'react-router-dom';

const Form = () => {
    const [role, setRole] = useContext(RoleContext)
    const [, setRoles] = useContext(RolesContext)
    const [name, setName] = useContext(NameContext)
    const newRole = () => {
        instance
            .post('acr/roles/new', {
                id: role.id, name: name
            })
            .then(function (res) {
                setRoles(res.data)
                setName('')
                setRole({})
            })
    }
    const handleChange = (e) => {
        e.persist();
        setName(e.target.value)
    }
    const resetForm = () => {
        setName('')
        setRole({})
    }

    return (
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="center"
              container
        >
            <Grid item xs={8}>
                <TextField
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            newRole()
                            ev.preventDefault();
                        }
                    }}
                    id="role.id"
                    value={name}
                    autoFocus={true}
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    aria-label="Toggle password visibility"
                                    onClick={() => newRole()}
                                    color={'primary'}
                                >
                                    <Directions/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid container  xs={4} direction="row" alignItems="center" justify="space-around">
                <Grid item xs={2}>
                    <Fab onClick={() => resetForm()} color="secondary" size="small" aria-label="Add">
                        <Tooltip title="Add" aria-label="Add">
                            <Add/>
                        </Tooltip>
                    </Fab>
                </Grid>
                <Grid item xs={2}>
                    <Link to={'/acr/roles'}>
                        <Fab onClick={() => resetForm()} color="primary" size="small" aria-label="List">
                            <Tooltip title="List" aria-label="List">
                                <ViewList/>
                            </Tooltip>
                        </Fab>
                    </Link>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default Form;