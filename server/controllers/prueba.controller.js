const getTop20Ofertantes = async (req, res) => {
  try {
    const top20Ofertantes = {
      top_users: [
        {
          nombre: "Usuario1",
          puntuacion: 9.8,
          nivel: "Experto",
          ubicacion: "Ciudad1, País1",
        },
        {
          nombre: "Usuario2",
          puntuacion: 9.7,
          nivel: "Avanzado",
          ubicacion: "Ciudad2, País2",
        },
        {
          nombre: "Usuario3",
          puntuacion: 9.5,
          nivel: "Avanzado",
          ubicacion: "Ciudad3, País3",
        },
        {
          nombre: "Usuario4",
          puntuacion: 9.4,
          nivel: "Intermedio",
          ubicacion: "Ciudad4, País4",
        },
        {
          nombre: "Usuario5",
          puntuacion: 9.3,
          nivel: "Intermedio",
          ubicacion: "Ciudad5, País5",
        },
        // Continuar con los siguientes usuarios hasta el top 20
      ],
    };

    res.status(200).send({ status: "OK", data: top20Ofertantes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const pruebaController = {
  getTop20Ofertantes,
};
