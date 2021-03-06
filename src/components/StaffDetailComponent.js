import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from 'dateformat'

class StaffDetail extends Component {

    renderStaff(staff) {
        
        if (staff != null)
            
            return (
                <Card className="col-md-4 col-sm-6 col-xs-12">
                    <CardBody>
                        <CardTitle>{staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </Card>
            )
        else
            return (
                <div></div>
            );
    }


    render() {
        let staff;
        if (this.props.selectedStaff) {

            staff = (
                <div className="row">
                    {this.renderStaff(this.props.selectedStaff)}
                    
                </div>
            )
        } else {
            staff = <div></div>
        }
        return (
            <div className='container'>
                {staff}
            </div>
        )
    }
}

export default StaffDetail;