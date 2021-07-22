import React, { useContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import Head from 'next/head';
import CustomThemeContext from '../styles/CustomThemeContext';

import { Container, Content, Header } from '../styles/pages/Home';

import SocialMediaButton from '../components/SocialMediaButton';

import profileImg from '../assets/profile.png';

const Home: React.FC = () => {
  const [themeSwitchIChecked, setThemeSwitchIChecked] = useState(false);

  const { toggleTheme } = useContext(CustomThemeContext);

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header>
        <div>
          <img src={profileImg.src} alt="" />
          <h1>Luigi Ciccone Pereira</h1>
        </div>
        <ReactSwitch
          onChange={() => {
            setThemeSwitchIChecked(previousState => !previousState);
            toggleTheme();
          }}
          checked={themeSwitchIChecked}
          checkedIcon={
            <FaMoon color="#d6d6d6" size="100%" style={{ padding: 5 }} />
          }
          uncheckedIcon={
            <FaSun color="#fdf500" size="100%" style={{ padding: 5 }} />
          }
          onColor="#6800c7"
          offColor="#d4d474"
        />
      </Header>
      <Content>
        <ul>
          <li>
            <SocialMediaButton
              icon={AiFillGithub}
              name="Github"
              link="https://github.com/luigicpereira"
            />
          </li>
          <li>
            <SocialMediaButton
              icon={AiFillLinkedin}
              name="Linkedin"
              link="https://www.linkedin.com/in/luigi-ciccone-pereira/"
            />
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Home;
