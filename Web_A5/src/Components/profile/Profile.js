import React from 'react';
import Navbar from '../homepage/navbar';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import './Profile.css';
import defaultUserImg from '../../assets/img/default_user.png';

const Profile = () => {
  const friendsList = [
    {
      name: 'Zulifaqr Ahmed',
      email: 'zulifaqr@gmail.com',
    },
    {
      name: 'Zulifaqr Ahmed',
      email: 'zulifaqr@gmail.com',
    },
    {
      name: 'Zulifaqr Ahmed',
      email: 'zulifaqr@gmail.com',
    },
  ];
  return (
    <div
      style={{
        backgroundColor: '#6a8296',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }}
    >
      <Navbar />
      <Row>
        <Col lg='4'>
          {' '}
          <Form className='user-form'>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='with a placeholder'
              />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>User Name</Label>
              <Input
                type='text'
                name='password'
                id='examplePassword'
                placeholder='password placeholder'
              />
            </FormGroup>{' '}
            <FormGroup>
              <Label for='examplePassword'>Date of Birth</Label>
              <Input
                type='date'
                name='password'
                id='examplePassword'
                placeholder='password placeholder'
              />
            </FormGroup>
          </Form>
        </Col>

        <Col lg='8'>
          <Card className='custom-card' style={{ width: 'min-content' }}>
            <CardHeader>Friends List</CardHeader>
            <CardBody className='custom-card-body'>
              {friendsList?.map(({ name, email }) => (
                <>
                  <Card className='custom-card '>
                    <CardHeader>{name}</CardHeader>
                    <CardBody>
                      <p>{email}</p>
                      <center>
                        <img src={defaultUserImg} alt='...' width='100' />
                      </center>
                    </CardBody>
                  </Card>
                </>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
