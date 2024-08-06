import React from 'react'
import ParticipantForm from './ParticipantForm'
import ParticipantContactsForm from './ParticipantContactsForm'
import ParticipantDocsForm from './ParticipantDocsForm'
import { Form, FormInstance } from 'antd'
import { customizeRequiredMark } from '../../lib/antdForm'

interface Props {
  form: FormInstance
  nth: number
}

const ParticipantStepForm: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Form
        form={props.form}
        layout="vertical"
        requiredMark={customizeRequiredMark}
        scrollToFirstError
        id={`id-participant-${props.nth}`}
        name={`name-participant-${props.nth}`}
      >
        <div className="space-y-8">
          <ParticipantForm nth={props.nth} />
          <ParticipantContactsForm />
          <ParticipantDocsForm />
        </div>
      </Form>
    </React.Fragment>
  )
}

export default ParticipantStepForm
