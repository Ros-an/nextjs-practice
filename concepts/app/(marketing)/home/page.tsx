import React from 'react'

// Route grouping => adding list of related routes under one folder, naming rule => folder name within parenthesis ()

// Now one question arises, what if there is collision in naming
/**
 * like
 * (marketing)/home
 * home
 * In this case the content of first one will be rendered, First Come First Serve
 * 
 */
function Home() {
  return (
    <div>Home using Route Grouping</div>
  )
}

export default Home

