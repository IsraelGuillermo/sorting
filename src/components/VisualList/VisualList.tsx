import { Box, Button } from "@mui/material"
import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react"
import classNames from "classnames"

interface Props {
  values?: string[]
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 1,
    border: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontSize: 8,
    transition: "all .5s",
  },
  root2: {
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1,
    border: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontSize: 8,
    transition: "all .5s",
  },
  root3: {
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1,
    border: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontSize: 8,
    transition: "all .5s",
  },
}))
export function VisualList({ values }: Props) {
  const [j, setJ] = useState<number>(0)
  const [completed, setCompleted] = useState(false)
  const [sorted, setSorted] = useState(values)

  const classes = useStyles()
  const arr = values?.slice(0) || []

  const delay = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const bubbleSort = async () => {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        setJ(j)
        await delay(1000)
        if (parseInt(arr[j]) > parseInt(arr[j + 1])) {
          setSorted(arr)
            ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    setCompleted(true)
  }

  return (
    <Box>
      <Box position="relative" flexDirection="row" alignItems="flex-end">
        {values?.map((item, index) => (
          <Box
            bottom={0}
            position="absolute"
            left={sorted && sorted?.indexOf(item) * 20}
            key={index}
            height={parseInt(item)}
            width={20}
            className={classNames(
              completed
                ? classes.root3
                : (sorted && sorted?.indexOf(item) === j) ||
                  (sorted && sorted?.indexOf(item) === j + 1)
                  ? classes.root
                  : classes.root2,
            )}
          />


        ))}
      </Box>
      {values && values.length > 0 && !completed && (
        <Button onClick={bubbleSort}>Bubble Sort</Button>
      )}
    </Box>
  )
}
