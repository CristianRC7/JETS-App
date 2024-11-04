<?php
include 'conexion.php';
include 'cors.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['usuario']) && isset($data['contrasena'])) {
    $usuario = $data['usuario'];
    $contrasena = $data['contrasena'];

    $query = "SELECT * FROM usuarios WHERE usuario='$usuario' AND contrasena='$contrasena'";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        echo json_encode(array('success' => false, 'message' => 'Database query failed', 'error' => mysqli_error($connection)));
    } else if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        $adminQuery = "SELECT * FROM admin WHERE id_usuario='{$row['id']}'";
        $adminResult = mysqli_query($connection, $adminQuery);
        $isAdmin = mysqli_num_rows($adminResult) > 0;

        echo json_encode(array(
            'success' => true,
            'message' => 'Login successful',
            'usuario' => $row['usuario'],
            'nombre_completo' => $row['nombre_completo'],
            'id' => $row['id'],
            'isAdmin' => $isAdmin
        ));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Invalid credentials'));
    }
} else {
    echo json_encode(array('success' => false, 'message' => 'Missing parameters'));
}

mysqli_close($connection);
?>
