# Requerimientos / funcionalidades

1. Sistema de reservas
  - Barra:
    - Horarios fijos 19:00 y 21:00
  - Mesas:
    - Horarios variables
    - Hora de inicio 19:00??
    - Último ingreso 22:00
    - Tiempo de reserva de 90 minutos
  - Cierre de reservas para el día actual a las 18:00
  - Máximo 4 personas por reserva
  - Despliegue de mensajes para contactarse en caso de grupos mas grandes
  - Máximo 2 semanas de anticipación
  - Fechas bloqueables para eventos
  - Reserva con usuarios registrados o sin registro
  - Comentarios asociados a las reservas
2. Base de datos
  - Historial de reservas
  - Información de usuarios
3. UI:
  - Calendario
  - Disponibilidad de fecha y hora
  - Alergías alimentarias
  - Datos necesarios para agendar: Nombre, Apellido, Email, Teléfono, comentario en las reservas
4. Vista de administración (CRUD):
  - Reservas
  - Usuarios

# Host

Idealmente usar VPS para gestionar localmente al menos dos contenedores, uno con la base de datos y otro con el servidor web.
Opciones para iniciar:

| Nombre | Comentario | Precio | Link |
| ------ | ---------- | ------ | ---- |
| Hostringer | Una de las más populares | 4.99 USD/mes - 1 CPU - 4G RAM - 50G SSD - 4TB BW | [Link](https://www.hostinger.com/es/servidor-vps?_gl=1*1ka3kck*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwqcO_BhDaARIsACz62vPq6tnSvjhx5vKrKJ-VzF1lZDdI7zo75ODQ2Tv-yJPqXKaB3lQjJV8aAgfgEALw_wcB) |
| DigitalOcean | Bastante conocida, la he usado anteriormente | 4 USD/mes - 1 CPU - 512M RAM - 10 G SSD - 500G BW | [Link](https://www.digitalocean.com/pricing/droplets) |
| VPS-Mart | La más barata | 3 USD/mes - 2 CPU - 4G RAM - 60G SSD - 100M BW | [Precios](https://www.vps-mart.com/vps-promotion?utm_source=google.com&utm_medium=ads&utm_term=vps%20barata&gad_source=1&gclid=Cj0KCQjwqcO_BhDaARIsACz62vOWAx_zbnTO-AxvNoFxKu_iwuRPtgd2w7U34GAW_sMyHwSZaAZ3xwgaAhXnEALw_wcB) |