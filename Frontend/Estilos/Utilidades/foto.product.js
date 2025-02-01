document.getElementById('img').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById('prod').src = this.result;
        });
        reader.readAsDataURL(file);
    }
});