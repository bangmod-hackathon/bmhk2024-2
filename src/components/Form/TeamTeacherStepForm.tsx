import { Form, FormInstance } from 'antd'
import React, { useEffect } from 'react'
import { customizeRequiredMark } from '../../lib/antdForm'
import TeacherContactsForm from './TeacherContactsForm'
import TeacherDocsForm from './TeacherDocsForm'
import TeacherForm from './TeacherForm'
import TeamForm from './TeamForm'
import { ref } from 'firebase/storage'
import { storage } from '../../utils/firebase'

interface Props {
  form: FormInstance
  teamName: string
  setTeamName: React.Dispatch<React.SetStateAction<string>>
  setMembers: React.Dispatch<React.SetStateAction<number>>
  fileIDCard: File | undefined
  setFileIDCard: React.Dispatch<React.SetStateAction<File | undefined>>
  fileTeacherCert: File | undefined
  setFileTeacherCert: React.Dispatch<React.SetStateAction<File | undefined>>
  fileIdCardURL: string
  isLatestIdcard: boolean
  setIsLatestIdcard: React.Dispatch<React.SetStateAction<boolean>>
  fileTeacherCertURL: string
  isLatestTeacherCert: boolean
  setIsLatestTeacherCert: React.Dispatch<React.SetStateAction<boolean>>
}

const TeamTeacherStepForm: React.FC<Props> = (props: Props) => {
  const getFileName = (url: string) => {
    return new File([], ref(storage, url).name)
  }

  useEffect(() => {
    if (props.fileIdCardURL) {
      props.setFileIDCard(getFileName(props.fileIdCardURL))
    }
  }, [props.fileIdCardURL])

  useEffect(() => {
    if (props.fileTeacherCertURL) {
      props.setFileTeacherCert(getFileName(props.fileTeacherCertURL))
    }
  }, [props.fileTeacherCertURL])

  return (
    <React.Fragment>
      <Form
        form={props.form}
        layout="vertical"
        requiredMark={customizeRequiredMark}
        initialValues={{
          member: '2'
        }}
        scrollToFirstError
      >
        <div className="space-y-8">
          <TeamForm setMembers={props.setMembers} teamName={props.teamName} setTeamName={props.setTeamName} />
          <TeacherForm />
          <TeacherContactsForm />
          <TeacherDocsForm
            fileIDCard={props.fileIDCard}
            fileIDCardURL={props.fileIdCardURL}
            setFileIDCard={props.setFileIDCard}
            fileTeacherCertURL={props.fileTeacherCertURL}
            fileTeacherCert={props.fileTeacherCert}
            setFileTeacherCert={props.setFileTeacherCert}
            isLatestIdcard={props.isLatestIdcard}
            setIsLatestIdcard={props.setIsLatestIdcard}
            isLatestTeacherCert={props.isLatestTeacherCert}
            setIsLatestTeacherCert={props.setIsLatestTeacherCert}
          />
        </div>
      </Form>
    </React.Fragment>
  )
}

export default TeamTeacherStepForm
