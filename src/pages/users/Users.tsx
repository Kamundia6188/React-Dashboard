





import {useState} from 'react'
import './users.scss'
import DataTable from '../../components/dataTable/DataTable'
import { GridColDef } from '@mui/x-data-grid'
import { userRows } from '../../data';
import Add from '../../components/Add/Add';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 120,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 120,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 160,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 160,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 120,
      type: "boolean",
    },
  ];


function Users() {

    const [open, setOpen] = useState(false);
  return (
    <div className="users">
        <div className="info">
            <h1>Users</h1>
            <button onClick={()=>setOpen(true)}>Add New User</button>
        </div>
        <DataTable slug="users" columns={columns} rows={userRows}/>
        {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users