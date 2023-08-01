import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { Input } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./modal.css";

const styleSigin = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#ffecff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleLoggin = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffecff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleButton = {
  color: "white",
  lineHeight: "0px",
}

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (props.opt === "logIn") {

    return (
      <div>
        <Button variant="text" sx={styleButton} onClick={handleOpen}>Login</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleLoggin} className="ModalBox">

            <h1>Bem-Vindo</h1>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel className='mt-4'>Senha</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>

            <a href='/fazerpedido' className='btn btn-primary d-flex mt-3 w-25 d-flex justify-content-center'>Login</a>

          </Box>
        </Modal>
      </div>
    );
  }

  else if (props.opt === "signIn") {
    return (
      <div>
        <Button variant="text" sx={styleButton} onClick={handleOpen}>Cadastrar-se</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleSigin} className="ModalBox">

            <h1>Cadastre-se</h1>
            <div className='d-flex'>
              <div>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel className='mt-4'>Senha</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    placeholder="senha"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className='mt-4'>Confirmar Senha</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Confirmar senha"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className='mt-4'>Nome</FormLabel>
                  <Input
                    name='nome'
                    type='text'
                    placeholder='Nome Completo'>
                  </Input>
                </FormControl>
              </div>
              
              <div className='w-100'>
                <FormControl>
                  <FormLabel className='mt-4'>Número de Telefone</FormLabel>
                  <Input
                    name='nome'
                    type='text'
                    placeholder='Número para Contato'>
                  </Input>
                </FormControl>
                <FormControl>
                  <FormLabel className='mt-4'>CPF</FormLabel>
                  <Input
                    name='nome'
                    type='text'
                    placeholder='CPF'>
                  </Input>
                </FormControl>
                <FormControl>
                  <FormLabel className='mt-4'>Endereço Completo</FormLabel>
                  <Input
                    name='nome'
                    type='text'
                    placeholder='Nome Completo'>
                  </Input>
                </FormControl>
              </div>
            </div>
            <a href='/' className='btn btn-primary d-flex mt-3 w-25 d-flex justify-content-center'>Sing In</a>

          </Box>
        </Modal>
      </div >
    )
  }

}
