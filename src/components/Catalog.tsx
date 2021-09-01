import { useSelector } from "react-redux"

export default function Catalog() {
  const catalog = useSelector(state => state)

  console.log(catalog)

  return(
    <div>
     <h1>Catalog</h1>
    </div>
  )
}