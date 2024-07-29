import React from 'react'
import ComSciContent from '../Scope_Content/ComSciContent'
import GenericModal from './GenericModal'
// Modal shows content of Com Sci
const ModalComSci: React.FC = (): JSX.Element => {
  return <GenericModal content={<ComSciContent />} />
}

export default ModalComSci
