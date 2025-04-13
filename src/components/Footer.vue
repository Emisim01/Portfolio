<template>
    <footer class="bg-very-bluey text-white py-6 px-30">
      <div class="footer-container">
        <div class="text-container">
          <p class="navnBox text-xl uppercase font-bold pb-2">Emilie Stryhn Simonsen</p>
          <div class="navnBox2 pb-2">
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

.navnBox {
  font-family: 'PlusJakartaSans';
}

.navnBox2 {
  font-family: 'PlusJakartaSans';
}


/* Media Queries */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column; /* Skift til kolonnevisning */
    align-items: center; /* Centrerer elementerne horisontalt */
    text-align: center; /* Centrerer teksten */
  }

  .navnBox {
    margin-bottom: 10px; /* Tilføj lidt afstand mellem navn og kontaktoplysninger */
  }

  .qrCode {
    height: 90px; /* Reducer størrelsen på QR-koden */
    width: 90px;
    margin-top: 15px;
    }
  
  .navnBox2 {
    font-size: 14px; /* Reducer tekststørrelsen */
  }

  .navnBox2 {
    font-size: 14px; /* Reducer tekststørrelsen */
  }

  .text-container p {
    font-size: 12px; /* Reducer tekststørrelsen for mindre skærme */
  }

}

  </style>