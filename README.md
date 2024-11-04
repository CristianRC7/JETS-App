# 📱 JETS-App

**JETS-App** es una aplicación innovadora desarrollada específicamente para mantener a los estudiantes de la **Universidad UTEPSA** informados sobre los eventos de **JETS**. Esta plataforma no solo proporciona información detallada sobre los eventos, sino que también facilita la gestión de asistencia y la interacción de los usuarios mediante un conjunto robusto de funcionalidades.

---

## 🚀 Características Principales

### 👤 Modo Administrador
El **modo administrador** permite gestionar eficientemente los eventos y los usuarios, con funcionalidades como:

- **📷 Escáner QR**: Facilita la toma de asistencia mediante el escaneo de códigos QR asignados a cada estudiante.

### 👥 Modo Usuario
Los estudiantes pueden acceder a diversos recursos y funciones:

- **📅 Información de Eventos**: Acceso a detalles como fechas, horas, lugares y descripciones de los eventos.
- **🎤 Conferencistas**: Información sobre los conferencistas participantes.
- **📍 Puntos de Inscripción**: Ubicación de los puntos de inscripción para los eventos.
- **📝 Formulario de Eventos**: Inscripción en eventos mediante formularios habilitados en momentos específicos.
- **💬 Contacto de Soporte**: Opción para resolver dudas o inconvenientes.
- **🔗 Código QR Personalizado**: Cada usuario cuenta con un código QR único para facilitar la asistencia.
- **📜 Certificados**: Descarga de certificados de participación en eventos.

---

## 🛠️ Tecnología Utilizada

- **Frontend**: [React Native](https://reactnative.dev/) - para la experiencia móvil multiplataforma.
- **Backend**: [PHP](https://www.php.net/) - para la lógica del servidor.
- **Generación de PDF**: [TCPDF](http://www.tcpdf.org/) - (usando Composer) para crear certificados de asistencia en formato PDF.

---

## ⚙️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) y npm.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) para ejecutar la app.
- [Composer](https://getcomposer.org/) para instalar TCPDF y otras dependencias de PHP.

---

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   https://github.com/CristianRC7/JETS-App.git
   cd jets-app
2. **Instalar dependencias**:
   ```bash
   npm install
3. **Ejecutar proyecto**:
   ```bash
   npx expo start
---

## 📦 Librerías y Dependencias

JETS-App utiliza las siguientes librerías y paquetes principales:

- **React Navigation**: Para la navegación en la aplicación.
- **@react-native-async-storage/async-storage**: Almacenamiento de datos locales.
- **@react-native-masked-view/masked-view**: Vistas enmascaradas para mejorar la interfaz de usuario.
- **Expo Barcode Scanner**: Para escanear códigos QR, facilitando la toma de asistencia.
- **React Native Gesture Handler** y **React Native Reanimated**: Para gestionar animaciones y gestos, ofreciendo una experiencia de usuario fluida.
- **React Native Permissions**: Gestión de permisos dentro de la aplicación.
- **React Native QRCode SVG**: Generación de códigos QR personalizados para cada usuario.

---

<div align="center"> 💻 Desarrollado por Cristian David Ramirez Callejas  💻 </div>
