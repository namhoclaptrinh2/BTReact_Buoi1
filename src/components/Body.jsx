import React from 'react'
import Banner from './Banner'
import Card from './Card'
import ContentCard from './ContentCard'

const Body = () => {
  return (
    <div className="container">
        <Banner></Banner>
        {/* <Card></Card> */}
        <ContentCard></ContentCard>
    </div>
    // <>
    // <Banner></Banner>
    // <Card></Card>
    // </>
  )
}

export default Body