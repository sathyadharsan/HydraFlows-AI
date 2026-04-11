package com.hydraflows.api.repository;

import com.hydraflows.api.model.ContactLead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactLead, Long> {
}
