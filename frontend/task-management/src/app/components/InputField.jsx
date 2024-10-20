import React from 'react'

const InputField = (props,ref) => {
    const {label_name,}=props
  return (
    <div className="input-group">
        <label htmlFor="email" >{label_name}</label>
        <input {...props} ref={ref} />
      </div>
  )
}

export default React.forwardRef(InputField);
// export default React.forwardRef(InputField);