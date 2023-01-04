import PropTypes from 'prop-types';
import { BiLogIn } from 'react-icons/bi';
import { Form, Label, Input, IconWrapper, SubmitBtn } from './LoginForm.styled';

export const LoginForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onSubmit({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <IconWrapper>
        <BiLogIn size={35} />
        <span>Log in</span>
      </IconWrapper>

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

      <SubmitBtn type="submit">Log in</SubmitBtn>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
