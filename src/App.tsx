import React from 'react';
import './App.css';
import { Input } from '@chakra-ui/react';
import AtlasLogo from './assets/AtlasLogo.svg';
import { Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import pen from './assets/pen.svg';
import eyeVisibility from './assets/eyeVisibility.svg';
import Gmail from './assets/Gmail.svg'
import gitHub from './assets/gitHub.svg'
import { Text } from '@chakra-ui/react'
function App() {
  return (
    <div className='container'>
      <div className='loginContainer'>
        <div className='imgContainer'>
          <img src={AtlasLogo} alt="LogoMarca Atlas" />
          <p>Entre para continuar</p>
        </div>
        <div className='inputContainer'>
          <InputGroup>
            <InputRightElement pointerEvents='none'>
              <img src={pen} alt="Caneta" />
            </InputRightElement>
            <Input type='email' placeholder='Email' className='input' />
          </InputGroup>

          <InputGroup>
            <InputRightElement>
              <img src={eyeVisibility} alt="olho" />
            </InputRightElement>
            <Input placeholder='Digite sua senha' type='password' className="input" />
          </InputGroup>
          <p className='links'>Esqueceu a senha?</p>
          <Button colorScheme='blue' className='button'>Entrar</Button>
        </div>
        <p>Ou prossiga com:</p>
        <div className='ButtonContainer'>
          <Button leftIcon={<img src={Gmail} alt="Gmail" />} variant="outline" className='BtGmail'>
           Gmail
          </Button>
          <Button leftIcon={<img src={gitHub} alt="GitHub" />} variant="outline" className='BtGmail'>
           Gmail
          </Button>
        </div>
        <div className='futter'>
              <p>Não consegue entrar?</p> 
              <p className='links'>Crie uma Conta</p>
        </div>
      </div>
    </div>
  );
}


export default App;
