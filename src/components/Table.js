import React from 'react';
import MaterialIcon from 'material-icons-react';
import '../styles/Table.css';

const table = ({ data, onChangeFavorite }) => (
    <div className='table'>
        <table>
            <tbody>
                <tr className='table__heading'>
                    <th className='table__heading--id'>
                        ID
                    </th>
                    <th className='table__heading--address'>
                        Address
                    </th>
                    <th className='table__heading--price'>
                        Price   
                    </th>
                    <th className='table__heading--lastUpdate'>
                        Last Update   
                    </th>
                    <th className='table__heading--type'>
                        Type
                    </th>
                    <th className='table__heading--favorite'>
                        Is in favorite  
                    </th>
                </tr>
                {
                    data.map(item => (
                        <tr
                            key={item.id}
                            className={`tableDataRow ${item.up === true ? 'priceUp' : item.up === false ? 'priceDown' : ''}`}
                        >
                            <td>{item.id}</td>
                            <td>{item.address}</td>
                            <td>{item.price}</td>
                            <td>{item.lastUpdate}</td>
                            <td>{item.type}</td>
                            <td 
                                title={
                                    `${item.favorite ? 
                                        'This item is in the favorites. Click to remove from favorites.' : 
                                        'Click to add to the favorites'}`
                                    }
                                className={`favorite ${item.favorite && 'favorite__isFavorite'}`}
                                onClick={() => onChangeFavorite(item.id)}
                            >
                                <MaterialIcon icon='favorite' size={100} color='#d50000' />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
);

export default table;