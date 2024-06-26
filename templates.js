// templates.js

export function participantTemplate(participantCount) {
    return `
        <section class="participant${participantCount}">
            <label for="firstName${participantCount}">First Name*</label>
            <input type="text" id="firstName${participantCount}" name="firstName${participantCount}" required>

            <label for="activity${participantCount}">Activity #*</label>
            <input type="text" id="activity${participantCount}" name="activity${participantCount}" required>

            <label for="fee${participantCount}">Fee ($)*</label>
            <input type="number" id="fee${participantCount}" name="fee${participantCount}" required>

            <label for="date${participantCount}">Desired Date*</label>
            <input type="date" id="date${participantCount}" name="date${participantCount}" required>

            <label for="grade${participantCount}">Grade</label>
            <input type="text" id="grade${participantCount}" name="grade${participantCount}">
        </section>
    `;
}

export function successTemplate({ adultName, participantCount, totalFees }) {
    return `
        <h2>Registration Successful</h2>
        <p>Thank you, ${adultName}, for registering ${participantCount} participants.</p>
        <p>Total fees: $${totalFees.toFixed(2)}</p>
    `;
}
