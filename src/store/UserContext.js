import React, {useState, createContext, useEffect} from 'react'
import { getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
 } from "firebase/auth";


export const UserContext = createContext({
    user: null,
    login: (user) => {},
    signup: (user) => {},
    logout: () => {},
})

export function UserContextProvider({ children }) {

    const [user, setUser] = useState(null)
    const auth = getAuth()



    const signup = async ({ email, password, name, photoUrl }) => {
        const authUser = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(authUser.user, {
            displayName: name,
            photoURL: photoUrl,
        })
        setUser({
            id: authUser.user.uid,
            name: authUser.user.displayName,
            email: authUser.user.email,
            photoUrl: authUser.user.photoURL,
        })
    }


    const login = async ({ email, password }) => {
        const authUser = await signInWithEmailAndPassword(auth, email, password)
        setUser({
            id: authUser.user.uid,
            name: authUser.user.displayName,
            email: authUser.user.email,
            photoUrl: authUser.user.photoURL,
        })
    }

    const logout = async () => {
        await signOut(auth)
        setUser(null)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                })
            } else {
                // User is signed out
                setUser(null)
            }
        });
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            login,
            logout,
            signup,
        }}>
            {children}
        </UserContext.Provider>
    )
}


