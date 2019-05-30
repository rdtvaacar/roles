import React, {useState} from 'react';

export const NameContext = React.createContext()
export const RoleContext = React.createContext()
export const RolesContext = React.createContext()
const Store = ({children}) => {
    const [name, setName] = useState(null)
    const [role, setRole] = useState({})
    const [roles, setRoles] = useState([])
    return (
        <NameContext.Provider value={[name, setName]}>
            <RoleContext.Provider value={[role, setRole]}>
                <RolesContext.Provider value={[roles, setRoles]}>
                    {children}
                </RolesContext.Provider>
            </RoleContext.Provider>
        </NameContext.Provider>
    )
}
export default Store