import { useEffect, useState } from "react"
import { getMergeSortAnimations } from "../../utils/SortingAlgorithms/sortingAlgorithms";
import "./SortingVisualizer.css"
export function SortingVisualizer() {
  const AnimationSpeed = 1;
  const numberOfArrayBars = 310;
  const primaryColor = '#83c5be';
  const secondaryColor = "red"
  useEffect(() => {
    const resetArray = () => {
      const numArray: number[] = []

      for (let i = 0; i < numberOfArrayBars; i++) {
        numArray.push(generateRanInt(5, 730))
      }
      setArray(numArray)
    }
    resetArray()
  }, [])
  const [array, setArray] = useState<number[]>([])
  const resetArray = () => {
    const numArray: number[] = []

    for (let i = 0; i < numberOfArrayBars; i++) {
      numArray.push(generateRanInt(5, 730))
    }
    setArray(numArray)
  }
  const generateRanInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleMergeSort = () => {
    const animations = getMergeSortAnimations(array)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar") as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneidx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneidx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? secondaryColor : primaryColor
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color

        }, i * AnimationSpeed)
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          barOneStyle.height = `${newHeight}px`
        }, i * AnimationSpeed)
      }


    }
  }

  return (<>
    <div className="array-container">
      {array.map((value, idx) => (
        <div className="array-bar" key={idx} style={{ height: `${value}px`, backgroundColor: primaryColor }} />
      ))}


      {/* <button onClick={ }>Merge Sort</button>
      <button onClick={ }>Bubble Sort</button>/
      <button onClick={ }>Selection Sort</button> */}
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={handleMergeSort}>Merge Sort</button>



    </div>



  </>)
}
