import { Box, Button, TextField } from "@mui/material";

interface Props {
  input: string
  setInput: (str: string) => void
  values: string[]
  setValues: (arr: string[]) => void
  setSubmitted: (value: boolean) => void
}

export function ListInput({ values, setValues, input, setInput, setSubmitted }: Props) {


  // function addValues(value: string) {
  //   if (value === "") return
  //   setValues([...values, value])
  // }

  function generateArray(value: number) {
    const randomArr: string[] = []
    const min = 10
    const max = 150
    const difference = max - min
    for (let i = 0; i < value; i++) {
      console.log(randomArr)
      const randomNum = Math.floor((Math.random() * difference)).toString()
      // values && setValues([...values, (Math.floor(Math.random())).toString()]);
      if (!randomArr.includes(randomNum))
        randomArr.push(randomNum)
    }
    setValues(randomArr)
    if (values.length > 0) {
      setSubmitted(true)
    }
  }
  console.log(values)
  return (
    <>
      <Box display="flex" justifySelf="center" alignSelf="center">
        <Box display="flex" flexDirection="column">
          <TextField value={input} id="outlined-basic" label="Outlined" variant="outlined" type="number" onChange={(e) => { setInput(e.target.value) }} />
          <Button onClick={() => {
            generateArray(parseInt(input))
          }
          }>Add</Button>
          <Button onClick={() => { if (values.length > 0) { setSubmitted(true) } }}>Submit</Button>

        </Box>
      </Box>
    </>
  )
}

