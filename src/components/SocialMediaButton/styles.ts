import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  font-size: 18px;
  font-weight: 500;
  padding: 12px 80px;
  background: ${props => lighten(0.1, props.theme.colors.background)};
  color: ${props => props.theme.colors.primary};
  border: 4px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  box-shadow: 0 0 5px 0 ${props => props.theme.colors.primary};
  user-select: none;

  &:hover {
    box-shadow: 0 0 5px 2px ${props => props.theme.colors.secondary};

    p {
      box-shadow: 0 1px 0 0 ${props => props.theme.colors.secondary};
    }
  }

  p {
    margin-left: 5px;
    line-height: 24px;
  }
`;
