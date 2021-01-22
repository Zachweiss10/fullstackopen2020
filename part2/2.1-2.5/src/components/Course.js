import React from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import Content from './Content'

export default function Course({ course }) {
    //console.log(course.parts)
    return(
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
        </div>
        )
}


