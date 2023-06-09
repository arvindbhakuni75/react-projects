
import React from 'react';
import { useFormik } from 'formik';

function Inputform() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    },
    onSubmit: values => {
      console.log('Form data ', values)
    }
  })

  
    

  return (
    <div >
      <form className='form' onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />

        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" id="channel" onChange = {formik.handleChange} value={formik.values.channel} />
        <button type='submit'>Submit Data</button>
      </form>
    </div>
  )
}

export default Inputform
