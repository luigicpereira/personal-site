import React from 'react';
import { IconType } from 'react-icons';
import openLinkInNewTab from '../../utils/openLinkInNewTab';

import { Container } from './styles';

interface SocialMediaButtonProps {
  icon: IconType;
  name: string;
  link: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon: Icon,
  name,
  link,
}) => {
  return (
    <Container onClick={() => openLinkInNewTab(link)}>
      <Icon size={24} />
      <p>{name}</p>
    </Container>
  );
};

export default SocialMediaButton;
