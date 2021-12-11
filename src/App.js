import Slider from "./Slider"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"

const data = [
  {
    key: 1,
    src: img1,
  },
  {
    key: 2,
    src: img2,
  },
  {
    key: 3,
    src: img3,
  },
]

function App() {
  return (
    <>
      <Slider data={data} />
    </>
  )
}

export default App
