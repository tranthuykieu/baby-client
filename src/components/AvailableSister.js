import React, {Component} from 'react';
import { Container} from 'reactstrap';
import user from '../img/user.png';

var container = {
    border: "0.4px black solid",
    display: "block",
    width: "100%",
    padding: "30px",
    marginTop: "30px"
    
}


var div_image = {
    display: "inline-block",
    verticalAlign: "top",
    width: "100px",
    minHeight: "100px",
    maxHeight: "auto",
    margin: "5px",
    padding: "5px",
    float: "left"
}

var image = {
    maxWidth: "100%",
    height: "auto"
}

var div_info = {
    display: "inline-block"
}

class AvailableUser extends Component {
    render(){
        return(
            <div>
                <Container style={container}>
                    <div style={div_image}>
                        <img style={image} src={user} alt="user"/>
                    </div>

                    <div style={div_info}>
                        <div> <h3> Vu Hoang Minh | Hanoi, Vietnam</h3>   </div>
                        <div> $50-$75/hr | 5 years exp</div>
                        <div> Availability: 20-40hr/week</div>
                        <div><p> My experience is 15 yrs as a nanny/ house manager where I took care of calling maintenance, laundry, errand, cooking, etc. After having my own children I started my own cleaning business for more flexibility. I am open to price per a job depending how many bedrooms and baths in the home or a rate of $50-$75$/week. I bring my own supplies except vacuum( unless previously requested). And I try to stay as natural as possible. I am flexible if you need extra done. I would first come meet you and evaluate how long it takes so you are not over charged and we are a good fit Reference and background check available upon request. </p></div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default AvailableUser;