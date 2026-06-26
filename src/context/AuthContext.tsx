/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

interface User {
  id: number
  username: string
  email: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>
  register: (username: string, email: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(localStorage.getItem('lukas_token'))
  const [loading, setLoading] = useState(true)

  const logout = () => {
    localStorage.removeItem('lukas_token')
    delete axios.defaults.headers.common['Authorization']
    setToken(null)
    setUser(null)
  }

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          const response = await axios.get('/api/auth/me')
          setUser(response.data.user)
        } catch (error) {
          console.error('Failed to verify token:', error)
          logout()
        }
      }
      setLoading(false)
    }
    verifyToken()
  }, [token])

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password })
      const { token: newToken, user: newUser } = response.data
      
      localStorage.setItem('lukas_token', newToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
      setToken(newToken)
      setUser(newUser)
      
      return { success: true, message: response.data.message || 'Đăng nhập thành công!' }
    } catch (error) {
      let msg = 'Đăng nhập thất bại. Vui lòng kiểm tra lại.'
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        msg = error.response.data.message
      }
      return { success: false, message: msg }
    }
  }

  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/register', { username, email, password })
      const { token: newToken, user: newUser } = response.data
      
      localStorage.setItem('lukas_token', newToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
      setToken(newToken)
      setUser(newUser)
      
      return { success: true, message: response.data.message || 'Đăng ký thành công!' }
    } catch (error) {
      let msg = 'Đăng ký thất bại. Vui lòng kiểm tra lại.'
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        msg = error.response.data.message
      }
      return { success: false, message: msg }
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
