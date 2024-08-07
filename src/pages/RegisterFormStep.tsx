import { Form, Modal } from 'antd'
import { NamePath } from 'antd/es/form/interface'
import { isAxiosError } from 'axios'
import { debounce } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'
import PageChanger from '../components/Form/PageChanger'
import ParticipantStepForm from '../components/Form/ParticipantStepForm'
import TeamTeacherStepForm from '../components/Form/TeamTeacherStepForm'
import Stage, { StageStatus } from '../components/Steps/Stage'
import { IParticipant, ITeamTeacherForm, IUser } from '../interfaces/user.interface'
import { axiosInstance } from '../utils/axios'
import { UploadFile } from '../utils/uploadFile'

const RegisterFormStep: React.FC = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState<number>(1)
  const [members, setMembers] = useState<number>(2)
  const [teamName, setTeamName] = useState<string>('')
  const [stageStatus, setStageStatus] = useState<StageStatus[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const topRef = useRef<HTMLDivElement>(null)
  const [transitionClass, setTransitionClass] = useState('')
  const [formTeamTeacherStepForm] = Form.useForm<ITeamTeacherForm>()
  const [formParticipant1StepForm] = Form.useForm<IParticipant>()
  const [formParticipant2StepForm] = Form.useForm<IParticipant>()
  const [formParticipant3StepForm] = Form.useForm<IParticipant>()

  // formTeamTeacherStepForm
  const [fileIDCardUrl, setFileIDCardUrl] = useState<string>('')
  const [fileIDCard, setFileIDCard] = useState<File | undefined>(undefined)
  const [isLatestIdcard, setIsLatestIdcard] = useState<boolean>(false)

  const [fileTeacherCertURL, setFileTeacherCertUrl] = useState<string>('')
  const [fileTeacherCert, setFileTeacherCert] = useState<File | undefined>(undefined)
  const [isLatestTeacherCert, setIsLatestTeacherCert] = useState<boolean>(false)

  // 1st participant file
  const [fileParticipant1PhotoURL, setFileParticipant1PhotoURL] = useState<string>('')
  const [fileParticipant1Photo, setFileParticipant1Photo] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile1Photo, setIsLatestParticipantfile1Photo] = useState<boolean>(false)

  const [fileParticipant1IDcardURL, setFileParticipant1IDcardURL] = useState<string>('')
  const [fileParticipant1IDcard, setFileParticipant1IDcard] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile1IDcard, setIsLatestParticipantfile1IDcard] = useState<boolean>(false)

  const [fileParticipant1PorPor7URL, setFileParticipant1PorPor7URL] = useState<string>('')
  const [fileParticipant1PorPor7, setFileParticipant1PorPor7] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile1PorPor7, setIsLatestParticipantfile1PorPor7] = useState<boolean>(false)

  // 2nd participant file
  const [fileParticipant2PhotoURL, setFileParticipant2PhotoURL] = useState<string>('')
  const [fileParticipant2Photo, setFileParticipant2Photo] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile2Photo, setIsLatestParticipantfile2Photo] = useState<boolean>(false)

  const [fileParticipant2IDcardURL, setFileParticipant2IDcardURL] = useState<string>('')
  const [fileParticipant2IDcard, setFileParticipant2IDcard] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile2IDcard, setIsLatestParticipantfile2IDcard] = useState<boolean>(false)

  const [fileParticipant2PorPor7URL, setFileParticipant2PorPor7URL] = useState<string>('')
  const [fileParticipant2PorPor7, setFileParticipant2PorPor7] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile2PorPor7, setIsLatestParticipantfile2PorPor7] = useState<boolean>(false)

  // 3rd participant file
  const [fileParticipant3PhotoURL, setFileParticipant3PhotoURL] = useState<string>('')
  const [fileParticipant3Photo, setFileParticipant3Photo] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile3Photo, setIsLatestParticipantfile3Photo] = useState<boolean>(false)

  const [fileParticipant3IDcardURL, setFileParticipant3IDcardURL] = useState<string>('')
  const [fileParticipant3IDcard, setFileParticipant3IDcard] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile3IDcard, setIsLatestParticipantfile3IDcard] = useState<boolean>(false)

  const [fileParticipant3PorPor7URL, setFileParticipant3PorPor7URL] = useState<string>('')
  const [fileParticipant3PorPor7, setFileParticipant3PorPor7] = useState<File | undefined>(undefined)
  const [isLatestParticipantfile3PorPor7, setIsLatestParticipantfile3PorPor7] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data: IUser
        try {
          data = (await axiosInstance.get('/api/auth/me')).data
        } catch {
          navigate('/')
          throw new Error('')
        }

        if (data.isSubmitted) {
          return navigate('/')
        }
        if (data.consent === false) {
          return navigate('/consent')
        }

        // formTeamTeacherStepForm
        setFileIDCardUrl(data.advisorDocumentIDCard)
        setIsLatestIdcard(data.advisorDocumentIDCard !== '')

        setFileTeacherCertUrl(data.advisorDocumentEmploymentStatus)
        setIsLatestTeacherCert(data.advisorDocumentEmploymentStatus !== '')

        // formParticipant1StepForm
        setFileParticipant1PhotoURL(data.member1DocumentPhoto)
        setIsLatestParticipantfile1Photo(data.member1DocumentPhoto !== '')

        setFileParticipant1IDcardURL(data.member1DocumentIDCard)
        setIsLatestParticipantfile1IDcard(data.member1DocumentIDCard !== '')

        setFileParticipant1PorPor7URL(data.member1DocumentPorPor7)
        setIsLatestParticipantfile1PorPor7(data.member1DocumentPorPor7 !== '')

        // formParticipant2StepForm
        setFileParticipant2PhotoURL(data.member2DocumentPhoto)
        setIsLatestParticipantfile2Photo(data.member2DocumentPhoto !== '')

        setFileParticipant2IDcardURL(data.member2DocumentIDCard)
        setIsLatestParticipantfile2IDcard(data.member2DocumentIDCard !== '')

        setFileParticipant2PorPor7URL(data.member2DocumentPorPor7)
        setIsLatestParticipantfile2PorPor7(data.member2DocumentPorPor7 !== '')

        // formParticipant3StepForm
        setFileParticipant3PhotoURL(data.member3DocumentPhoto || '')
        setIsLatestParticipantfile3Photo(data.member3DocumentPhoto !== '')

        setFileParticipant3IDcardURL(data.member3DocumentIDCard || '')
        setIsLatestParticipantfile3IDcard(data.member3DocumentIDCard !== '')

        setFileParticipant3PorPor7URL(data.member3DocumentPorPor7 || '')
        setIsLatestParticipantfile3PorPor7(data.member3DocumentPorPor7 !== '')

        setMembers(data.member)
        setTeamName(data.teamName)
        formTeamTeacherStepForm.setFieldsValue({
          ...(data as ITeamTeacherForm)
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
          memberFoodPreference: data.member1FoodPreference,
          memberFoodAllergy: data.member1FoodAllergy,
          memberDrugAllergy: data.member1DrugAllergy,
          memberChronicDisease: data.member1ChronicDisease,
          memberContactEmail: data.member1ContactEmail,
          memberContactPhone: data.member1ContactPhone,
          memberContactLine: data.member1ContactLine,
          memberContactEmergencyPhone: data.member1ContactEmergencyPhone,
          memberContactEmergencyRelation: data.member1ContactEmergencyRelation
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
          memberFoodPreference: data.member2FoodPreference,
          memberFoodAllergy: data.member2FoodAllergy,
          memberDrugAllergy: data.member2DrugAllergy,
          memberChronicDisease: data.member2ChronicDisease,
          memberContactEmail: data.member2ContactEmail,
          memberContactPhone: data.member2ContactPhone,
          memberContactLine: data.member2ContactLine,
          memberContactEmergencyPhone: data.member2ContactEmergencyPhone,
          memberContactEmergencyRelation: data.member2ContactEmergencyRelation
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
          memberFoodPreference: data.member3FoodPreference,
          memberFoodAllergy: data.member3FoodAllergy,
          memberDrugAllergy: data.member3DrugAllergy,
          memberChronicDisease: data.member3ChronicDisease,
          memberContactEmail: data.member3ContactEmail,
          memberContactPhone: data.member3ContactPhone,
          memberContactLine: data.member3ContactLine,
          memberContactEmergencyPhone: data.member3ContactEmergencyPhone
        })
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.response?.status === 401) {
            navigate('/')
          }
        }
      }
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

  const handlePrevious = () => {
    setPage(page === 1 ? 1 : page - 1)
  }

  const handleNext = async () => {
    try {
      setLoading(true)
      if (page === 1) {
        try {
          await formTeamTeacherStepForm.validateFields()
        } catch {
          let FieldsError: NamePath
          for (const Fields of formTeamTeacherStepForm.getFieldsError()) {
            if (Fields.errors.length > 0) {
              FieldsError = Fields.name[0]
              break
            }
          }

          formTeamTeacherStepForm.scrollToField(FieldsError, {
            behavior: 'smooth'
          })
          throw new Error('error')
        }
        let advisorDocumentIDCard = fileIDCardUrl
        let advisorDocumentEmploymentStatus = fileTeacherCertURL

        if (!isLatestIdcard) {
          advisorDocumentIDCard = await UploadFile('advisorDocumentIDCard', fileIDCard!)
          setFileIDCardUrl(advisorDocumentIDCard)
          setIsLatestIdcard(true)
        }
        if (!isLatestTeacherCert) {
          advisorDocumentEmploymentStatus = await UploadFile('advisorDocumentEmploymentStatus', fileTeacherCert!)
          setFileTeacherCertUrl(advisorDocumentEmploymentStatus)
          setIsLatestTeacherCert(true)
        }

        const values = await formTeamTeacherStepForm.getFieldsValue()

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
          advisorContactLine: values.advisorContactLine,
          advisorDocumentIDCard: advisorDocumentIDCard,
          advisorDocumentEmploymentStatus: advisorDocumentEmploymentStatus
        })

        // console.log(response)
      } else if (page === 2) {
        try {
          await formParticipant1StepForm.validateFields()
        } catch {
          let FieldsError: NamePath
          for (const Fields of formParticipant1StepForm.getFieldsError()) {
            if (Fields.errors.length > 0) {
              FieldsError = Fields.name[0]
              break
            }
          }

          formParticipant1StepForm.scrollToField(FieldsError, {
            behavior: 'smooth'
          })
          throw new Error('error')
        }
        // Uploadfile
        let memberDocumentPhoto = fileParticipant1PhotoURL
        let memberDocumentIDCard = fileParticipant1IDcardURL
        let memberDocumentPorPor7 = fileParticipant1PorPor7URL

        if (!isLatestParticipantfile1Photo) {
          memberDocumentPhoto = await UploadFile('memberDocumentPhoto', fileParticipant1Photo!)
          setFileParticipant1PhotoURL(memberDocumentPhoto)
          setIsLatestParticipantfile1Photo(true)
        }
        if (!isLatestParticipantfile1IDcard) {
          memberDocumentIDCard = await UploadFile('memberDocumentIDCard', fileParticipant1IDcard!)
          setFileParticipant1IDcardURL(memberDocumentIDCard)
          setIsLatestParticipantfile1IDcard(true)
        }
        if (!isLatestParticipantfile1PorPor7) {
          memberDocumentPorPor7 = await UploadFile('memberDocumentPorPor7', fileParticipant1PorPor7!)
          setFileParticipant1PorPor7URL(memberDocumentPorPor7)
          setIsLatestParticipantfile1PorPor7(true)
        }

        const values = await formParticipant1StepForm.getFieldsValue()

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
          member1FoodPreference: values.memberFoodPreference,
          member1FoodAllergy: values.memberFoodAllergy,
          member1DrugAllergy: values.memberDrugAllergy,
          member1ChronicDisease: values.memberChronicDisease,
          member1ContactEmail: values.memberContactEmail,
          member1ContactPhone: values.memberContactPhone,
          member1ContactLine: values.memberContactLine,
          member1ContactEmergencyPhone: values.memberContactEmergencyPhone,
          member1ContactEmergencyRelation: values.memberContactEmergencyRelation,
          member1DocumentPhoto: memberDocumentPhoto,
          member1DocumentIDCard: memberDocumentIDCard,
          member1DocumentPorPor7: memberDocumentPorPor7
        })
      } else if (page === 3) {
        try {
          await formParticipant2StepForm.validateFields()
        } catch {
          let FieldsError: NamePath
          for (const Fields of formParticipant2StepForm.getFieldsError()) {
            if (Fields.errors.length > 0) {
              FieldsError = Fields.name[0]
              break
            }
          }

          formParticipant2StepForm.scrollToField(FieldsError, {
            behavior: 'smooth'
          })
          throw new Error('error')
        }
        // Uploadfile

        let memberDocumentPhoto = fileParticipant2PhotoURL
        let memberDocumentIDCard = fileParticipant2IDcardURL
        let memberDocumentPorPor7 = fileParticipant2PorPor7URL

        if (!isLatestParticipantfile2Photo) {
          memberDocumentPhoto = await UploadFile('memberDocumentPhoto', fileParticipant2Photo!)
          setFileParticipant2PhotoURL(memberDocumentPhoto)
          setIsLatestParticipantfile2Photo(true)
        }
        if (!isLatestParticipantfile2IDcard) {
          memberDocumentIDCard = await UploadFile('memberDocumentIDCard', fileParticipant2IDcard!)
          setFileParticipant2IDcardURL(memberDocumentIDCard)
          setIsLatestParticipantfile2IDcard(true)
        }
        if (!isLatestParticipantfile2PorPor7) {
          memberDocumentPorPor7 = await UploadFile('memberDocumentPorPor7', fileParticipant2PorPor7!)
          setFileParticipant2PorPor7URL(memberDocumentPorPor7)
          setIsLatestParticipantfile2PorPor7(true)
        }
        const values = await formParticipant2StepForm.getFieldsValue()

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
          member2FoodPreference: values.memberFoodPreference,
          member2GradeLevel: values.memberGradeLevel,
          member2FoodAllergy: values.memberFoodAllergy,
          member2DrugAllergy: values.memberDrugAllergy,
          member2ChronicDisease: values.memberChronicDisease,
          member2ContactEmail: values.memberContactEmail,
          member2ContactPhone: values.memberContactPhone,
          member2ContactLine: values.memberContactLine,
          member2ContactEmergencyPhone: values.memberContactEmergencyPhone,
          member2ContactEmergencyRelation: values.memberContactEmergencyRelation,
          member2DocumentPhoto: memberDocumentPhoto,
          member2DocumentIDCard: memberDocumentIDCard,
          member2DocumentPorPor7: memberDocumentPorPor7
        })
      } else if (page === 4 && members === 3) {
        try {
          await formParticipant3StepForm.validateFields()
        } catch {
          let FieldsError: NamePath
          for (const Fields of formParticipant3StepForm.getFieldsError()) {
            if (Fields.errors.length > 0) {
              FieldsError = Fields.name[0]
              break
            }
          }

          formParticipant3StepForm.scrollToField(FieldsError, {
            behavior: 'smooth'
          })
          throw new Error('error')
        }
        // Uploadfile
        let memberDocumentPhoto = fileParticipant3PhotoURL
        let memberDocumentIDCard = fileParticipant3IDcardURL
        let memberDocumentPorPor7 = fileParticipant3PorPor7URL
        if (!isLatestParticipantfile3Photo) {
          memberDocumentPhoto = await UploadFile('memberDocumentPhoto', fileParticipant3Photo!)
          setFileParticipant3PhotoURL(memberDocumentPhoto)
          setIsLatestParticipantfile3Photo(true)
        }
        if (!isLatestParticipantfile3IDcard) {
          memberDocumentIDCard = await UploadFile('memberDocumentIDCard', fileParticipant3IDcard!)
          setFileParticipant3IDcardURL(memberDocumentIDCard)
          setIsLatestParticipantfile3IDcard(true)
        }
        if (!isLatestParticipantfile3PorPor7) {
          memberDocumentPorPor7 = await UploadFile('memberDocumentPorPor7', fileParticipant3PorPor7!)
          setFileParticipant3PorPor7URL(memberDocumentPorPor7)
          setIsLatestParticipantfile3PorPor7(true)
        }
        const values = await formParticipant3StepForm.getFieldsValue()

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
          member3FoodPreference: values.memberFoodPreference,
          member3FoodAllergy: values.memberFoodAllergy,
          member3DrugAllergy: values.memberDrugAllergy,
          member3ChronicDisease: values.memberChronicDisease,
          member3ContactEmail: values.memberContactEmail,
          member3ContactPhone: values.memberContactPhone,
          member3ContactLine: values.memberContactLine,
          member3ContactEmergencyPhone: values.memberContactEmergencyPhone,
          member3ContactEmergencyRelation: values.memberContactEmergencyRelation,
          member3DocumentPhoto: memberDocumentPhoto,
          member3DocumentIDCard: memberDocumentIDCard,
          member3DocumentPorPor7: memberDocumentPorPor7
        })
      }

      setPage(page === members + 1 ? members + 1 : page + 1)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      return error
    }
  }

  const handleLastPage = async () => {
    try {
      setLoading(true)
      if (page === 3) {
        try {
          await formParticipant2StepForm.validateFields()
        } catch {
          let FieldsError: NamePath
          for (const Fields of formParticipant2StepForm.getFieldsError()) {
            if (Fields.errors.length > 0) {
              FieldsError = Fields.name[0]
              break
            }
          }
          formParticipant2StepForm.scrollToField(FieldsError, {
            behavior: 'smooth'
          })
          throw new Error('error')
        }
        // Uploadfile
        let memberDocumentPhoto = fileParticipant2PhotoURL
        let memberDocumentIDCard = fileParticipant2IDcardURL
        let memberDocumentPorPor7 = fileParticipant2PorPor7URL

        if (!isLatestParticipantfile2Photo) {
          memberDocumentPhoto = await UploadFile('memberDocumentPhoto', fileParticipant2Photo!)
          setFileParticipant2PhotoURL(memberDocumentPhoto)
          setIsLatestParticipantfile2Photo(true)
        }
        if (!isLatestParticipantfile2IDcard) {
          memberDocumentIDCard = await UploadFile('memberDocumentIDCard', fileParticipant2IDcard!)
          setFileParticipant2IDcardURL(memberDocumentIDCard)
          setIsLatestParticipantfile2IDcard(true)
        }
        if (!isLatestParticipantfile2PorPor7) {
          memberDocumentPorPor7 = await UploadFile('memberDocumentPorPor7', fileParticipant2PorPor7!)
          setFileParticipant2PorPor7URL(memberDocumentPorPor7)
          setIsLatestParticipantfile2PorPor7(true)
        }
        const values = await formParticipant2StepForm.getFieldsValue()

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
          member2FoodPreference: values.memberFoodPreference,
          member2GradeLevel: values.memberGradeLevel,
          member2FoodAllergy: values.memberFoodAllergy,
          member2DrugAllergy: values.memberDrugAllergy,
          member2ChronicDisease: values.memberChronicDisease,
          member2ContactEmail: values.memberContactEmail,
          member2ContactPhone: values.memberContactPhone,
          member2ContactLine: values.memberContactLine,
          member2ContactEmergencyPhone: values.memberContactEmergencyPhone,
          member2ContactEmergencyRelation: values.memberContactEmergencyRelation,
          member2DocumentPhoto: memberDocumentPhoto,
          member2DocumentIDCard: memberDocumentIDCard,
          member2DocumentPorPor7: memberDocumentPorPor7
        })
      } else if (page === 4 && members === 3) {
        try {
          await formParticipant3StepForm.validateFields()
        } catch {
          let FieldsError: NamePath
          for (const Fields of formParticipant3StepForm.getFieldsError()) {
            if (Fields.errors.length > 0) {
              FieldsError = Fields.name[0]
              break
            }
          }

          formParticipant3StepForm.scrollToField(FieldsError, {
            behavior: 'smooth'
          })
          throw new Error('error')
        }
        // Uploadfile
        let memberDocumentPhoto = fileParticipant3PhotoURL
        let memberDocumentIDCard = fileParticipant3IDcardURL
        let memberDocumentPorPor7 = fileParticipant3PorPor7URL
        if (!isLatestParticipantfile3Photo) {
          memberDocumentPhoto = await UploadFile('memberDocumentPhoto', fileParticipant3Photo!)
          setFileParticipant3PhotoURL(memberDocumentPhoto)
          setIsLatestParticipantfile3Photo(true)
        }
        if (!isLatestParticipantfile3IDcard) {
          memberDocumentIDCard = await UploadFile('memberDocumentIDCard', fileParticipant3IDcard!)
          setFileParticipant3IDcardURL(memberDocumentIDCard)
          setIsLatestParticipantfile3IDcard(true)
        }
        if (!isLatestParticipantfile3PorPor7) {
          memberDocumentPorPor7 = await UploadFile('memberDocumentPorPor7', fileParticipant3PorPor7!)
          setFileParticipant3PorPor7URL(memberDocumentPorPor7)
          setIsLatestParticipantfile3PorPor7(true)
        }
        const values = await formParticipant3StepForm.getFieldsValue()

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
          member3FoodPreference: values.memberFoodPreference,
          member3FoodAllergy: values.memberFoodAllergy,
          member3DrugAllergy: values.memberDrugAllergy,
          member3ChronicDisease: values.memberChronicDisease,
          member3ContactEmail: values.memberContactEmail,
          member3ContactPhone: values.memberContactPhone,
          member3ContactLine: values.memberContactLine,
          member3ContactEmergencyPhone: values.memberContactEmergencyPhone,
          member3ContactEmergencyRelation: values.memberContactEmergencyRelation,
          member3DocumentPhoto: memberDocumentPhoto,
          member3DocumentIDCard: memberDocumentIDCard,
          member3DocumentPorPor7: memberDocumentPorPor7
        })
      }
      setLoading(false)
      return true
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const [isModalSubmitOpen, setIsModalSubmitOpen] = useState<boolean>(false)

  const handleSubmit = async () => {
    try {
      await axiosInstance.post('/api/user/submit')
      await setIsModalSubmitOpen(true)
    } catch (error) {
      return error
    }
  }

  return (
    <React.Fragment>
      <Modal
        title={<p className="text-xl text-white text-center">ลงทะเบียนสำเร็จ</p>}
        open={isModalSubmitOpen}
        centered
        closable
        footer={[]}
      >
        <div className="flex items-center justify-center">
          <img src="/Confirm_icon/AiTwotoneCheckCircle.png" alt="" />
        </div>
        <h1 className="mb-2 text-center text-2xl font-normal text-white"></h1>
        <p className="text-center font-body text-sm font-normal text-white">
          หากทีมงานตรวจสอบแล้วพบว่าข้อมูลไม่ตรงตามเงื่อนไข ขอใช้อำนาจในการตัดสิทธิ์ของผู้สมัคร
        </p>

        <div className="flex justify-center py-2">
          <ButtonPrimary
            onClick={() => {
              window.location.href = '/'
            }}
          >
            กลับหน้าหลัก
          </ButtonPrimary>
        </div>
      </Modal>
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
            {page === 1 && (
              <TeamTeacherStepForm
                form={formTeamTeacherStepForm}
                teamName={teamName}
                setTeamName={setTeamName}
                setMembers={setMembers}
                fileIDCard={fileIDCard}
                fileIdCardURL={fileIDCardUrl}
                setFileIDCard={setFileIDCard}
                fileTeacherCert={fileTeacherCert}
                setFileTeacherCert={setFileTeacherCert}
                setIsLatestIdcard={setIsLatestIdcard}
                isLatestIdcard={isLatestIdcard}
                fileTeacherCertURL={fileTeacherCertURL}
                isLatestTeacherCert={isLatestTeacherCert}
                setIsLatestTeacherCert={setIsLatestTeacherCert}
                isLoading={loading}
              />
            )}
            {page === 2 && (
              <ParticipantStepForm
                form={formParticipant1StepForm}
                nth={1}
                fileParticipantPhotoURL={fileParticipant1PhotoURL}
                fileParticipantPhoto={fileParticipant1Photo}
                setFileParticipantPhoto={setFileParticipant1Photo}
                isLatestParticipantPhoto={isLatestParticipantfile1Photo}
                setIsLatestParticipantPhoto={setIsLatestParticipantfile1Photo}
                fileParticipantIDCardURL={fileParticipant1IDcardURL}
                fileParticipantIDCard={fileParticipant1IDcard}
                setFileParticipantIDCard={setFileParticipant1IDcard}
                isLatestParticipantIDCard={isLatestParticipantfile1IDcard}
                setIsLatestParticipantIDCard={setIsLatestParticipantfile1IDcard}
                fileParticipantPorPor7URL={fileParticipant1PorPor7URL}
                fileParticipantPorPor7={fileParticipant1PorPor7}
                setFileParticipantPorPor7={setFileParticipant1PorPor7}
                isLatestParticipantPorPor7={isLatestParticipantfile1PorPor7}
                setIsLatestParticipantPorPor7={setIsLatestParticipantfile1PorPor7}
                isLoading={loading}
              />
            )}
            {page === 3 && (
              <ParticipantStepForm
                form={formParticipant2StepForm}
                nth={2}
                fileParticipantPhotoURL={fileParticipant2PhotoURL}
                fileParticipantPhoto={fileParticipant2Photo}
                setFileParticipantPhoto={setFileParticipant2Photo}
                isLatestParticipantPhoto={isLatestParticipantfile2Photo}
                setIsLatestParticipantPhoto={setIsLatestParticipantfile2Photo}
                fileParticipantIDCardURL={fileParticipant2IDcardURL}
                fileParticipantIDCard={fileParticipant2IDcard}
                setFileParticipantIDCard={setFileParticipant2IDcard}
                isLatestParticipantIDCard={isLatestParticipantfile2IDcard}
                setIsLatestParticipantIDCard={setIsLatestParticipantfile2IDcard}
                fileParticipantPorPor7URL={fileParticipant2PorPor7URL}
                fileParticipantPorPor7={fileParticipant2PorPor7}
                setFileParticipantPorPor7={setFileParticipant2PorPor7}
                isLatestParticipantPorPor7={isLatestParticipantfile2PorPor7}
                setIsLatestParticipantPorPor7={setIsLatestParticipantfile2PorPor7}
                isLoading={loading}
              />
            )}
            {page === 4 && (
              <ParticipantStepForm
                form={formParticipant3StepForm}
                nth={3}
                fileParticipantPhotoURL={fileParticipant3PhotoURL}
                fileParticipantPhoto={fileParticipant3Photo}
                setFileParticipantPhoto={setFileParticipant3Photo}
                isLatestParticipantPhoto={isLatestParticipantfile3Photo}
                setIsLatestParticipantPhoto={setIsLatestParticipantfile3Photo}
                fileParticipantIDCardURL={fileParticipant3IDcardURL}
                fileParticipantIDCard={fileParticipant3IDcard}
                setFileParticipantIDCard={setFileParticipant3IDcard}
                isLatestParticipantIDCard={isLatestParticipantfile3IDcard}
                setIsLatestParticipantIDCard={setIsLatestParticipantfile3IDcard}
                fileParticipantPorPor7URL={fileParticipant3PorPor7URL}
                fileParticipantPorPor7={fileParticipant3PorPor7}
                setFileParticipantPorPor7={setFileParticipant3PorPor7}
                isLatestParticipantPorPor7={isLatestParticipantfile3PorPor7}
                setIsLatestParticipantPorPor7={setIsLatestParticipantfile3PorPor7}
                isLoading={loading}
              />
            )}
            <PageChanger
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              handleLastPage={handleLastPage}
              handleSubmit={handleSubmit}
              page={page}
              setPage={setPage}
              pageMaxSize={members + 1}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RegisterFormStep
