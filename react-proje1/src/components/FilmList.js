import React from 'react';
import { Card, Col, Row } from 'antd';

const FilmList = ({ movies }) => (
  <Row gutter={16}>
    {movies.map((movie) => (
      <Col span={8} key={movie.imdbID}>
        <Card
          hoverable
          cover={<img alt={movie.Title} src={movie.Poster} />}
        >
          <Card.Meta title={movie.Title} description={`Year: ${movie.Year}`} />
        </Card>
      </Col>
    ))}
  </Row>
);

export default FilmList;
