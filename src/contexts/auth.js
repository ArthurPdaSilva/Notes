import { db, auth } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [typePassword, setTypePassword] = useState('password');
    const [list, setList] = useState([]);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
    function storageUser(){
        const isUser = localStorage.getItem('user');
        if(isUser){
            setUser(JSON.parse(isUser));
        }
    }
    storageUser()
    }, [])

//  Cadastrando usuário
    async function signUp(email, password, fullName, gender){
        setLoadingAuth(true);
        await createUserWithEmailAndPassword(auth, email, password).then(async(value) => {
            let uid = value.user.uid;
            await setDoc(doc(db, `users/${uid}`), {
                uid: uid,
                name: fullName,
                avatarUrl: null, 
                email: email,
                gender: gender
            }).then(() => {
                let data = {
                    uid: uid,
                    name: fullName,
                    avatarUrl: null, 
                    email: email,
                    gender: gender
                }

                setUser(data);
                storageUser(data);
                alert('Bem Vindo');

            }).catch((error) => {
                console.log(error);
            })
        })

        setLoadingAuth(false);
    }   

 // Login
    async function login(email, password){
        setLoadingAuth(true);
        await signInWithEmailAndPassword(auth, email, password).then(async(value) => {
            let uid = value.user.uid; 
            const userProfile = await getDoc(doc(db, `users/${uid}`))

            let data = {
                uid: uid,
                name: userProfile.data().name,
                avatarUrl: userProfile.data().avatarUrl, 
                email: userProfile.data().email,
                password: userProfile.data().password,
                gender: userProfile.data().gender
            }

            setUser(data);
            storageUser(data);
            alert('Bem Vindo');

        }).catch((error) => {
            console.log(error);
            
        })

        setLoadingAuth(false);
    }

    function handlePasswordVisible(){
        if(typePassword === 'password'){
            setTypePassword('text');
        }else{
            setTypePassword('password');
    }
    }

    function storageUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    async function deslogar(){
        await signOut(auth);
        alert('Saindo...');
        localStorage.removeItem('user');
        setUser(null);
    }

    async function updateState(snapshot){
        let lista = []
        snapshot.forEach((doc) => {
            lista.push({
            idUser: doc.data().idUser,
            nameList: doc.data().nameList,
            itens: doc.data().itens
            })
        })

        setList(lista.filter((item) => item.idUser === user.uid))
    }

    return(
        <AuthContext.Provider 
        value={{signed: !!user, user,
        setUser, loadingAuth, 
        signUp, storageUser, login, 
        signOut, handlePasswordVisible, 
        typePassword, list, setList, 
        updateState, deslogar}}>
            {children}
        </AuthContext.Provider>
    )

}