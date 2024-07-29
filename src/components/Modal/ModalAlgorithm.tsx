// ModalAlgorithm.tsx
import React from 'react'
import AlgorithmContent from '../Scope_Content/AlgorithmContent'
import GenericModal from './GenericModal'

//modal show content of Algorithm
const ModalAlgorithm: React.FC = (): JSX.Element => {
  return <GenericModal content={<AlgorithmContent />} />
}

export default ModalAlgorithm
