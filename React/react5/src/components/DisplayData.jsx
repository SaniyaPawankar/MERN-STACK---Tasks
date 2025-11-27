import React from 'react'

const DisplayData = (props) => {
    return (
        <div className='p-10 bg-gray-200 flex flex-wrap gap-5'>
            {
                props.languagesArray.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='p-4 w-64 rounded-lg bg-white shadow-sm border border-double border-black'
                        >
                            <ul className='space-y-1 text-gray-700'>
                                <li className='font-bold text-lg'>{item.name}</li>
                                <li>Difficulty: {item.difficulty}</li>
                                <li>Duration: {item.duration}</li>
                                <li> Used For : 
                                    <ol className='pl-5 list-disc'>
                                        {item.scope.map((item, index) => { return (<li key={index}>{item}</li>) })}
                                    </ol>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayData
