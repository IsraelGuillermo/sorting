import { Box, Button, List, ListItem, ListItemText, ListSubheader, TextField  } from "@mui/material";
import {  useState } from "react";
import { VisualList } from "../VisualList";


export function ListInput() {
  const [input, setInput] = useState("")
const [values, setValues] = useState<string[]>([])

function addValues(value:string){
setValues([...values, value])

}
  return (
    <>
    <Box display="flex" flexDirection="column" justifySelf="center" alignSelf="center">
      <Box>
      <TextField value={input} id="outlined-basic" label="Outlined" variant="outlined" type="number" onChange={(e)=>{setInput(e.target.value)}}/>
      <Button onClick={()=>{addValues(input)
         setInput("")}}>Add</Button>
      <Button onClick={()=>{console.log(values)}}>Submit</Button>
   
   {values.length > 0 ? (<List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'gray',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
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
    { values ? (<VisualList setValues={setValues} values={values}/>):null}
    </Box>
    </>
  )
}
