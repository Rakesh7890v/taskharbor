import React from 'react'

const Input = ({newItem, setNewItem, handleSubmit}) => {

  return (
    <div>
        <div className="input-section">
            <form onSubmit={handleSubmit}>
                <input type="text" value={newItem.name} placeholder='Enter Task' onChange={(e) => setNewItem({...newItem, name: e.target.value})}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Input