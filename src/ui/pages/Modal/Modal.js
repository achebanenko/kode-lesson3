import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { styled } from '@ui/theme'
import { ModalHeader } from '@ui/molecules'

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  .modal-content {
    padding: 2rem;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .close-button {
      align-self: flex-end;
      font-size:1rem;
      background: none;
      border: 1px solid #333;
      cursor: pointer;
    }
    h1 {
      align-self: center;
    }
  }
`

export const Modal = (props) => {
  const { toggleModal, component, header } = props

	useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = null
  })

	const outsideClick = (e) => {
		const content = document.querySelector('.modal-content')
		if(!content.contains(e.target)) {
			toggleModal(false)
		}
	}

	const ModalElement = (
		<StyledModal onClick={outsideClick}>
			<div className="modal-content">
        {/*
				<button className="close-button" onClick={() => toggleModal(false)}>
					&times;
				</button>
        */}

        <ModalHeader 
          children={header}
          action={() => toggleModal(false)}
        />

				{component}

			</div>
		</StyledModal>
	);

	return (
		ReactDOM.createPortal(
			ModalElement,
			document.body
		)
	)
}

Modal.propTypes = {
  component: PropTypes.object.isRequired,
  header: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
}