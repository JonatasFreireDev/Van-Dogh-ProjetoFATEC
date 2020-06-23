import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import * as S from './styles';

import Norton from '../../assets/norton.png';
import SSL from '../../assets/ssl.png';
import Certificado from '../../assets/Certificado.png';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Image />
      <S.Content>
        <S.MapaSite>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.3268149293!2d-47.43086462526655!3d-22.723985881513904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c890a71cafb7ff%3A0x53f1339f749c58bd!2sAmericana%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1592852082382!5m2!1sen!2sbr"
            width="500"
            height="350"
            frameBorder="0"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen={false}
            aria-hidden="false"
          />
        </S.MapaSite>
        <div>
          <S.Contato>
            <p>Nome: Jonatas F</p>
            <p>Telefone: (19) 9978-4539</p>
            <p>Atendimento de segunda a sexta das 08:00 as 17:00</p>
          </S.Contato>
          <S.Redes>
            <FaFacebookSquare size="30" />
            <FaInstagram size="30" />
          </S.Redes>
          <S.Seguranca>
            <img src={SSL} alt="SSL" />
            <img src={Norton} alt="Norton" />
            <img src={Certificado} alt="Certificado" />
          </S.Seguranca>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default React.memo(Footer);
