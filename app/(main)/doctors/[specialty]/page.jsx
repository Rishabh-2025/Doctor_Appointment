"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const SpecialityPage = () => {
    const {specility} = useParams()
  return (
    <div>SpecialityPage: {specility}</div>
  )
}

export default SpecialityPage