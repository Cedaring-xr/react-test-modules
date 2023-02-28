import React, { useState } from 'react';

function SkillLoader() {
    const [skillOptions, setSkillOptions] = useState([])

    // load skill icons in a spritesheet format

    return (
        <section className='skill-options-container'>
            <div className='skillbox'>
                { skill }
            </div>
        </section>
    )
}
export default SkillLoader
