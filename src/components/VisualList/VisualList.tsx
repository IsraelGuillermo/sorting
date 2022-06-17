import { Box, Button } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  values?: string[]
  setValues?: (arr: string[])=>void
}



const useStyles = makeStyles(() => ({
    root:{
        backgroundColor:"red",
        borderColor: "black",
        borderWidth: 1,
        border:"solid",
        display:"flex",
        justifyContent:"center",
        alignItems:"center", 
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontSize:8
    }
  
  }));

export function VisualList({values, setValues}:Props) {
  const classes = useStyles()
  const arr = values?.slice(0) || []
  const bubbleSort = (): void => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (parseInt(arr[j]) > parseInt(arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
setValues && setValues(arr);
}

  return (
    <Box>
         <Box display="flex" flexDirection="row" alignItems="flex-end">
{values?.map((item, index)=>(
 <Box key={index} height={parseInt(item)} width={50} className={classes.root}>
 {item}
     </Box>))}
    </Box>
   {values && values.length > 0 && (<Button onClick={bubbleSort}>Bubble Sort</Button>)}
    </Box>
 
  )
  }
