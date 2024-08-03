import React from 'react'
import TeamForm from './TeamForm'
import TeacherForm from './TeacherForm'
import TeacherContactsForm from './TeacherContactsForm'
import TeacherDocsForm from './TeacherDocsForm'

const TeamTeacherStepForm: React.FC = () => {
  return (
    <React.Fragment>
      <div className="space-y-8">
        <TeamForm />
        <TeacherForm />
        <TeacherContactsForm />
        <TeacherDocsForm />
      </div>
    </React.Fragment>
  )
}

export default TeamTeacherStepForm
