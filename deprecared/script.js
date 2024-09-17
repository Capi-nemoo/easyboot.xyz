document.addEventListener('DOMContentLoaded', function() {
    // Code for index.html
    if (document.querySelector('.checkbox-tree')) {
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

        const submitButton = document.getElementById('submit');
        if (submitButton) {
            submitButton.addEventListener('click', function(){
                const selectedOS = document.querySelector('input[name="os"]:checked').id;
                const selectedOptions = [];
                const activeNested = document.querySelector('.nested.active');
                if (activeNested) {
                    activeNested.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                        selectedOptions.push(checkbox.id);
                    });
                } else if (selectedOS == "preDebianPC"){
                    selectedOptions.push("debianNeoVim", "debianObsidian", "debianSteam", "debianVSCode");
                } else if (selectedOS == "preDebianServer"){
                    selectedOptions.push("debianXfce", "debianSsh", "debianTmux", "debianPcdump");
                }
                sessionStorage.setItem('selectedOS', selectedOS);
                sessionStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
                console.log('Selected OS:', sessionStorage.getItem('selectedOS'));
                console.log('Selected Options:', sessionStorage.getItem('selectedOptions'));
                window.location.href = 'search.html';
            });
        }
    }

    // Code for search.html
    const outputElement = document.getElementById('output');
    if (outputElement) {
        const selectedOS = sessionStorage.getItem('selectedOS');
        const selectedOptions = JSON.parse(sessionStorage.getItem('selectedOptions'));
        
        let outputText = `Selected OS: ${selectedOS}<br>`;
        if (selectedOptions && selectedOptions.length > 0) {
            outputText += `Selected Options: ${selectedOptions.join(', ')}`;
        }
        outputElement.innerHTML = outputText;
    }
});