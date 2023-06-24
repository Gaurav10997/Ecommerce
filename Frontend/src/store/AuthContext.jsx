import React, {useState , createContext , useContext} from 'react'

export const TokenContext = createContext();
export const IsLoggedInContext = createContext();
export const LoginHandlerContext = createContext();
export const LogoutHandlerContext = createContext();

export function useToken(){
  return useContext(TokenContext)
} 

export function useIsLogin(){
  return useContext(IsLoggedInContext)
}
export function useLoginHandler(){
  return useContext(LoginHandlerContext)
} 

export function useLogoutHandler(){
  return useContext(LogoutHandlerContext)
} 



 // eslint-disable-next-line react/prop-types
 export const AuthContextProvider = ({ children }) => {

  const [token,setToken] = useState(localStorage.getItem('token'));
  
  const userIsLoggedIn = !!token;

  const loginHandler = (token) =>{
    setToken(token);
    localStorage.setItem('token',token)

  }
  const logoutHandler = () =>{
    setToken(null);
    localStorage.removeItem('token')
  }
return (

  <TokenContext.Provider value ={token}>
    <IsLoggedInContext.Provider value={userIsLoggedIn} >
      <LoginHandlerContext.Provider value={loginHandler} >
        <LogoutHandlerContext.Provider value={logoutHandler} >
          {children}
        </LogoutHandlerContext.Provider>
      </LoginHandlerContext.Provider>
    </IsLoggedInContext.Provider>
  </TokenContext.Provider>

) 
}

 
 export default AuthContextProvider