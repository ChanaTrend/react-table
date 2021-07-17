import React, { useMemo } from 'react';
import { useTable, useBlockLayout } from 'react-table';
import { useSticky } from 'react-table-sticky';
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from './columns'
import Styles from './TableStyles';
import './table.css'

export const StickyTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    // const columns = useMemo(() => GROUPED_COLUMNS, []) if need group column
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns: columns, data: data
    }, useBlockLayout, useSticky)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance

    const firdtPageRows = rows.slice(0, 20)

    return (
        <Styles>
            <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
                <div className="header">
                    {headerGroups.map((headerGroup) => (
                        <div {...headerGroup.getHeaderGroupProps()} className="tr">
                            {headerGroup.headers.map((column) => (
                                <div {...column.getHeaderProps()} className="th">
                                    {column.render('Header')}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div {...getTableBodyProps()} className="body">
                    {firdtPageRows.map((row) => {
                        prepareRow(row);
                        return (
                            <div {...row.getRowProps()} className="tr">
                                {row.cells.map((cell) => (
                                    <div {...cell.getCellProps()} className="td">
                                        {cell.render('Cell')}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
                {/* <div className="footer">
                    {footerGroups.map((footerGroup) => (
                        <div {...footerGroup.getHeaderGroupProps()} className="tr">
                            {footerGroup.headers.map((column) => (
                                <div {...column.getHeaderProps()} className="td">
                                    {column.render('Footer')}
                                </div>
                            ))}
                        </div>
                    ))}
                </div> */}
            </div>
        </Styles>
        // <table {...getTableProps()}>
        //     <thead>
        //         {
        //             headerGroups.map((headerGroup) => (
        //                 <tr {...headerGroup.getHeaderGroupProps()}>
        //                     { headerGroup.headers.map((column) => (
        //                         <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        //                     ))}
        //                 </tr>
        //             ))
        //         }
        //     </thead>
        //     <tbody {...getTableBodyProps}>
        //         {
        //             rows.map(row => {
        //                 prepareRow(row)
        //                 return (
        //                     <tr {...row.getRowProps()}>
        //                         {
        //                             row.cells.map((cell) => {
        //                                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

        //                             })
        //                         }
        //                     </tr>
        //                 )
        //             })
        //         }

        //     </tbody>
        //     <tfoot>
        //         {
        //             footerGroups.map(footerGroup => (
        //                 <tr {...footerGroup.getFooterGroupProps()}>
        //                     {
        //                         footerGroup.headers.map(column => (
        //                             <td {...column.getFooterProps}>
        //                                 {
        //                                     column.render('Footer')
        //                                 }
        //                             </td>
        //                         ))
        //                     }
        //                 </tr>
        //             ))
        //         }
        //     </tfoot>
        // </table>
    )
}

export default StickyTable;