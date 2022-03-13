import { useMemo } from 'react';
import { useTable } from 'react-table';
import {
  transferIcon,
  purchasedIcon,
  listedIcon,
  mintIcon,
  ethBlack,
} from '../../../assets/icons';
import Icon from '../../Utils/Icon';

const Data = [
  {
    events: 'Transfer',
    unitPrice: '',
    quantity: '01',
    from: 'TheAtomicHeroes',
    to: '34DFF6',
    date: '18 days ago',
  },
  {
    events: 'Purchased',
    unitPrice: '0.257',
    quantity: '01',
    from: 'TheAtomicHeroes',
    to: '34DFF6',
    date: '18 days ago',
  },
  {
    events: 'Listed',
    unitPrice: '0.257',
    quantity: '01',
    from: 'TheAtomicHeroes',
    to: '',
    date: '18 days ago',
  },
  {
    events: 'Mint',
    unitPrice: '',
    quantity: '01',
    from: 'NullAddress',
    to: '',
    date: '18 days ago',
  },
];

const Columns = [
  {
    Header: 'Events',
    accessor: 'events', // accessor is the "key" in the data
  },
  {
    Header: 'Unit Price',
    accessor: 'unitPrice',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
  },
  {
    Header: 'From',
    accessor: 'from',
    color: 'blue',
  },
  {
    Header: 'To',
    accessor: 'to',
    color: 'blue',
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
];

const eventIcon = (event) => {
  switch (event) {
    case 'Transfer':
      return transferIcon;
    case 'Purchased':
      return purchasedIcon;
    case 'Listed':
      return listedIcon;
    case 'Mint':
      return mintIcon;
    default:
      return null;
  }
};

const EventsTab = () => {
  const data = useMemo(() => Data, []);
  const columns = useMemo(() => Columns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="border rounded-md ">
      <table {...getTableProps()} className="w-full text-left table-auto">
        <thead className="font-medium font-madeOuterSans ">
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()} className="p-4">
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()} className="border-t ">
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()} className="even:bg-blue-gray">
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={`p-4  ${
                            cell.column.color === 'blue'
                              ? 'text-blue-light'
                              : ''
                          } `}
                        >
                          {cell.column.Header === 'Events' ? (
                            <div className="flex items-center">
                              <Icon icon={eventIcon(cell.value)} />

                              <span className="ml-2">
                                {cell.render('Cell')}
                              </span>
                            </div>
                          ) : cell.column.Header === 'Unit Price' ? (
                            <div className="flex items-center">
                              {cell.value && (
                                <Icon
                                  icon={ethBlack}
                                  className="w-5 h-5 fill-black"
                                />
                              )}

                              <span className="ml-2">
                                {cell.render('Cell')}
                              </span>
                            </div>
                          ) : (
                            // Render the cell contents
                            cell.render('Cell')
                          )}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default EventsTab;
