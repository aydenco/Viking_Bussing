import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hideable: true },
    { field: 'card_number', headerName: 'Card Number', flex: 1 },
    { field: 'expiration_date', headerName: 'Expiration Date', flex: 1 },
    { field: 'cvv', headerName: 'CVV', flex: 1 },
    { field: 'name', headerName: 'Full Name', flex: 1 },
    { field: 'zip_code', headerName: 'Zip Code', flex: 1 },
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { vehicleData, getData }= useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload() }, 500)
    }

  return (
    <>
        <Modal
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className=' flex flex-row'>
            <div>
                <button
                    className='p-3 bg-gold m-3 rounded text-navy font-semibold hover:bg-navy hover:text-white'
                    onClick={() => handleOpen()}>Add New Card</button>
            </div>
            <Button onClick={handleOpen} className='p-3 bg-gold m-3 rounded text-navy font-semibold hover:bg-navy hover:text-white' >Update</Button>
            <Button onClick={deleteData} className='p-3 bg-gold m-3 rounded text-navy font-semibold hover:bg-navy hover:text-white' >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%' }}
            >
            <h1 className="p-3 bg-gold my-2 rounded-lg text-navy font-bold">My Cards</h1>
            <DataGrid density={'compact'} rows={vehicleData} columns={columns}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
        />
        </div>
    </>
  )
}

export default DataTable