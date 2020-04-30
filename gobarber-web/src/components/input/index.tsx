import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>; // recebe o componente como tipo
}

/**
 * pegar todas as props do input, e passar para o componente
 * com spreads
 * Preciso transformar o nome do componente para nome proprio icon:Icon
 * porque senão, o react não entende como componente
 */
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
