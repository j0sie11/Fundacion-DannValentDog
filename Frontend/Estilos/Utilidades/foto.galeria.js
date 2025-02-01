document.getElementById('img2').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById('prod2').src = this.result;
        });
        reader.readAsDataURL(file);
    }
});