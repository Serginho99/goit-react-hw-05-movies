import { useState } from 'react';
import { Input, ButtonWrapper, Form, Wrapper } from './SearchBar.styled';

export default function SearchBar({ submit }) {
  const [moviesName, setMoviesName] = useState('');

  function handleChange(e) {
    setMoviesName(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit({ moviesName });
    reset();
  }

  function reset() {
    setMoviesName('');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Input
          name="movieName"
          value={moviesName}
          type="text"
          onChange={handleChange}
        />
        <ButtonWrapper type="submit">Search</ButtonWrapper>
      </Wrapper>
    </Form>
  );
}
