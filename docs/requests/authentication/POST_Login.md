# Documentación del Login de la API

Este documento proporciona instrucciones sobre cómo autenticarse en la API para acceder a los recursos protegidos.

## Endpoint

- **URL**: `/api/login`
- **Método**: `POST`
- **Descripcion**: Permite el logueo de los usuarios

## Parámetros de Entrada

| Parámetro | Tipo   | Descripción       |
| --------- | ------ | ----------------- |
| username  | String | Nombre de usuario |
| password  | String | Contraseña        |

## Respuestas

### Éxito:

- **Código de Estado**: 200 OK
- **Cuerpo de la Respuesta**: Token de acceso JWT

### Error:

- **Código de Estado**: 401 Unauthorized
- **Cuerpo de la Respuesta**: Mensaje de error indicando la razón del fallo en la autenticación.

## Ejemplo de Solicitud

```JSON
{
    "email": "email@email.com",
    "password": "password123"
}
```

## Ejemplo de Respuesta Exitosa

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Ejemplo de Respuesta de Error

```JSON
{
  "error": "Credenciales inválidas"
}

```

## Notas Adicionales

- Se recomienda usar HTTPS para todas las solicitudes.
- Los tokens de acceso JWT deben ser incluidos en el encabezado Authorization para acceder a los recursos protegidos.
