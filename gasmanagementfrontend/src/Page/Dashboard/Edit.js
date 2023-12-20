import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [address, setAddress] = useState(selectedEmployee.address);
    const [customerNumber, setCustomerNumber] = useState(selectedEmployee.customerNumber);
    const [meterSerialNumber, setMeterSerialNumber] = useState(selectedEmployee.meterSerialNumber);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !address || !customerNumber || !meterSerialNumber) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            address,
            customerNumber,
            meterSerialNumber
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="customerNumber">Customer Number ($)</label>
                <input
                    id="customerNumber"
                    type="number"
                    name="customerNumber"
                    value={customerNumber}
                    onChange={e => setCustomerNumber(e.target.value)}
                />
                <label htmlFor="meterSerialNumber">MeterSerial Number</label>
                <input
                    id="meterSerialNumber"
                    type="number"
                    name="meterSerialNumber"
                    value={meterSerialNumber}
                    onChange={e => setMeterSerialNumber(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit