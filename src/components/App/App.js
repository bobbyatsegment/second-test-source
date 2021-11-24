import React, { useState, useEffect } from 'react'

const App = () => {

  const [user, setUser] = useState({
    user_id: 1,
    name: 'Bobby',
    email: 'bobby@twilio.com'
  })

  // const showUser = () => {
  //   alert(user.name)
  // }

  const trackClick = (e) => {
    const { name } = e.target
    if (name === 'user') {
      window.analytics.track('User Button Click', {
        name: user.name
      });  
    }
    window.analytics.track('Test Button Click', {
      button_clicked: name
    });
  }

  return (
    <main>
      <h1>Segment Test App</h1>
      <button name='first' onClick={e => trackClick(e)}>First Track</button>
      <button name='second' onClick={e => trackClick(e)}>Second Track</button>
      <button name='user' onClick={e => trackClick(e)}>User info</button>
    </main>
  )
}

export default App;
