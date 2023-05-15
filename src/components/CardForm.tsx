import Button from "./Button";
import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseCard_number, chooseExpiration_date, chooseCvv, chooseName, chooseZip_code } from "../redux/slices/RootSlice";

interface CardFormProps {
  id?: string[]
}

export const CardForm = (props:CardFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated ${ data } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseCard_number(data.card_number));
      dispatch(chooseExpiration_date(data.expiration_date));
      dispatch(chooseCvv(data.cvv));
      dispatch(chooseName(data.name));
      dispatch(chooseZip_code(data.zip_code));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (

    <div className='fixed w-full h-full flex overflow-auto z-1
    justify-center align-middle bg-sky bg-opacity-25'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="card_number">Card Number</label>
            <Input {...register('card_number')} name='card_number' placeholder="1234 5678 8765 4321" />
        </div>
        <div>
          <label htmlFor="expiration_date">Expiration Date</label>
            <Input {...register('expiration_date')} name='expiration_date' placeholder="05/2023" />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
            <Input {...register('cvv')} name='cvv' placeholder="123" />
        </div>
        <div>
          <label htmlFor="name">Full Name</label>
            <Input {...register('name')} name='name' placeholder="John Smith" />
        </div>
        <div>
          <label htmlFor="zip_code">Zip Code</label>
            <Input {...register('zip_code')} name='zip_code' placeholder="12345" />
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-navy p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CardForm