import { Box, Button, List, ListItem, ListItemText, ListSubheader, TextField  } from "@mui/material";

interface Props{
  input: string
  setInput: (str: string) => void
  values: string[]
  setValues: (arr: string[]) => void
  setSubmitted: (value: boolean) => void
}

export function ListInput({values, setValues, input, setInput, setSubmitted}: Props) {


function addValues(value:string){
  if(value === "") return
setValues([...values, value])
}
  return (
    <>
    <Box display="flex"  justifySelf="center" alignSelf="center">
      <Box display="flex" flexDirection="column">
      <TextField value={input} id="outlined-basic" label="Outlined" variant="outlined" type="number" onChange={(e)=>{setInput(e.target.value)}}/>
      <Button onClick={()=>{addValues(input)
         setInput("")}}>Add</Button>
      <Button onClick={()=>{if(values.length > 0){setSubmitted(true)}}}>Submit</Button>
   
   {values.length > 0 ? (<List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'gray',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        color: "white"
      }}
      subheader={<li />}
    >
      <ListSubheader>{`Numbers Submitted`}</ListSubheader>
        {values.map((item) => (
              <ListItem key={Math.random()}>
                <ListItemText primary={item}  />
              </ListItem>
        ))}
        
    </List>): null} 
    </Box>
    </Box>
    </>
  )
}
