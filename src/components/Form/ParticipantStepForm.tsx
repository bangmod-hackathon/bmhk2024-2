import React from 'react'
import ParticipantForm from './ParticipantForm'
import ParticipantContactsForm from './ParticipantContactsForm'
import ParticipantDocsForm from './ParticipantDocsForm'
import { FormInstance } from 'antd'

interface Props {
  form: FormInstance
  nth: number
}

const ParticipantStepForm: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div className="space-y-8">
        <ParticipantForm nth={props.nth} form={props.form} />
        <ParticipantContactsForm form={props.form} />
        <ParticipantDocsForm form={props.form} />
      </div>
    </React.Fragment>
  )
}

export default ParticipantStepForm
