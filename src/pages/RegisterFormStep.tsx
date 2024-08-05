import { Form } from 'antd'
import { debounce } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import PageChanger from '../components/Form/PageChanger'
import ParticipantStepForm from '../components/Form/ParticipantStepForm'
import TeamTeacherStepForm from '../components/Form/TeamTeacherStepForm'
import Stage, { StageStatus } from '../components/Steps/Stage'
import { axiosInstance } from '../utils/axios'
import { ITeamTeacherForm, IParticipant, IUser } from '../interfaces/user.interface'

const RegisterFormStep: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const [members, setMembers] = useState<number>(2)
  const [stageStatus, setStageStatus] = useState<StageStatus[]>([])
  const topRef = useRef<HTMLDivElement>(null)
  const [transitionClass, setTransitionClass] = useState('')
  const [formTeamTeacherStepForm] = Form.useForm<ITeamTeacherForm>()
  const [formParticipant1StepForm] = Form.useForm<IParticipant>()
  const [formParticipant2StepForm] = Form.useForm<IParticipant>()
  const [formParticipant3StepForm] = Form.useForm<IParticipant>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get('/api/auth/me')
      const data = response.data as IUser
      setMembers(data.member)
      formTeamTeacherStepForm.setFieldsValue({
        ...(data as ITeamTeacherForm),
        member: data.member
      })

      formParticipant1StepForm.setFieldsValue({
        memberPrefixTH: data.member1PrefixTH,
        memberPrefixEN: data.member1PrefixEN,
        memberFirstnameTH: data.member1FirstnameTH,
        memberFirstnameEN: data.member1FirstnameEN,
        memberMiddlenameTH: data.member1MiddlenameTH,
        memberMiddlenameEN: data.member1MiddlenameEN,
        memberLastnameTH: data.member1LastnameTH,
        memberLastnameEN: data.member1LastnameEN,
        memberNickname: data.member1Nickname,
        memberGradeLevel: data.member1GradeLevel,
        memberFoodAllergy: data.member1FoodAllergy,
        memberDrugAllergy: data.member1DrugAllergy,
        memberChronicDisease: data.member1ChronicDisease,
        memberContactEmail: data.member1ContactEmail,
        memberContactPhone: data.member1ContactPhone,
        memberContactLine: data.member1ContactLine,
        memberContactEmergencyPhone: data.member1ContactEmergencyPhone,
        memberContactEmergencyRelation: data.member1ContactEmergencyRelation
        // Docs
        // memberDocumentPhoto: values.member1DocumentPhoto,
        // memberDocumentIDCard: values.member1DocumentIDCard,
        // memberDocumentPorPor7: values.member1DocumentPorPor7
      })
      formParticipant2StepForm.setFieldsValue({
        memberPrefixTH: data.member2PrefixTH,
        memberPrefixEN: data.member2PrefixEN,
        memberFirstnameTH: data.member2FirstnameTH,
        memberFirstnameEN: data.member2FirstnameEN,
        memberMiddlenameTH: data.member2MiddlenameTH,
        memberMiddlenameEN: data.member2MiddlenameEN,
        memberLastnameTH: data.member2LastnameTH,
        memberLastnameEN: data.member2LastnameEN,
        memberNickname: data.member2Nickname,
        memberGradeLevel: data.member2GradeLevel,
        memberFoodAllergy: data.member2FoodAllergy,
        memberDrugAllergy: data.member2DrugAllergy,
        memberChronicDisease: data.member2ChronicDisease,
        memberContactEmail: data.member2ContactEmail,
        memberContactPhone: data.member2ContactPhone,
        memberContactLine: data.member2ContactLine,
        memberContactEmergencyPhone: data.member2ContactEmergencyPhone,
        memberContactEmergencyRelation: data.member2ContactEmergencyRelation
        // Docs
        // memberDocumentPhoto: values.member1DocumentPhoto,
        // memberDocumentIDCard: values.member1DocumentIDCard,
        // memberDocumentPorPor7: values.member1DocumentPorPor7
      })
      formParticipant3StepForm.setFieldsValue({
        memberPrefixTH: data.member3PrefixTH,
        memberPrefixEN: data.member3PrefixEN,
        memberFirstnameTH: data.member3FirstnameTH,
        memberFirstnameEN: data.member3FirstnameEN,
        memberMiddlenameTH: data.member3MiddlenameTH,
        memberMiddlenameEN: data.member3MiddlenameEN,
        memberLastnameTH: data.member3LastnameTH,
        memberLastnameEN: data.member3LastnameEN,
        memberNickname: data.member3Nickname,
        memberGradeLevel: data.member3GradeLevel,
        memberFoodAllergy: data.member3FoodAllergy,
        memberDrugAllergy: data.member3DrugAllergy,
        memberChronicDisease: data.member3ChronicDisease,
        memberContactEmail: data.member3ContactEmail,
        memberContactPhone: data.member3ContactPhone,
        memberContactLine: data.member3ContactLine,
        memberContactEmergencyPhone: data.member3ContactEmergencyPhone,
        memberContactEmergencyRelation: data.member3ContactEmergencyRelation
        // Docs
        // memberDocumentPhoto: values.member3DocumentPhoto,
        // memberDocumentIDCard: values.member3DocumentIDCard,
        // memberDocumentPorPor7: values.member3DocumentPorPor7
      })
    }
    fetchData()
  }, [])

  useEffect(() => {
    setTransitionClass('fade-out')
    const timeout = setTimeout(() => {
      setPage(page)
      setTransitionClass('fade-in')
    }, 750)

    return () => clearTimeout(timeout)
  }, [page])

  const scrollToTop = debounce(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, 500)

  useEffect(() => {
    scrollToTop()
  }, [page])

  const updateStage = () => {
    const stage = Array.from({ length: members + 1 }, (_, index) => {
      if (page - 1 < index) {
        return 'finish'
      } else if (page - 1 === index) {
        return 'process'
      } else {
        return 'wait'
      }
    })
    setStageStatus(stage)
  }

  useEffect(() => {
    updateStage()
  }, [members, page])

  const PageSwither = () => {
    switch (page) {
      case 1:
        return <TeamTeacherStepForm form={formTeamTeacherStepForm} setMembers={setMembers} />
      case 2:
        return <ParticipantStepForm form={formParticipant1StepForm} nth={1} />
      case 3:
        return <ParticipantStepForm form={formParticipant2StepForm} nth={2} />
      case 4:
        return <ParticipantStepForm form={formParticipant3StepForm} nth={3} />
      default:
        return <></>
    }
  }

  const handlePrevious = () => {
    setPage(page === 1 ? 1 : page - 1)
  }
  const handleNext = async () => {
    try {
      if (page === 1) {
        await formTeamTeacherStepForm.validateFields()
        // Validate File

        const values = await formTeamTeacherStepForm.getFieldsValue()
        console.log(values)
        // Uploadfile

        // Patch Team Teacher
        await axiosInstance.patch('/api/user', {
          teamName: values.teamName,
          school: values.school,
          quote: values.quote,
          member: Number(values.member),
          advisorPrefixTH: values.advisorPrefixTH,
          advisorPrefixEN: values.advisorPrefixEN,
          advisorFirstnameTH: values.advisorFirstnameTH,
          advisorFirstnameEN: values.advisorFirstnameEN,
          advisorMiddlenameTH: values.advisorMiddlenameTH,
          advisorMiddlenameEN: values.advisorMiddlenameEN,
          advisorLastnameTH: values.advisorLastnameTH,
          advisorLastnameEN: values.advisorLastnameEN,
          advisorFoodAllergy: values.advisorFoodAllergy,
          advisorFoodPreference: values.advisorFoodPreference,
          advisorDrugAllergy: values.advisorDrugAllergy,
          advisorChronicDisease: values.advisorChronicDisease,
          advisorContactEmail: values.advisorContactEmail,
          advisorContactPhone: values.advisorContactPhone,
          advisorContactLine: values.advisorContactLine
          // advisorDocumentIDCard: values.advisorDocumentIDCard,
          // advisorDocumentEmploymentStatus: values.advisorDocumentEmploymentStatus
        })

        // console.log(response)
      } else if (page === 2) {
        await formParticipant1StepForm.validateFields()
        // Validate File

        const values = await formParticipant1StepForm.getFieldsValue()
        // Uploadfile

        // Patch member 1
        await axiosInstance.patch('/api/user', {
          member1PrefixTH: values.memberPrefixTH,
          member1PrefixEN: values.memberPrefixEN,
          member1FirstnameTH: values.memberFirstnameTH,
          member1FirstnameEN: values.memberFirstnameEN,
          member1MiddlenameTH: values.memberMiddlenameTH,
          member1MiddlenameEN: values.memberMiddlenameEN,
          member1LastnameTH: values.memberLastnameTH,
          member1LastnameEN: values.memberLastnameEN,
          member1Nickname: values.memberNickname,
          member1GradeLevel: values.memberGradeLevel,
          member1FoodAllergy: values.memberFoodAllergy,
          member1DrugAllergy: values.memberDrugAllergy,
          member1ChronicDisease: values.memberChronicDisease,
          member1ContactEmail: values.memberContactEmail,
          member1ContactPhone: values.memberContactPhone,
          member1ContactLine: values.memberContactLine,
          member1ContactEmergencyPhone: values.memberContactEmergencyPhone,
          member1ContactEmergencyRelation: values.memberContactEmergencyRelation
          // Docs
          // member1DocumentPhoto: values.memberDocumentPhoto,
          // member1DocumentIDCard: values.memberDocumentIDCard,
          // member1DocumentPorPor7: values.memberDocumentPorPor7
        })
      } else if (page === 3) {
        await formParticipant2StepForm.validateFields()
        const values = await formParticipant2StepForm.getFieldsValue()
        console.log(values)
        // Uploadfile

        // Patch member 2
        await axiosInstance.patch('/api/user', {
          member2PrefixTH: values.memberPrefixTH,
          member2PrefixEN: values.memberPrefixEN,
          member2FirstnameTH: values.memberFirstnameTH,
          member2FirstnameEN: values.memberFirstnameEN,
          member2MiddlenameTH: values.memberMiddlenameTH,
          member2MiddlenameEN: values.memberMiddlenameEN,
          member2LastnameTH: values.memberLastnameTH,
          member2LastnameEN: values.memberLastnameEN,
          member2Nickname: values.memberNickname,
          member2GradeLevel: values.memberGradeLevel,
          member2FoodAllergy: values.memberFoodAllergy,
          member2DrugAllergy: values.memberDrugAllergy,
          member2ChronicDisease: values.memberChronicDisease,
          member2ContactEmail: values.memberContactEmail,
          member2ContactPhone: values.memberContactPhone,
          member2ContactLine: values.memberContactLine,
          member2ContactEmergencyPhone: values.memberContactEmergencyPhone,
          member2ContactEmergencyRelation: values.memberContactEmergencyRelation
          // Docs
          // member1DocumentPhoto: values.memberDocumentPhoto,
          // member1DocumentIDCard: values.memberDocumentIDCard,
          // member1DocumentPorPor7: values.memberDocumentPorPor7
        })
      } else if (page === 4 && members === 3) {
        await formParticipant3StepForm.validateFields()
        const values = await formParticipant3StepForm.getFieldsValue()
        // Uploadfile

        // Patch member 3
        await axiosInstance.patch('/api/user', {
          member3PrefixTH: values.memberPrefixTH,
          member3PrefixEN: values.memberPrefixEN,
          member3FirstnameTH: values.memberFirstnameTH,
          member3FirstnameEN: values.memberFirstnameEN,
          member3MiddlenameTH: values.memberMiddlenameTH,
          member3MiddlenameEN: values.memberMiddlenameEN,
          member3LastnameTH: values.memberLastnameTH,
          member3LastnameEN: values.memberLastnameEN,
          member3Nickname: values.memberNickname,
          member3GradeLevel: values.memberGradeLevel,
          member3FoodAllergy: values.memberFoodAllergy,
          member3DrugAllergy: values.memberDrugAllergy,
          member3ChronicDisease: values.memberChronicDisease,
          member3ContactEmail: values.memberContactEmail,
          member3ContactPhone: values.memberContactPhone,
          member3ContactLine: values.memberContactLine,
          member3ContactEmergencyPhone: values.memberContactEmergencyPhone,
          member3ContactEmergencyRelation: values.memberContactEmergencyRelation
          // Docs
          // member3DocumentPhoto: values.memberDocumentPhoto,
          // member3DocumentIDCard: values.memberDocumentIDCard,
          // member3DocumentPorPor7: values.memberDocumentPorPor7
        })
      }

      setPage(page === members + 1 ? members + 1 : page + 1)
    } catch {
      console.log('error')
    }
  }

  return (
    <React.Fragment>
      <div
        ref={topRef}
        className=" w-full h-full bg-[url('/register/bg-register.webp')] bg-top bg-no-repeat bg-cover scroll-smooth"
      >
        <div className="container px-4 sm:px-6 xl:px-0 mx-auto max-w-[1280px] lg:pt-[8rem] pt-28">
          <header>
            <div className="py-8">
              <Stage numberOfMembers={members} statuses={stageStatus} />
            </div>
            <h1 className="text-text_color-100 font-heading text-[40px] font-normal text-center py-2">REGISTRATION</h1>
          </header>
          <div className={`pb-4 page-container ${transitionClass}`}>
            {PageSwither()}
            <PageChanger
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              page={page}
              setPage={setPage}
              pageMaxSize={members + 1}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RegisterFormStep
