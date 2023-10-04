import { memo, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Unkown from "../views/Unkown"
import Book from "../layouts/Book"
import { Paths } from "./RoutesPath"
import { fetchMovies } from "../hooks/fetchmovies"
import { useDispatch } from "react-redux"

function Routig() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchMovies(dispatch)
  }, [])

  return (
    <Router>
      <Routes>
        {Paths.map(({ title, path, element: Element }) => (
          <Route key={title} element={<Book />}>
            <Route path={path} element={<Element />} />
          </Route>
        ))}

        <Route path={"/*"} element={<Unkown />} />
      </Routes>
    </Router>
  )
}

export default memo(Routig)
