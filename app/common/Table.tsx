import React from 'react'

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
  onRowClick,
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
                const value = row[header.key];
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table