import { FormInstance } from 'antd'
import React, { useState } from 'react'
import TeacherContactsForm from './TeacherContactsForm'
import TeacherDocsForm from './TeacherDocsForm'
import TeacherForm from './TeacherForm'
import TeamForm from './TeamForm'

interface Props {
  form: FormInstance
  setMembers: React.Dispatch<React.SetStateAction<number>>
}

const TeamTeacherStepForm: React.FC<Props> = (props: Props) => {
  const [fileIDCard, setFileIDCard] = useState<File | undefined>(undefined)
  const [fileTeacherCert, setFileTeacherCert] = useState<File | undefined>(undefined)

  return (
    <React.Fragment>
      <div className="space-y-8">
        <TeamForm form={props.form} setMembers={props.setMembers} />
        <TeacherForm form={props.form} />
        <TeacherContactsForm form={props.form} />
        <TeacherDocsForm
          fileIDCard={fileIDCard}
          setFileIDCard={setFileIDCard}
          fileTeacherCert={fileTeacherCert}
          setFileTeacherCert={setFileTeacherCert}
        />
      </div>
    </React.Fragment>
  )
}

export default TeamTeacherStepForm
