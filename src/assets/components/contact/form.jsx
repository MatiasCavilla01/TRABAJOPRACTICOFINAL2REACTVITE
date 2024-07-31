import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';

const ContactSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'Demasiado corto!')
    .max(50, 'Demasiado largo!')
    .required('Requerido'),
  apellido: Yup.string()
    .min(2, 'Demasiado corto!')
    .max(50, 'Demasiado largo!')
    .required('Requerido'),
  email: Yup.string()
    .email('Invalid email')
    .required('Requerido'),
  descripcion: Yup.string()
    .min(10, 'Demasiado corto!')
    .max(200, 'Demasiado largo!')
    .required('Requerido'),
});

const ContactForm = () => (
  <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" color='#fb4b50' width='36%' marginTop='5%' marginRight='3%' marginBottom='5%'  >
    <Heading as="h2" size="lg" mb={4} color='#fb4b50'>
      Formulario de Contacto
    </Heading>
    <Formik
      initialValues={{
        nombre: '',
        apellido: '',
        email: '',
        descripcion: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, { setSubmitting }) => {
        emailjs.send(
          'service_yvny5pd',
          'template_e2wrola',
          values,
          'cylz02dKL_9ocsXFM'
        ).then((response) => {
          console.log('Mensaje enviado:', response.status, response.text);
          setSubmitting(false);
        }).catch((err) => {
          console.log('Error al enviar mensaje:', err);
          setSubmitting(false);
        });
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Flex direction="column" mb={4}>
            <FormControl isInvalid={touched.nombre && errors.nombre}>
              <Field
                as={Input}
                type="text"
                name="nombre"
                placeholder="Nombre"
              />
              {touched.nombre && errors.nombre && (
                <FormErrorMessage>{errors.nombre}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={touched.apellido && errors.apellido}>
              <Field
                as={Input}
                type="text"
                name="apellido"
                placeholder="Apellido"
                marginTop="5%"
              />
              {touched.apellido && errors.apellido && (
                <FormErrorMessage>{errors.apellido}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={touched.email && errors.email}>
              <Field
                as={Input}
                type="email"
                name="email"
                placeholder="Email"
                marginTop="5%"

              />
              {touched.email && errors.email && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={touched.descripcion && errors.descripcion}>
              <Field
                as={Textarea}
                name="descripcion"
                placeholder="Descripción"
                marginTop="5%"


              />
              {touched.descripcion && errors.descripcion && (
                <FormErrorMessage>{errors.descripcion}</FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <Button type='submit' colorScheme='blue'isLoading={isSubmitting}>Enviar</Button>
        </Form>
      )}
    </Formik>
  </Box>
);

export default ContactForm;