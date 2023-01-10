import PropTypes from 'prop-types';
import { FaUserLock } from 'react-icons/fa';
import {
  Form,
  IconWrapper,
  Label,
  Input,
  SubmitBtn,
} from './RegisterForm.styled';

export const RegisterForm = ({ onSubmit }) => {
  const hadnleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onSubmit({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Form onSubmit={hadnleSubmit}>
      <IconWrapper>
        <FaUserLock size={35} />
        <span>Sign up</span>
      </IconWrapper>

      <Label>
        Name
        <Input type="text" name="name" required placeholder="Enter name" />
      </Label>
      <Label>
        Email address
        <Input type="email" name="email" required placeholder="Enter email" />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          placeholder="Password"
        />
      </Label>

      <SubmitBtn type="submit">Sign up</SubmitBtn>
    </Form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
