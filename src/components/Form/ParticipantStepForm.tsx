import React from 'react'
import ParticipantForm from './ParticipantForm'
import ParticipantContactsForm from './ParticipantContactsForm'

interface Props {
  nth: number
}

const ParticipantStepForm: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div className="space-y-8">
        <ParticipantForm nth={props.nth} />
        <ParticipantContactsForm />
      </div>
    </React.Fragment>
  )
}

export default ParticipantStepForm
