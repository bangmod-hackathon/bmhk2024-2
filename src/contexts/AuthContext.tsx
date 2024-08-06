import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { IUser } from '../interfaces/user.interface'
import { useNavigate } from 'react-router'
import { axiosInstance } from '../utils/axios'
import Loading from '../components/Loading'

export interface IAuthContext extends IUser {
  isAuthenticated: boolean
}

const initialContextValue: IAuthContext = {
  email: '',
  // ** Form #ทีม-อาจารย์ที่ปรึกษา
  // ** ข้อมูลทีม
  teamName: '',
  school: '',
  quote: '',
  member: 2,
  advisorPrefixTH: '',
  advisorPrefixEN: '',
  advisorFirstnameTH: '',
  advisorFirstnameEN: '',
  advisorMiddlenameTH: '',
  advisorMiddlenameEN: '',
  advisorLastnameTH: '',
  advisorLastnameEN: '',
  advisorFoodAllergy: '',
  advisorFoodPreference: '',
  advisorDrugAllergy: '',
  advisorChronicDisease: '',
  // ** ข้อมูลติดต่อ Contact อาจารย์ที่ปรึกษา
  advisorContactEmail: '',
  advisorContactPhone: '',
  advisorContactLine: '',
  advisorDocumentIDCard: '',
  advisorDocumentEmploymentStatus: '',
  // ** Form #สมาชิกคนที่ 1
  // ** รายละเอียดสมาชิกคนที่ 1
  member1PrefixTH: '',
  member1PrefixEN: '',
  member1FirstnameTH: '',
  member1FirstnameEN: '',
  member1MiddlenameTH: '',
  member1MiddlenameEN: '',
  member1LastnameTH: '',
  member1LastnameEN: '',
  member1Nickname: '',
  member1GradeLevel: '',
  member1FoodPreference: '',
  member1FoodAllergy: '',
  member1DrugAllergy: '',
  member1ChronicDisease: '',
  member1ContactEmail: '',
  member1ContactPhone: '',
  member1ContactLine: '',
  member1ContactEmergencyPhone: '',
  member1ContactEmergencyRelation: '',
  // ** เอกสาร สมาชิกคนที่ 1
  member1DocumentPhoto: '',
  member1DocumentIDCard: '',
  member1DocumentPorPor7: '',

  // ** Form #สมาชิกคนที่ 2
  // ** รายละเอียดสมาชิกคนที่ 2
  member2PrefixTH: '',
  member2PrefixEN: '',
  member2FirstnameTH: '',
  member2FirstnameEN: '',
  member2MiddlenameTH: '',
  member2MiddlenameEN: '',
  member2LastnameTH: '',
  member2LastnameEN: '',
  member2Nickname: '',
  member2GradeLevel: '',
  member2FoodPreference: '',
  member2FoodAllergy: '',
  member2DrugAllergy: '',
  member2ChronicDisease: '',
  member2ContactEmail: '',
  member2ContactPhone: '',
  member2ContactLine: '',
  member2ContactEmergencyPhone: '',
  member2ContactEmergencyRelation: '',
  // ** เอกสาร สมาชิกคนที่ 2
  member2DocumentPhoto: '',
  member2DocumentIDCard: '',
  member2DocumentPorPor7: '',

  isSubmitted: false,
  isAuthenticated: false
}

interface IAuthContextType {
  user: IUser
  isAuthenticated: boolean
  logout: () => void
}

type AuthProviderProps = {
  children: React.JSX.Element | React.JSX.Element[]
}

export const AuthContext = createContext<IAuthContextType | null>(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<IUser>(initialContextValue)
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await axiosInstance.post('/api/auth/logout')
      navigate('/')
    } catch (err) {
      // console.log(err)
      navigate('/')
    }
    setIsAuthenticated(false)
  }

  const handleLogin = useCallback(async () => {
    try {
      const res = await axiosInstance.get('/api/auth/me')
      if (res.status === 200) {
        setUser({
          ...res.data
        })
        setIsAuthenticated(true)
        setLoading(false)
      }
    } catch (err) {
      setIsAuthenticated(false)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleLogin()
  }, [handleLogin])

  const contextValue = useMemo(() => {
    return {
      user,
      isAuthenticated,
      logout
    }
  }, [isAuthenticated])

  if (loading) return <Loading />

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const UseAuth = () => {
  return useContext(AuthContext)
}
