import { createContext } from 'react'
import { IUser } from '../interfaces/user.interface'

export interface IAuthContext extends IUser {
  isAuthenticated: boolean
}

export const initialContextValue: IAuthContext = {
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
  authContext: IAuthContext
  setAuthContext: (value: IAuthContext) => void
}

export const AuthContext = createContext<IAuthContextType | null>(null)
