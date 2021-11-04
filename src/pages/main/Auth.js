import React, { useState } from 'react'

const AuthPage = () => {
  const [isLogin, toggleIsLogin] = useState(true)

  const handleConnectOrCreate = () => toggleIsLogin(!isLogin)

  return (
    <>
      <h1>{isLogin ? 'Connect to' : 'Create'} your account</h1>
      <div>The form to create/connect to an account</div>
      <button onClick={handleConnectOrCreate}>
        {isLogin ? 'Create an' : 'Connect to your'} account
      </button>
    </>
  )
}

export default AuthPage
