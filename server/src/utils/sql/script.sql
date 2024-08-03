INSERT INTO user (nombre, apellido, telefono, especialidad, nro_matricula, email, password, estado_civil, createdAt, updatedAt) VALUES
('Daniela', 'Delgado', '0011223344', 'Odontologa', '55874589', 'danny.delgado@justina-medico.com', '$2a$10$botjWuvNzLfan.VAa0PgI.lPXzGCswt9V0QY3csDpH5Iwyk9KTIdG', 'soltera', NOW(), NOW()),
('Carlos', 'Perez', '0011223345', 'Cardiologo', '55874590', 'carlos.perez@justina-medico.com', '$2a$10$botjWuvNzLfan.VAa0PgI.lPXzGCswt9V0QY3csDpH5Iwyk9KTIdG', 'casado', NOW(), NOW()),
('Maria', 'Gomez', '0011223346', 'Pediatra', '55874591', 'maria.gomez@justina-medico.com', '$2a$10$botjWuvNzLfan.VAa0PgI.lPXzGCswt9V0QY3csDpH5Iwyk9KTIdG', 'soltera', NOW(), NOW()),
('Juan', 'Lopez', '0011223347', 'Dermatologo', '55874592', 'juan.lopez@justina-medico.com', '$2a$10$botjWuvNzLfan.VAa0PgI.lPXzGCswt9V0QY3csDpH5Iwyk9KTIdG', 'divorciado', NOW(), NOW()),
('Ana', 'Martinez', '0011223348', 'Neurologa', '55874593', 'ana.martinez@justina-medico.com', '$2a$10$botjWuvNzLfan.VAa0PgI.lPXzGCswt9V0QY3csDpH5Iwyk9KTIdG', 'casada', NOW(), NOW());

INSERT INTO paciente (email, password, ciudad, edad, peso, factor_sanguineo, genero, altura, alergias, telefono, direccion, contacto_familiar_telefono, contacto_familiar_relacion, nombre, createdAt, updatedAt) VALUES
('carlos.chavez@justina-paciente.com', '$2a$10$/B5rxmYclq1H5GQXVgFuDeX6.xxuhi9HXxOyE9hL6sI.29oEpeM.S', 'Buenos Aires', 20, 65.5, 'O-', 'M', 1.75, 'Oxycodon', '55550011', 'Av. Siempre Viva 332', '55550011', 'Madre', 'Juan Perez', NOW(), NOW() ),
('maria.garcia@justina-paciente.com', '$2a$10$/B5rxmYclq1H5GQXVgFuDeX6.xxuhi9HXxOyE9hL6sI.29oEpeM.S', 'Cordoba', 25, 55.0, 'A+', 'F', 1.65, 'Penicilina', '55550012', 'Calle Falsa 123', '55550012', 'Padre', 'Maria Garcia', NOW(), NOW() ),
('pedro.lopez@justina-paciente.com', '$2a$10$/B5rxmYclq1H5GQXVgFuDeX6.xxuhi9HXxOyE9hL6sI.29oEpeM.S', 'Rosario', 30, 70.0, 'B+', 'M', 1.80, 'Ninguna', '55550013', 'Av. Libertador 456', '55550013', 'Hermano', 'Pedro Lopez', NOW(), NOW() ),
('luis.fernandez@justina-paciente.com', '$2a$10$/B5rxmYclq1H5GQXVgFuDeX6.xxuhi9HXxOyE9hL6sI.29oEpeM.S', 'La Plata', 35, 80.0, 'O+', 'M', 1.85, 'Aspirina', '55550015', 'Av. San Martin 101', '55550015', 'Hija', 'Luis Fernandez', NOW(), NOW() ),
('ana.martinez@justina-paciente.com', '$2a$10$/B5rxmYclq1H5GQXVgFuDeX6.xxuhi9HXxOyE9hL6sI.29oEpeM.S', 'Mendoza', 28, 60.0, 'AB-', 'F', 1.70, 'Ibuprofeno', '55550014', 'Calle Principal 789', '55550014', 'Esposo', 'Ana Martinez', NOW(), NOW() );

INSERT INTO personal_medico (idPersonal_medico, createdAt, updatedAt) VALUES
(1, NOW(), NOW()),
(2, NOW(), NOW()),
(3, NOW(), NOW()),
(4, NOW(), NOW()),
(5, NOW(), NOW());

INSERT INTO cita (idPaciente, idPersonal_medico, tipoDeConsulta, ubicacion, motivo, status, activo, createdAt, updatedAt) VALUES
(1, 1, 'PRESENCIAL', 'Av. Siempre Viva 332', 'tratamiento', 'pendiente', 1, NOW(), NOW()),
(2, 1, 'PRESENCIAL', 'Av. Siempre Viva 332', 'seguimiento', 'confirmado', 1, NOW(), NOW()),
(5, 2, 'PRESENCIAL', 'Av. Siempre Viva 332', 'consulta', 'cancelada', 1, NOW(), NOW());
