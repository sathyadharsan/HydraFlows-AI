package com.hydraflows.api.controller;

import com.hydraflows.api.model.ContactLead;
import com.hydraflows.api.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*") // Allow frontend to call
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/submit")
    public ResponseEntity<ContactLead> submitLead(@Valid @RequestBody ContactLead lead) {
        ContactLead savedLead = contactService.saveLead(lead);
        return ResponseEntity.ok(savedLead);
    }

    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("HydraFlows API is up and running!");
    }
}
