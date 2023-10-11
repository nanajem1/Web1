function validateForm() {
  var errorMessage = "Anda belum mengisi dengan lengkap"; // Inisialisasi variabel untuk pesan kesalahan

  if (document.forms["formPendaftaran"]["nama"].value == "") {
    errorMessage += "\n";
    document.forms["formPendaftaran"]["nama"].focus();
  }

  if (document.forms["formPendaftaran"]["email"].value == "") {
    errorMessage += "\n";
    document.forms["formPendaftaran"]["email"].focus();
  }

  if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
    errorMessage += "\n";
    document.forms["formPendaftaran"]["jurusan"].focus();
  }

  if (document.forms["formPendaftaran"]["alamat"].value == "") {
    errorMessage += "\n";
    document.forms["formPendaftaran"]["alamat"].focus();
  }

  // Tampilkan pesan kesalahan jika ada
  if (errorMessage !== "Anda belum mengisi dengan lengkap") {
    alert(errorMessage);
    return false;
  }

  window.location.href = "lab.html";
  return false;
}
