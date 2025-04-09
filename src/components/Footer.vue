<template>
    <footer class="bg-very-bluey text-white py-6 px-30">
      <div class="footer-container">
        <div class="text-container">
          <p class="text-xl uppercase font-bold pb-2">Emilie Stryhn Simonsen</p>
          <div class="pb-2">
            <p>tlf: +45 60 54 16 59</p>
            </div> 
            <div>
                <p>Mail: Emiliestryhnsimonsen@hotmail.com</p>
            </div>
        </div>
  
        <div class="qrCode"></div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style>
.footer-container {
  display: flex; /* Gør det muligt at placere elementer på samme linje */
  justify-content: space-between; /* Placerer tekst til venstre og QR-kode til højre */
  align-items: center; /* Justerer elementerne vertikalt */
}

.text-container {
  display: flex;
  flex-direction: column; /* Sørger for, at paragrafferne stables vertikalt */
  margin-top: 0;
}

.qrCode {
  height: 110px;
  width: 110px;
  background-image: url('@/assets/qrcode.png');
  background-size: contain; /* Sørger for, at billedet fylder hele containeren */
  background-position: center; /* Centrerer billedet i containeren */
  background-repeat: no-repeat;
}

  </style>