import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

const CountryList = ({ countries, onRowClick }) => {
  const columns = [
    { headerName: 'Name', field: 'name.common' },
    { headerName: 'Languages', field: 'languages'},
    { headerName: 'Currency', field: 'currencies' },
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
