import React, { useState } from 'react';

function DragAndDrop() {
    const [draggableItems, setDraggableItems] = useState([])

    function handleDrag() {

    }

    function handleDrop() {

    }

    function handleDragOver() {

    }


  return (
    <section data-testid="dragAndDrop">
        <h1>Drag and Drop Stack</h1>
        <div className='add-drad-item'>
            <input type="text" name="draggable-item-name" placeholder='add item' />
            <button>Add Item</button>
        </div>
        <div className='drag-container'>
            {
                draggableItems.map((item, index) => (
                    <div key={index} >
                        <p>{item}</p>
                    </div>
                ))
            }
            <div className='draggable' draggable='true' onDragStart={(e) => handleDrag(e, 'item1')}>
                    <div className='hamburger'>
                        <div className='hamburger-line'></div>
                        <div className='hamburger-line'></div>
                        <div className='hamburger-line'></div>
                    </div>
                    <p>Item 1</p>
            </div>
            <div className='draggable' draggable='true' onDragStart={(e) => handleDrag(e, 'item2')}>
                <div className='hamburger'>
                    <div className='hamburger-line'></div>
                    <div className='hamburger-line'></div>
                    <div className='hamburger-line'></div>
                </div>
                <p>Item 2</p>
            </div>
            <div className='draggable' draggable='true' onDragStart={(e) => handleDrag(e, 'item3')}>
                <div className='hamburger'>
                    <div className='hamburger-line'></div>
                    <div className='hamburger-line'></div>
                    <div className='hamburger-line'></div>
                </div>
                <p>Item 3</p>
            </div>
            <div className='draggable' draggable='true' onDragStart={(e) => handleDrag(e, 'item4')}>
                <div className='hamburger'>
                    <div className='hamburger-line'></div>
                    <div className='hamburger-line'></div>
                    <div className='hamburger-line'></div>
                </div>
                <p>Item 4</p>
            </div>
        </div>
    </section>
  )
}
export default DragAndDrop
