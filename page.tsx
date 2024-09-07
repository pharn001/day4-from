'use client';
import { useTable } from '@refinedev/react-table';
import { List } from '@src/shadcn/components/crud';
import { Table } from '@src/shadcn/components/table';
import React, { useMemo } from 'react'

function Page() {
    const {table} = UseTableOne();
    console.log(table.options.data)
  return (
    <div>
        <List>
             <Table table={table} >
            <Table.Column header="fullname" id="fullname" accessorKey="fullname"/>
            <Table.Column header="fullname" id="fullname" accessorKey="fullname"/>
            <Table.Column header="fullname" id="fullname" accessorKey="fullname"/>
        </Table>
        </List>
       
    </div>
  )
}

export default Page
const UseTableOne = ()=>{
    const columns = useMemo(()=> [],[]);
    const table = useTable({
        columns,
        enableSorting:true,
        enableColumnFilters:true,
        refineCoreProps:{
            resource:"profile",
        },
    })
    return {table}
}
