import React, { useState, useEffect } from 'react';

function Skillbar() {
    const [skillList, setSkill] = useState([])

    useEffect(() => {
        // handle cooldown timer for each skill independently
    }, [])

    return (
        <section className='skillbar-container'>
            <div className='hotbar'>
                <div className='skillbox'>
                    { skill }
                </div>
            </div>
        </section>
    )
}
export default Skillbar
