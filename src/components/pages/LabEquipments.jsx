import React from 'react';


// Images
import Devices from "../../assets/Devices";
// ... //

// import '../../CSS/labEquipments.css';



const LabEquipments = () => {
    return (
        <>
            <div className='pageTitle'>Equipment List</div>
            <div className='device'>

                <table>
                    <tbody>
                        {
                            Devices.map(
                                (values) =>
                                    <React.Fragment key={values.id}>
                                        <tr>
                                            <td rowSpan='2'>
                                                <img src={values.img} alt={values.title} className="deviceImage" />
                                            </td>
                                            <td>
                                                <span className="deviceName">{values.title}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="deviceDescription">{values.description}</span>
                                            </td>
                                        </tr>
                                    </React.Fragment>

                            )
                        }
                    </tbody>
                </table>

            </div>

















            {/* 
            <div className='device' id='Multimeter'>

                <table>
                    <tbody>
                        <tr>
                            <td rowSpan='2'>
                                <img src={Multimeter} alt="Multimeter" className="deviceImage" />
                            </td>
                            <td>
                                <span className="deviceName">Multimeter</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="deviceDescription">
                                    A multimeter is a measuring instrument that can measure multiple electrical properties. A typical multimeter can measure voltage, resistance, and current, in which case it is also known as a volt-ohm-milliammeter (VOM), as the unit is equipped with voltmeter, ammeter, and ohmmeter functionality. Some feature the measurement of additional properties such as temperature and capacitance.
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


            <div className='device'>

                <table>
                    <tbody>
                        <tr>
                            <td rowSpan='2'>
                                <img src={F_Gen} alt="F_Gen" className="deviceImage" />
                            </td>
                            <td>
                                <span className="deviceName">Function Generator</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="deviceDescription">
                                    An oscilloscope is a laboratory instrument commonly used to display and analyze the waveform of electronic signals. In effect, the device draws a graph of the instantaneous signal voltage as a function of time.
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div> */}

        </>
    );
}

export default LabEquipments;