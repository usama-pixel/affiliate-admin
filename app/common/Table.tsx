import React from 'react'
import { FaEye, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';

type HeaderConfig = {
  key: string;       // Property name in data
  label: string;     // Display label in header
  render?: (value: any, row: any) => React.ReactNode; // Optional custom renderer
}

type Props = {
  headers: (string | HeaderConfig)[]
  data: any[]
  className?: string
  tableClassName?: string
  headerClassName?: string
  rowClassName?: string
  cellClassName?: string
  emptyMessage?: string
  enableActions?: boolean,
  handleOpenView?: (id: number | undefined) => void
  handleOpenEdit?: (id: number | undefined) => void
  handleOpenDelete?: (id: number | undefined) => void
  onRowClick?: (row: any) => void
  keyExtractor?: (row: any, index: number) => string | number
}

function Table({
  headers,
  data,
  className = '',
  tableClassName = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
  emptyMessage = 'No data available',
  enableActions = false,
  onRowClick,
  handleOpenView,
  handleOpenEdit,
  handleOpenDelete,
  keyExtractor = (_row: any, index: number): number => index
}: Props) {
  if (!data || data.length === 0) {
    return <div className={className}>{emptyMessage}</div>
  }

  // Convert simple string headers to full header config objects
  const normalizedHeaders = headers.map(header => 
    typeof header === 'string' 
      ? { key: header, label: header } 
      : header
  );
  console.log({enableActions})
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className={`min-w-full divide-y divide-gray-200 ${tableClassName}`}>
        <thead className="bg-gray-50">
          <tr>
            {normalizedHeaders.map((header, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${headerClassName}`}
              >
                {header.label}
              </th>
            ))}
            {enableActions && <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={keyExtractor(row, rowIndex)}
              className={`${rowClassName} ${onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}`}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
            >
              {normalizedHeaders.map((header, cellIndex) => {
                const value = row[header.key]+"";
                return (
                  <td
                    key={cellIndex}
                    className={`px-6 py-4 whitespace-nowrap ${cellClassName}`}
                  >
                    {header.render 
                      ? header.render(value, row) 
                      : (value !== undefined && value !== null ? value : '-')}
                  </td>
                );
              })}
              {
                enableActions &&
                <td className='px-6 py-4 whitespace-nowrap flex flex-row gap-3 mr-auto w-fit'>
                  {handleOpenView && (
                    <button
                      className='flex justify-center items-center bg-gray-500 w-fit rounded text-white p-2 cursor-pointer hover:bg-gray-600 active:bg-gray-800'
                      onClick={() => (row && row.id) ? handleOpenView(row.id) : undefined}
                    >
                      <FaEye />
                    </button>
                  )}
                  {handleOpenEdit && (
                    <button
                      className='flex justify-center items-center bg-yellow-500 w-fit rounded text-white p-2 cursor-pointer hover:bg-yellow-600 active:bg-yellow-800'
                      onClick={() => (row && row.id) ? handleOpenEdit(row.id) : undefined}
                    >
                      <FaPencil />
                    </button>
                  )}
                  {handleOpenDelete && (
                    <button
                      className='flex justify-center items-center bg-red-500 w-fit rounded text-white p-2 cursor-pointer hover:bg-red-600 active:bg-red-800'
                      onClick={() => (row && row.id) ? handleOpenDelete(row.id) : undefined}
                    >
                      <FaTrash />
                    </button>
                  )}
                </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table