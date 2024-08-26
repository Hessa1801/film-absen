document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('absensiForm');
    const absensiTable = document.getElementById('absensiTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const status = document.getElementById('status').value;

        // Membuat baris baru di tabel
        const newRow = absensiTable.insertRow();
        newRow.insertCell().textContent = name;
        newRow.insertCell().textContent = date;
        newRow.insertCell().textContent = status;

        // Reset form setelah submit
        form.reset();
    });
});