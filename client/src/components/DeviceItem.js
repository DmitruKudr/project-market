import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import starIcon from '../assets/starIcon.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE, REACT_APP_API_URL} from "../utils/consts";

const DeviceItem = ({deviceItem, brandName}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className="mt-2" onClick={() => navigate(DEVICE_ROUTE + "/" + deviceItem.id)}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={REACT_APP_API_URL + deviceItem.img} />
                <div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
                    <div>{brandName}</div>
                    <div className="d-flex align-items-center">
                        <div>{deviceItem.rating}</div>
                        <Image width={18} height={18} src={starIcon}/>
                    </div>
                </div>
                <div>
                    {deviceItem.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;