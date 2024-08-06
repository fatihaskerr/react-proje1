import React, { useState } from 'react';
import { Input, Button, Alert } from 'antd';
import { fetchMovies } from '../api/omdb';

const FilmSearch = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchMovies(searchTerm);
      setMovies(data.Search || []);
      setError('');
    } catch (error) {
      setError(error.message);
      setMovies([]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Input
        placeholder="Film Adı Giriniz"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', maxWidth: '400px'}}
      />
      <Button
        onClick={handleSearch}
        type="primary"
        style={{ marginTop: '10px', width: '100%', maxWidth: '400px' }}
      >
        Ara
      </Button>
      {error && <Alert message={error} type="error" style={{ marginTop: '10px', width: '100%', maxWidth: '400px' }} />}
    </div>
  );
};

export default FilmSearch;
