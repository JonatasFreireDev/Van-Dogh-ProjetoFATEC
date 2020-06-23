import React from 'react';

import { FaSpinner } from 'react-icons/fa';

import Loader from './styles';

const Loading: React.FC = () => {
  return (
    <Loader>
      <FaSpinner />
    </Loader>
  );
};

export default Loading;
