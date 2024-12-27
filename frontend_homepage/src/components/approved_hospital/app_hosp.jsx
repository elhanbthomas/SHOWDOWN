import { useState,useRef,useEffect } from 'react'


import React from 'react';
import './app_hosp.css';

function  Approved_hospital({ hospitals })  {

hospitals = [
        'City Hospital',
        'Green Valley Hospital',
        'Sunshine Hospital',
        'Riverdale Hospital',
        'Mountain View Hospital',
        'Oceanview Medical Center',
        'Lakeside Hospital',
        'Highland Hospital',
        'Desert Regional Hospital',
        'Forest Glen Hospital'
      ];
    
  return (
    <>
    <div className='hospital_home_thumbnail'>Approved hospital</div>

    <div className="table-container">
      <table className="hospital-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Approved Hospital</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div> </div>
    </>
  );
};

export default Approved_hospital;
