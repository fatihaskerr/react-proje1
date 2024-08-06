import React, { useState } from 'react';
import { Layout, Typography, Divider } from 'antd';
import FilmSearch from './components/FilmSearch';
import FilmList from './components/FilmList';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [movies, setMovies] = useState([]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#0004ff', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px' }}>
          <Title level={2} style={{ color: 'yellow', margin: 0 }}>Film Search Application</Title>
        </div>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ padding: 24, minHeight: 280, background: '#fff', width: '100%', maxWidth: '800px' }}>
          <FilmSearch setMovies={setMovies} />
          <Divider />
          <FilmList movies={movies} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', background: '#001529', color: 'white' }}>
        Film Search Application ©2024
      </Footer>
    </Layout>
  );
};

export default App;
