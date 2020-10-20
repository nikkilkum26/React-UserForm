import React, { useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [state, setSstate] = useState("");
    const [city, setCity] = useState("");
    const [addr, setAddr] = useState("");
    const [gender, setGender] = useState("");
    const [married, setMarried] = useState("");
    const [food, setFood] = useState("");
    const [color, setColor] = useState("");

    // let items = {
    //     "Name": name,
    //     "Email": email,
    //     "Country": country,
    //     "State": state,
    //     "City": city,
    //     "Address": addr,
    //     "Gender": gender,
    //     "Married": married,
    //     "Food": food,
    //     "Color": color,
    // }

    let submit = (e) => {
        e.preventDefault();

        axios({
            method: 'post',    
            url: "https://userdetialsserver.herokuapp.com/insert",
            data: {
                Name: name,
                Email: email,
                Country: country,
                State: state,
                City: city,
                Address: addr,
                Gender: gender,
                Married: married,
                Food: food,
                Color: color,
            }

        }).then((response) => {

           
            console.log(response.data)
        })



    }

    return (
        <div className="container">
            
            <Form onSubmit={submit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="country">Country</Label>
                    <Input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="state">State</Label>
                    <Input type="text" name="state" id="state" onChange={(e) => setSstate(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="Address">Address</Label>
                    <Input type="" name="Address" id="Address" onChange={(e) => setAddr(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="Gender">Gender</Label>
                    <Input type="select" name="Gender" id="Gender" onChange={(e) => setGender(e.target.value)} >
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="T">T</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Married">Married</Label>
                    <Input type="select" name="Married" id="Married" onChange={(e) => setMarried(e.target.value)} >
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Favourite Food">Favourite Food</Label>
                    <Input type="text" name="Food" id="Food" onChange={(e) => setFood(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="Favourite Color">Favourite Color</Label>
                    <Input type="text" name="Color" id="Color" onChange={(e) => setColor(e.target.value)} />
                </FormGroup>
                <Button color="danger">Submit</Button>
                
            </Form>
            <br/>
        </div>
    )


}

export default Home;
