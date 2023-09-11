package br.com.asamistudiohair.repository;

import br.com.asamistudiohair.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
