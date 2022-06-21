import { Box, Button } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import classNames from "classnames";

interface Props {
  values?: string[]
  setValues?: (arr: string[])=>void
}


const useStyles = makeStyles(() => ({
  root:{
      backgroundColor: "blue",
      borderColor: "black",
      borderWidth: 1,
      border:"solid",
      display:"flex",
      justifyContent:"center",
      alignItems:"center", 
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      fontSize:8, 
      transition: "all .5s"
  },
  root2:{
    backgroundColor:"red",
    borderColor: "black",
    borderWidth: 1,
    border:"solid",
    display:"flex",
    justifyContent:"center",
    alignItems:"center", 
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontSize:8,


},root3:{
  backgroundColor:"green",
  borderColor: "black",
  borderWidth: 1,
  border:"solid",
  display:"flex",
  justifyContent:"center",
  alignItems:"center", 
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  fontSize:8,
},

}));
export function VisualList({values, setValues}:Props) {
  const [j, setJ]= useState<number>(0)
  const [swap, setSwap] = useState<boolean>()
const[completed, setCompleted]=useState(false)

  const classes = useStyles()
  const arr = values?.slice(0) || []

const delay = (time: number) => { return new Promise(resolve => setTimeout(resolve, time))}



  const bubbleSort =  async () => {

    for (let i = arr.length; i > 0; i--) {
      setSwap(false)
        for (let j = 0; j < i-1; j++) {
        setSwap(true)
            setJ(j)
      console.log(swap)
            await delay(800) 
          if (parseInt(arr[j]) > parseInt(arr[j+1])) {
            setValues && setValues(arr);
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            // await delay(1000) 
          
        }  
        }      
    }
    setCompleted(true)



}

  return (
    <Box>
         <Box display="flex" flexDirection="row" alignItems="flex-end">
{values?.map((item, index)=>(
 <Box key={index} height={parseInt(item)} width={50} className={classNames(completed ? classes.root3 : index === j || index === j+1 ? classes.root : classes.root2)}>
 {item}
     </Box>))}
    </Box>
   {values && values.length > 0 && (<Button onClick={bubbleSort}>Bubble Sort</Button>)}
    </Box>

  )
  }
