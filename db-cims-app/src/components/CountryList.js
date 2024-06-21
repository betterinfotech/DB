import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CountryList = ({ countries, onRowClick }) => {
  const columns = [
    { headerName: 'Name', field: 'name.common' },
    { headerName: 'Languages', field: 'languages', valueGetter: (params) => params.data.languages ? Object.values(params.data.languages).join(', ') : 'N/A' },
    { headerName: 'Currency', field: 'currencies',  valueGetter: (params) => params.data.currencies ? Object.values(params.data.currencies).map(currency => currency.name).join(', ') : 'N/A' },
    { headerName: 'Population', field: 'population' },
  ];

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        rowData={countries}
        columnDefs={columns}
        pagination={true}
        onGridReady={onGridReady}
        onRowClicked={(row) => onRowClick(row.data)}
      />
    </div>
  );
};

export default CountryList;
