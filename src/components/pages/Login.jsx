import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = () => {
    console.log("Funciono");
    reset();
  };
  return (
    <Container className="myMain py-5">
      <Form onSubmit={handleSubmit(onSubmit)} className="border rounded-3 p-3">
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@dominion.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Formato de email invalido",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="*********"
            {...register("password", {
              required: "La contraseña es obligatoria",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                message:
                  "La contraseña debe contener al menos 8 caracteres, 1 mayuscula 1 minuscula y 1 numero",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
