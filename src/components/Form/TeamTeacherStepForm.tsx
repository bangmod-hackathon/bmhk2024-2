import React from 'react'
import TeamForm from './TeamForm'
import TeacherForm from './TeacherForm'
import TeacherContactsForm from './TeacherContactsForm'
import TeacherDocsForm from './TeacherDocsForm'

interface Props {
  setMembers: React.Dispatch<React.SetStateAction<number>>
}

const TeamTeacherStepForm: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div className="space-y-8">
        <TeamForm setMembers={props.setMembers} />
        <TeacherForm />
        <TeacherContactsForm />
        <TeacherDocsForm />
      </div>
    </React.Fragment>
  )
}

export default TeamTeacherStepForm
