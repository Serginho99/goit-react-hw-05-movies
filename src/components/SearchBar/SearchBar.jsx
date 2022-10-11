import { useState } from 'react';
import { Input, ButtonWrapper, Form, Wrapper } from './SearchBar.styled';
import { Notify } from 'notiflix';

export default function SearchBar({ submit }) {
  const [moviesName, setMoviesName] = useState('');

  function handleChange(e) {
    setMoviesName(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (moviesName.trim() === '') {
      return Notify.info('Enter name film');
    }
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
          autoComplete="off"
          placeholder="Search film"
        />
        <ButtonWrapper type="submit">Search</ButtonWrapper>
      </Wrapper>
    </Form>
  );
}
