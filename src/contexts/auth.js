import {createContext, useEffect, useState} from 'react';
// Importar banco de dados
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({children}){
 
 const [user, setUser] = useState(null);

 //  loadings
 const [loading, setLoading] = useState(true);
 const [loadingAuth, setLoadingAuth] = useState(false);

//  Pegando os dados do storage
 useEffect(() => {
     function storageUser(){
        const isUser = localStorage.getItem('user');

        if(isUser){
            // Transformando JSON em object
            setUser(JSON.parse(isUser));
            setLoading(false);
        }

        setLoading(false);
     }
     storageUser()
 }, [])

//  Cadastrando usuário
 async function signUp(email, password, fullName, gender){
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(async(value) => {
        let uid = value.user.uid;
        
        await firebase.firestore().collection('users').doc(uid).set({
            name: fullName,
            avatarUrl: null, 
            email: email,
            gender: gender,
            uid: uid
        }).then(() => {
            let data = {
                uid: uid,
                name: fullName,
                avatarUrl: null, 
                email: email,
                gender: gender
            }

            // Atualizando as states
            setUser(data);
            setLoadingAuth(false);
            // Salvando o user no storage
            storageUser(data);
            alert('Bem Vindo')

        }).catch((error) => {
            console.log(error);
            setLoadingAuth(false);
        })
    })
 }

// Login
async function login(email, password){
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email, password).then(async(value) => {
        let uid = value.user.uid; 
        const userProfile = await firebase.firestore().collection('users').doc(uid).get()

        let data = {
            uid: uid,
            name: userProfile.data().name,
            avatarUrl: userProfile.data().avatarUrl, 
            email: userProfile.data().email,
            password: userProfile.data().password,
            gender: userProfile.data().gender
        }

        // Atualizando as states
        setUser(data);
        setLoadingAuth(false);
        // Salvando o user no storage
        storageUser(data);
        alert('Bem Vindo')

    }).catch((error) => {
        console.log(error);
        setLoadingAuth(false);
    })
 }

//  Salvando o user no storage
 function storageUser(user){
    //  Transforma jason um object
     localStorage.setItem('user', JSON.stringify(user));
 }

// SignOut
 async function signOut(){
    await firebase.auth().signOut();
    localStorage.removeItem('user');
    setUser(null);
    alert('Saindo');
 }

 return(
    //  !! ele converte o valor em object em boolean
     <AuthContext.Provider value={{signed: !!user, user, setUser, loading, loadingAuth, signUp, storageUser, login, signOut}}>
         {children}
     </AuthContext.Provider>
 )

}