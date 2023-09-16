import React from 'react';
import esquilo from '../../../assets/img/esquilo.png';

import brasil from '../../../assets/img/brasil.png';
import * as C from './style.js';

function Contato() {
  return (
    <>
      <C.Main>
        <C.Container>
          <C.Section>
            <C.Title>Contato</C.Title>

            <aside>
              <ul>
                <li>
                  <C.Brasil src={brasil} alt="" />
                  <p>São Paulo - SP, Brasil</p>
                </li>
                <li>
                  <i className="uil uil-whatsapp"></i>
                  <p>11 999444-9772</p>
                </li>
                <li>
                  <i className="uil uil-envelope"></i>
                  <p>oncapy.studio@gmail.com</p>
                </li>
              </ul>

              <C.Esquilo src={esquilo} alt="" />
            </aside>
          </C.Section>
        </C.Container>
      </C.Main>
    </>
  );
}

export default Contato;
