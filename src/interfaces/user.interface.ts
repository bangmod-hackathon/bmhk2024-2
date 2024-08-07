export interface ITeamTeacherForm {
  // ** Form #ทีม-อาจารย์ที่ปรึกษา
  // ** ข้อมูลทีม
  teamName: string
  school: string
  quote: string
  member: number
  advisorPrefixTH: string
  advisorPrefixEN: string
  advisorFirstnameTH: string
  advisorFirstnameEN: string
  advisorMiddlenameTH: string
  advisorMiddlenameEN: string
  advisorLastnameTH: string
  advisorLastnameEN: string
  advisorFoodAllergy: string
  advisorFoodPreference: string
  advisorDrugAllergy: string
  advisorChronicDisease: string
  // ** ข้อมูลติดต่อ Contact อาจารย์ที่ปรึกษา
  advisorContactEmail: string
  advisorContactPhone: string
  advisorContactLine: string
}
export interface IParticipant {
  memberPrefixTH: string
  memberPrefixEN: string
  memberFirstnameTH: string
  memberFirstnameEN: string
  memberMiddlenameTH: string
  memberMiddlenameEN: string
  memberLastnameTH: string
  memberLastnameEN: string
  memberNickname: string
  memberGradeLevel: string
  memberFoodPreference: string
  memberFoodAllergy: string
  memberDrugAllergy: string
  memberChronicDisease: string
  memberContactEmail: string
  memberContactPhone: string
  memberContactLine: string
  memberContactEmergencyPhone: string
  memberContactEmergencyRelation: string
}

export interface IParticipant1 {
  // ** Form #สมาชิกคนที่ 1
  // ** รายละเอียดสมาชิกคนที่ 1
  member1PrefixTH: string
  member1PrefixEN: string
  member1FirstnameTH: string
  member1FirstnameEN: string
  member1MiddlenameTH: string
  member1MiddlenameEN: string
  member1LastnameTH: string
  member1LastnameEN: string
  member1Nickname: string
  member1GradeLevel: string
  member1FoodPreference: string
  member1FoodAllergy: string
  member1DrugAllergy: string
  member1ChronicDisease: string
  member1ContactEmail: string
  member1ContactPhone: string
  member1ContactLine: string
  member1ContactEmergencyPhone: string
  member1ContactEmergencyRelation: string
}

export interface IParticipant2 {
  // ** Form #สมาชิกคนที่ 2
  // ** รายละเอียดสมาชิกคนที่ 2
  member2PrefixTH: string
  member2PrefixEN: string
  member2FirstnameTH: string
  member2FirstnameEN: string
  member2MiddlenameTH: string
  member2MiddlenameEN: string
  member2LastnameTH: string
  member2LastnameEN: string
  member2Nickname: string
  member2GradeLevel: string
  member2FoodPreference: string
  member2FoodAllergy: string
  member2DrugAllergy: string
  member2ChronicDisease: string
  member2ContactEmail: string
  member2ContactPhone: string
  member2ContactLine: string
  member2ContactEmergencyPhone: string
  member2ContactEmergencyRelation: string
}

export interface IDocs {
  advisorDocumentIDCard: string
  advisorDocumentEmploymentStatus: string
  // ** เอกสาร สมาชิกคนที่ 1
  member1DocumentPhoto: string
  member1DocumentIDCard: string
  member1DocumentPorPor7: string
  // ** เอกสาร สมาชิกคนที่ 2
  member2DocumentPhoto: string
  member2DocumentIDCard: string
  member2DocumentPorPor7: string
  // ** เอกสาร สมาชิกคนที่ 3
  member3DocumentPhoto?: string
  member3DocumentIDCard?: string
  member3DocumentPorPor7?: string
}

export interface IParticipant3 {
  // ** Form #สมาชิกคนที่ 3
  // ** รายละเอียดสมาชิกคนที่ 3
  member3PrefixTH?: string
  member3PrefixEN?: string
  member3FirstnameTH?: string
  member3FirstnameEN?: string
  member3MiddlenameTH?: string
  member3MiddlenameEN?: string
  member3LastnameTH?: string
  member3LastnameEN?: string
  member3Nickname?: string
  member3GradeLevel?: string
  member3FoodPreference?: string
  member3FoodAllergy?: string
  member3DrugAllergy?: string
  member3ChronicDisease?: string
  member3ContactEmail?: string
  member3ContactPhone?: string
  member3ContactLine?: string
  member3ContactEmergencyPhone?: string
  member3ContactEmergencyRelation?: string
  // ** เอกสาร สมาชิกคนที่ 3
  member3DocumentPhoto?: string
  member3DocumentIDCard?: string
  member3DocumentPorPor7?: string
}
export interface IUser extends ITeamTeacherForm, IParticipant1, IParticipant2, IParticipant3, IDocs {
  email: string
  consent: boolean
  isSubmitted: boolean
  submittedAt?: Date
}
