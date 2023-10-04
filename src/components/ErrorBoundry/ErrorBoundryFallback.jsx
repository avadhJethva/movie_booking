import { useEffect, memo } from "react"
import Loader from "../loader/Loader"

const ErrorBoundryFallback = ({ error }) => {
  useEffect(() => {
    if (error?.message) {
      console.log(error?.message)
      // window.location.reload()
    }
  }, [error])

  return error?.message ? <Loader /> : <h1>Error</h1>
}

export default memo(ErrorBoundryFallback)
