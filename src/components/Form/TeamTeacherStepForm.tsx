import { Form, FormInstance } from 'antd'
import React, { useState } from 'react'
import TeacherContactsForm from './TeacherContactsForm'
import TeacherDocsForm from './TeacherDocsForm'
import TeacherForm from './TeacherForm'
import TeamForm from './TeamForm'
import { customizeRequiredMark } from '../../lib/antdForm'

interface Props {
  form: FormInstance
  setMembers: React.Dispatch<React.SetStateAction<number>>
}

const TeamTeacherStepForm: React.FC<Props> = (props: Props) => {
  const [fileIDCard, setFileIDCard] = useState<File | undefined>(undefined)
  const [fileTeacherCert, setFileTeacherCert] = useState<File | undefined>(undefined)

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
          <TeamForm setMembers={props.setMembers} />
          <TeacherForm />
          <TeacherContactsForm />
          <TeacherDocsForm
            fileIDCard={fileIDCard}
            setFileIDCard={setFileIDCard}
            fileTeacherCert={fileTeacherCert}
            setFileTeacherCert={setFileTeacherCert}
          />
        </div>
      </Form>
    </React.Fragment>
  )
}

export default TeamTeacherStepForm
