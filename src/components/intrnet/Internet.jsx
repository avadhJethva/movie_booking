import { useState, useEffect, memo, Fragment } from "react"

const NoInternetConnection = ({ children }) => {
  const [isOnline, setOnline] = useState(true)

  useEffect(() => {
    setOnline(navigator.onLine)
  }, [])

  window.addEventListener("online", () => {
    setOnline(true)
  })

  window.addEventListener("offline", () => {
    setOnline(false)
  })

  if (isOnline) return <Fragment>{children}</Fragment>
  else
    return (
      <div className="no-internet">
        <h1>No Interner Connection. Please refresh.</h1>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    )
}

export default memo(NoInternetConnection)
