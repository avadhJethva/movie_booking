import { Suspense } from "react"
import { HelmetProvider } from "react-helmet-async"
import Loader from "../components/loader/Loader"
import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

// eslint-disable-next-line react/prop-types
const Book = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HelmetProvider context={{}}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </HelmetProvider>
    </Suspense>
  )
}

export default Book
