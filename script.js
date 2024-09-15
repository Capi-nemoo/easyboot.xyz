document.addEventListener('DOMContentLoaded', function() {
    const parentRadios = document.querySelectorAll('.checkbox-tree > .container > input[type="radio"]');
    
    parentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Hide all nested divs
            document.querySelectorAll('.nested').forEach(nested => {
                nested.classList.remove('active');
            });

            // Show the nested div for the selected radio
            const nestedDiv = this.closest('.container').nextElementSibling;
            if (nestedDiv && nestedDiv.classList.contains('nested')) {
                nestedDiv.classList.add('active');
            }
        });
    });

    document.getElementById()
});