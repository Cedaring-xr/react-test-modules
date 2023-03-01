import React, { useState, useRef } from 'react';

function DragNDrop2() {

    const data = [
        {title: 'group1', items: ['1', '2', '3']},
        {title: 'group2', items: ['4', '5', '6']}
    ]

    const [dragList, setDragList] = useState(data)

    const [dragging, setDragging] = useState(false)

    let draggingItem = useRef()
    let dragOver = useRef()

    function handleDragStart(e, index) {
        draggingItem = index
    }

    function draggingOver(e, index) {
        
    }

    function dragEnd(e, index) {

    }

    const getStyles = () => {
        return 'dragging dnd-item'
    }


  return (
    <section className="dragAndDrop">
        <h1>Drag and Drop </h1>
            {
                data.map((grp, grpIndex) => {
                    <div className='dnd-group' key={grp.title}>
                        {
                            grp.items.map((item, itemIndex) => {
                                <div className={dragging ? getStyles() : 'dnd-item'}
                                    key={item} 
                                    draggable 
                                    onDragStart={(e) => {handleDragStart(e, {grpIndex, itemIndex})}}>
                                    {item}
                                </div>
                            })
                        }
                    </div>
                })
            }
    </section>
  )
}
export default DragNDrop2
