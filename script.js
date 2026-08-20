
const modalData = {
  certificates: `
    <h2> CERTIFICATES & ACHIEVEMENTS</h2>
    <p style="color:#a0a5b5; font-size:0.9rem;">Aldığım sertifikalar ve doğrulama bağlantıları:</p>
    
    <div class="modal-grid">
      <div class="modal-card">
        <img src="huawei-cert.jpg" alt="Huawei Cloud" />
        <h4>Huawei Cloud Security</h4>
        <a href="https://example.com" target="_blank"> Sertifikayı Doğrula</a>
      </div>

      <div class="modal-card">
        <img src="aws-cert.jpg" alt="AWS Security" />
        <h4>AWS Cloud Security</h4>
        <a href="https://example.com" target="_blank"> Sertifikayı Doğrula</a>
      </div>
    </div>
  `,

  education:`
    <h2> EDUCATION DETAILS</h2>
    <p><b>Piri Reis Üniversitesi</b> - Computer Engineering (%100 English)</p>
    <p style="margin-top:10px; color:#a0a5b5;">Data Structures, Algorithms, Object-Oriented Programming (C/C++) and Web Development focused education.</p>
  `,

  skills: `
    <h2> SKILLS </h2>
    <ul style="margin-left: 20px; margin-top: 10px; color:#a0a5b5; line-height: 1.8;">
      <li><b>Techinical Languages:</b> C, C++, Python, HTML</li>
      <li><b>Tools:</b> VS Code, Git, GitHub, Live Server</li>
      <li><b>Languages: Turkisk(Native), English(B2)</li>
    </ul>
  `,

  projects: `
    <h2> PROJECTS & LABS</h2>
    <p style="color:#a0a5b5;">Geliştirdiğim yazılım projeleri ve bulut güvenlik senaryoları yakında eklenecek.</p>
  `,

  experience: `
    <h2> EXPERIENCE</h2>
    <p style="color:#a0a5b5;">Eğitimler, Bootcamp'ler ve Kulüp Çalışmaları...</p>
  `,

  volunteer: `
    <h2> VOLUNTEER WORK</h2>
     <ul style="margin-left: 20px; margin-top: 10px; color:#a0a5b5; line-height: 1.8;">
      <li><b>IT Club: </li>
      <li><b>Aerospace Club: </li>
      <li><b>AI SUMMİT: </li>
    </ul>
    
  `
};

// DOM Elemanları
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');

// Modal Açma Fonksiyonu
function openModal(key) {
  if (modalData[key]) {
    modalBody.innerHTML = modalData[key];
    modalOverlay.classList.add('active');
  }
}

// Modal Kapatma Fonksiyonu
function closeModal() {
  modalOverlay.classList.remove('active');
}

// Dışarıya tıklayınca kapatma
function closeModalOnOutsideClick(event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
}