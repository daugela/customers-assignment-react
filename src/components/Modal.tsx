import React from 'react';
import { Input } from '.';

interface ModalProps {
  active: boolean;
  closeHandler: () => void;
}

export const Modal = (props: ModalProps) => {

    const { active, closeHandler } = props;
    
    if (!active) return null;

    return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeHandler()}>&times;</span>
            <form>
              <Input id='fullname' type='text' placeholder='Full name' handleChange={() => {}}/>
              <Input id='email' type='email' placeholder='Email address' handleChange={() => {}}/>

              <Input id='city' type='text'  placeholder='City' handleChange={() => {}}/>
              <Input id='street' type='text' placeholder='Street name' handleChange={() => {}}/>
              <Input id='house' type='number' placeholder='House number' handleChange={() => {}}/>
              <Input id='zip' type='number' placeholder='ZIP number' handleChange={() => {}}/>
            </form>
          </div>
      </div>
    )
};