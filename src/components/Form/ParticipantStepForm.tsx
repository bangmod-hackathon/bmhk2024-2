import React, { useEffect } from 'react'
import ParticipantForm from './ParticipantForm'
import ParticipantContactsForm from './ParticipantContactsForm'
import ParticipantDocsForm from './ParticipantDocsForm'
import { Form, FormInstance } from 'antd'
import { customizeRequiredMark } from '../../lib/antdForm'
import { storage } from '../../utils/firebase'
import { ref } from 'firebase/storage'

interface Props {
  form: FormInstance
  nth: number
  fileParticipantPhotoURL: string
  fileParticipantPhoto: File | undefined
  setFileParticipantPhoto: React.Dispatch<React.SetStateAction<File | undefined>>
  isLatestParticipantPhoto: boolean
  setIsLatestParticipantPhoto: React.Dispatch<React.SetStateAction<boolean>>
  fileParticipantIDCardURL: string
  fileParticipantIDCard: File | undefined
  setFileParticipantIDCard: React.Dispatch<React.SetStateAction<File | undefined>>
  isLatestParticipantIDCard: boolean
  setIsLatestParticipantIDCard: React.Dispatch<React.SetStateAction<boolean>>
  fileParticipantPorPor7URL: string
  fileParticipantPorPor7: File | undefined
  setFileParticipantPorPor7: React.Dispatch<React.SetStateAction<File | undefined>>
  isLatestParticipantPorPor7: boolean
  setIsLatestParticipantPorPor7: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
}

const ParticipantStepForm: React.FC<Props> = (props: Props) => {
  const getFileName = (url: string) => {
    return new File([], ref(storage, url).name)
  }

  useEffect(() => {
    if (props.fileParticipantPhotoURL) {
      props.setFileParticipantPhoto(getFileName(props.fileParticipantPhotoURL))
    }
  }, [props.fileParticipantPhotoURL])

  useEffect(() => {
    if (props.fileParticipantIDCardURL) {
      props.setFileParticipantIDCard(getFileName(props.fileParticipantIDCardURL))
    }
  }, [props.fileParticipantIDCardURL])

  useEffect(() => {
    if (props.fileParticipantPorPor7URL) {
      props.setFileParticipantPorPor7(getFileName(props.fileParticipantPorPor7URL))
    }
  }, [props.fileParticipantPorPor7URL])

  return (
    <React.Fragment>
      <Form
        form={props.form}
        layout="vertical"
        requiredMark={customizeRequiredMark}
        scrollToFirstError
        id={`id-participant-${props.nth}`}
        name={`name-participant-${props.nth}`}
        disabled={props.isLoading}
      >
        <div className="space-y-8">
          <ParticipantForm nth={props.nth} />
          <ParticipantContactsForm />
          <ParticipantDocsForm
            fileParticipantPhotoURL={props.fileParticipantPhotoURL}
            fileParticipantPhoto={props.fileParticipantPhoto}
            setFileParticipantPhoto={props.setFileParticipantPhoto}
            isLatestParticipantPhoto={props.isLatestParticipantPhoto}
            setIsLatestParticipantPhoto={props.setIsLatestParticipantPhoto}
            fileParticipantIDCardURL={props.fileParticipantIDCardURL}
            fileParticipantIDCard={props.fileParticipantIDCard}
            setFileParticipantIDCard={props.setFileParticipantIDCard}
            isLatestParticipantIDCard={props.isLatestParticipantIDCard}
            setIsLatestParticipantIDCard={props.setIsLatestParticipantIDCard}
            fileParticipantPorPor7URL={props.fileParticipantPorPor7URL}
            fileParticipantPorPor7={props.fileParticipantPorPor7}
            setFileParticipantPorPor7={props.setFileParticipantPorPor7}
            isLatestParticipantPorPor7={props.isLatestParticipantPorPor7}
            setIsLatestParticipantPorPor7={props.setIsLatestParticipantPorPor7}
            isLoading={props.isLoading}
          />
        </div>
      </Form>
    </React.Fragment>
  )
}

export default ParticipantStepForm
