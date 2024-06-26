import { participantTemplate, successTemplate } from './templates.js';

// Define participantCount in the global scope
let participantCount = 1;

document.addEventListener('DOMContentLoaded', () => {
    // Add participant button functionality
    const addParticipantButton = document.getElementById('addParticipant');
    if (addParticipantButton) {
        addParticipantButton.addEventListener('click', () => {
            participantCount++;
            const newParticipantHTML = participantTemplate(participantCount);
            document.getElementById('participants').insertAdjacentHTML('beforeend', newParticipantHTML);
        });
    } else {
        console.error('Add Participant button not found.');
    }

    // Submit form functionality
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', submitForm);
    } else {
        console.error('Registration form not found.');
    }
});

function submitForm(event) {
    event.preventDefault();
    console.log('Form submitted'); // Debugging output to see if function is called

    // Calculate total fees
    const totalFees = calculateTotalFees();

    // Get adult name
    const adultName = document.getElementById('adultName').value;

    // Show summary message
    const summary = document.getElementById('summary');
    if (summary) {
        summary.innerHTML = successTemplate({ adultName, participantCount, totalFees });
        summary.classList.remove('hide');
    } else {
        console.error('Summary element not found.');
    }

    // Hide the registration form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.classList.add('hide');
        registrationForm.reset(); // Reset the form to its initial state
    } else {
        console.error('Registration form not found for hiding.');
    }

    // Reset participantCount and clear added participants
    participantCount = 1;
    const participantsSection = document.getElementById('participants');
    participantsSection.innerHTML = ''; // Clear all added participant sections
    // Re-add the initial participant section
    const initialParticipantHTML = participantTemplate(participantCount);
    participantsSection.insertAdjacentHTML('beforeend', initialParticipantHTML);
}

function calculateTotalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    let total = 0;
    feeElements.forEach(element => {
        total += parseFloat(element.value) || 0;
    });
    return total;
}

