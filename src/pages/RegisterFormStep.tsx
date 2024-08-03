import React from 'react'
import TeamTeacherStepForm from '../components/Form/TeamTeacherStepForm'
import Stage from '../components/Steps/Stage'

const RegisterFormStep: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-[url('/register/bg-register.webp')] bg-top bg-no-repeat bg-cover scroll-smooth">
        <div className="container mx-auto lg:pt-[8rem] pt-[6rem]">
          <header>
            <div className="py-4">
              <Stage numberOfMembers={3} statuses={['finish', 'process', 'wait', 'wait']} />
            </div>
            <h1 className="text-white font-heading text-[40px] font-normal text-center py-2">REGISTRATION</h1>
          </header>
          <div className="pb-4">
            <TeamTeacherStepForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RegisterFormStep
