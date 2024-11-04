<?php
include 'conexion.php';
include 'cors.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['usuario'])) {
    $usuario = $data['usuario'];

    // Actualiza la consulta para buscar el ID en la tabla 'usuarios'
    $queryUsuario = "SELECT id FROM usuarios WHERE usuario='$usuario'";
    $resultUsuario = mysqli_query($connection, $queryUsuario);
    
    if ($rowUsuario = mysqli_fetch_assoc($resultUsuario)) {
        $id_datos = $rowUsuario['id'];
        date_default_timezone_set('America/La_Paz');
        $currentDate = date('Y-m-d');

        // Actualiza la consulta para reflejar los cambios en las tablas
        $queryEventos = "
            SELECT e.id, e.hora, e.descripcion, e.aula, e.expositor, e.fecha,
            hc.fecha_habilitada, 
            CASE 
                WHEN hc.fecha_habilitada <= '$currentDate' THEN 
                    CASE 
                        WHEN c.id_calificacion IS NOT NULL THEN 'Encuesta Enviada'
                        ELSE 'Responder Encuesta'
                    END
                ELSE 'Encuesta No Disponible'
            END AS status
            FROM eventos e
            JOIN inscripciones i ON e.id = i.id_evento
            LEFT JOIN habilitacion_calificacion hc ON e.id = hc.id_evento
            LEFT JOIN calificaciones c ON e.id = c.id_evento AND c.id_datos = '$id_datos'
            WHERE i.id_datos = '$id_datos'
        ";
        
        $resultEventos = mysqli_query($connection, $queryEventos);
        $eventos = [];

        while ($row = mysqli_fetch_assoc($resultEventos)) {
            $eventos[] = $row;
        }

        echo json_encode(array('success' => true, 'eventos' => $eventos));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Usuario no encontrado'));
    }
} else {
    echo json_encode(array('success' => false, 'message' => 'Missing parameters'));
}

mysqli_close($connection);
?>
