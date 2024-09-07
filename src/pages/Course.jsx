import React from 'react'
import Layout from '../components/Layout'

const Course = (props) => {
  return (
    <Layout>
        <h1 className='text-2xl text-blue-500'>หลักสูตรที่เปิดสอน</h1>

        <section>
            <div className="">
            <img className='w-full h-72 object-cover' src={`/images/${props.image}`} alt={props.name} />
            <h3 className="">{props.name}</h3>
            <p className="">{props.description}</p>
            <span className="">{props.price}</span>
            </div>
        </section>
    </Layout>
  )
}

export default Course