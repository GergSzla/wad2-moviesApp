import React, { useContext } from "react";
import "./reviewForm.css";
import useForm from "react-hook-form";
import { MoviesContext } from '../../contexts/moviesContext'
import { withRouter } from "react-router-dom";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


const ReviewForm = ({ movie, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);

  const onSubmit = data => {
    context.addReview(movie, data)
    history.push("/movies/favorites");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='First name'
          placeholder='First name'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Last name'
          placeholder='Last name'
        />
      </Form.Group>
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Review'
        placeholder='Review'

      />
      <Form.Field
        id='form-input-control-error-email'
        control={Input}
        label='Email'
        placeholder='example@gmail.com'
      />
      <Form.Checkbox label='I agree to the Terms and Conditions' error />

      <Form.Group widths='equal'>
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Submit'
        type = "submit"
      />
      
      </Form.Group>
    </Form>
  );
};

export default withRouter(ReviewForm);