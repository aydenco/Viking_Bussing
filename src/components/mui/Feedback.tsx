import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../custom/Button';

export default function Feedback() {
  return (
    <div className='inline-flex flex-column justify-center mx-auto my-20'>
    <Stack spacing={4}>
      <h1 className="inline-flex justify-center font-bold text-xl">Questions or Concerns? Fill out the form below, and we will contact you as soon as we can.</h1>
      {/* <Rating name="half-rating" defaultValue={5.0} precision={0.5} /> */}
      <TextField
        id="outlined"
        placeholder="First and Last Name"/>
      <TextField
        id="outlined"
        placeholder="Email"/>
        <TextField
        id="outlined"
        placeholder="Subject"/>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={8}
        placeholder="Please write your message here."/>
      <button className='rounded-lg bg-gold w-20 text-teal hover:bg-navy hover:text-white font-bold text-lg p-1 '>Submit</button>
    </Stack>
    </div>
  );
}