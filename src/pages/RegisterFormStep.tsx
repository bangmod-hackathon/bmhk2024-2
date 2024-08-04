import React, { useState, useEffect, useRef } from 'react'
import TeamTeacherStepForm from '../components/Form/TeamTeacherStepForm'
import Stage, { StageStatus } from '../components/Steps/Stage'
import PageChanger from '../components/Form/PageChanger'
import ParticipantStepForm from '../components/Form/ParticipantStepForm'

const RegisterFormStep: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const [members, setMembers] = useState<number>(2)
  const [stageStatus, setStageStatus] = useState<StageStatus[]>([])
  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollToTop = () => {
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
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

  const PageSwither = () => {
    switch (page) {
      case 1:
        return <TeamTeacherStepForm setMembers={setMembers} />
      case 2:
        return <ParticipantStepForm nth={1} />
      case 3:
        return <ParticipantStepForm nth={2} />
      case 4:
        return <ParticipantStepForm nth={3} />
      default:
        return <></>
    }
  }

  return (
    <React.Fragment>
      <div
        ref={topRef}
        className="w-full h-full bg-[url('/register/bg-register.webp')] bg-top bg-no-repeat bg-cover scroll-smooth"
      >
        <div className="container mx-auto lg:pt-[8rem] pt-[6rem]">
          <header>
            <div className="py-4">
              <Stage numberOfMembers={members} statuses={stageStatus} />
            </div>
            <h1 className="text-white font-heading text-[40px] font-normal text-center py-2">REGISTRATION</h1>
          </header>
          <div className="pb-4 px-4">{PageSwither()}</div>
          <PageChanger page={page} setPage={setPage} pageMaxSize={members + 1} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default RegisterFormStep
