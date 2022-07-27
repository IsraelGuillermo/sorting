import { useEffect, useState } from "react"
import { getMergeSortAnimations } from "../../utils/SortingAlgorithms/sortingAlgorithms";

import "./SortingVisualizer.css"
export function SortingVisualizer() {
  const AnimationSpeed = 5;
  const numberOfArrayBars = 10;
  const primaryColor = '#83c5be';
  const secondaryColor = "#d62828"
  const completedColor = "#489fb5"
  const [completed, setCompleted] = useState(false)
  const [isSorting, setIsSorting] = useState(false)
  const [array, setArray] = useState<number[]>([])
  useEffect(() => {

    const resetArray = () => {

      const numArray: number[] = []
      setIsSorting(false)
      for (let i = 0; i < numberOfArrayBars; i++) {
        numArray.push(generateRanInt(5, 730))
      }
      setArray(numArray)
    }
    resetArray()
  }, [])
  const delay = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  const resetArray = () => {
    setIsSorting(false)
    setCompleted(false)
    const numArray: number[] = []

    for (let i = 0; i < numberOfArrayBars; i++) {
      numArray.push(generateRanInt(5, 730))
    }
    setArray(numArray)
  }
  const generateRanInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleMergeSort = async () => {
    await setIsSorting(true)
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
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          barOneStyle.height = `${newHeight}px`

          setCompleted(i === animations.length - 1)

        }, i * AnimationSpeed)

      }

    }
  }

  const handleBubbleSort = () => {
    const bubbleSortHelper = async (arr: number[]) => {
      setIsSorting(true)
      const sortedArr = arr.slice()
      if (sortedArr.length === 1) return sortedArr
      const arrayBars = document.getElementsByClassName("array-bar") as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length - i - 1; j++) {

          arrayBars[j].style.backgroundColor = secondaryColor
          arrayBars[j + 1].style.backgroundColor = secondaryColor
          await delay(35)

          if (sortedArr[j] > sortedArr[j + 1]) {
            const tempMaxHeight = arrayBars[j].style.height;
            const tempSmallerHeight = arrayBars[j + 1].style.height;
            arrayBars[j].style.height = tempSmallerHeight;
            arrayBars[j + 1].style.height = tempMaxHeight;
            [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]]



          }
          arrayBars[j].style.backgroundColor = primaryColor;
          arrayBars[j + 1].style.backgroundColor = primaryColor;
        }
      }
      setCompleted(true)
      return
    }
    bubbleSortHelper(array)
  }

  const handleSelectionSort = () => {
    const selectionSortHelper = async (arr: number[]) => {

      setIsSorting(true)
      const sortedArr = arr.slice()
      console.log({ arr })
      if (sortedArr.length === 1) return sortedArr
      const arrayBars = document.getElementsByClassName("array-bar") as HTMLCollectionOf<HTMLElement>;
      const n = sortedArr.length

      for (let i = 0; i < n; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
          arrayBars[min].style.backgroundColor = secondaryColor;
          arrayBars[j].style.backgroundColor = secondaryColor;
          await delay(30)
          if (sortedArr[j] < sortedArr[min]) {
            arrayBars[min].style.backgroundColor = primaryColor;
            min = j;
            arrayBars[i].style.backgroundColor = primaryColor;
            arrayBars[min].style.backgroundColor = secondaryColor;


          }
          arrayBars[i].style.backgroundColor = primaryColor;
          arrayBars[min].style.backgroundColor = primaryColor;
          arrayBars[j].style.backgroundColor = primaryColor;
        }
        if (min !== i) {
          const temp = sortedArr[i];
          const tempMinHeight = arrayBars[i].style.height
          const tempMaxHeight = arrayBars[min].style.height
          sortedArr[i] = sortedArr[min];
          sortedArr[min] = temp
          arrayBars[min].style.height = tempMinHeight
          arrayBars[i].style.height = tempMaxHeight
        }




      }

      console.log(sortedArr)
      setCompleted(true)
      return sortedArr
    }
    selectionSortHelper(array)

  }

  return (<>
    <div className="array-container">
      {array.map((value, idx) => (
        <div className="array-bar" key={idx} style={{ height: `${value}px`, backgroundColor: completed ? completedColor : primaryColor }} />
      ))}

      <button disabled={isSorting && !completed} onClick={resetArray}>Generate New Array</button>
      <button disabled={isSorting} onClick={handleMergeSort}>Merge Sort</button>
      <button disabled={isSorting} onClick={handleBubbleSort}>Bubble Sort</button>
      <button disabled={isSorting} onClick={handleSelectionSort}>Selection Sort</button>



    </div>



  </>)
}
