import React, { useId } from 'react'

function Select({
    options,
    lable,
    classname = "",
    ...props
}, ref) {
    const id = useId();
    return (
    
    <div className='w-full'>
      {lable && <lable htmlfor={id} classname=''  > </lable>}
      <select {...props} id={id}>
        {options?.map((option)=>(
            <options key={option} vallu={option}>
                {option}
            </options>
        ))}
      </select>
    </div >
  )
}

export default React.forwardRef(Select)
