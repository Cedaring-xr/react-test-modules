import React, { useState, useRef } from 'react';

function DragAndDrop() {
    const [draggableItems, setDraggableItems] = useState(['item1', 'item2', 'item3'])

    let draggingItem = useRef()
    let dragOver = useRef()

    function handleDrag(e, index) {
        draggingItem = index
    }

    function handleDragOver(e, index) {
        dragOver = index
    }

    function handleDrop(e, index) {

    }


  return (
    <section data-testid="dragAndDrop">
        <h1>Drag re-order and add Stack</h1>
        <div className='add-drad-item'>
            <input type="text" name="draggable-item-name" placeholder='add item' />
            <button>Add Item</button>
        </div>
        <div className='drag-container'>
            {
                draggableItems.map((item, index) => (
                    <div key={index} className="draggable" draggable="true"
                        onDragStart={(e) => handleDrag(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDragEnd={(e) => handleDrop(e, index)}>
                        <div className='hamburger'>
                            <div className='hamburger-line'></div>
                            <div className='hamburger-line'></div>
                            <div className='hamburger-line'></div>
                        </div>
                        <p>{item}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
export default DragAndDrop
