package com.hydraflows.api.service;

import com.hydraflows.api.model.ContactLead;
import com.hydraflows.api.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public ContactLead saveLead(ContactLead lead) {
        return contactRepository.save(lead);
    }
}
