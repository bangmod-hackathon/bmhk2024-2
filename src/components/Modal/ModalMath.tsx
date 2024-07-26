import React from 'react'
import MathContent from '../Scope_Content/MathContent'
import GenericModal from './GenericModal'
// Modal shows content of Math
const ModalMath: React.FC = (): JSX.Element => {
  return <GenericModal content={<MathContent />} />
}

export default ModalMath
