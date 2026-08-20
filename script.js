
const modalData = {
  certificates: `
    <h2> CERTIFICATES & ACHIEVEMENTS</h2>
    <p style="color:#a0a5b5; font-size:0.9rem;">Aldığım sertifikalar ve doğrulama bağlantıları:</p>
    
    <div class="modal-grid">
      <div class="modal-card">
        <img src="huawei-cert.jpg" alt="Huawei Cloud" />
        <h4>Huawei Cybersecurity Bootcamp</h4>
        <a href="https://example.com" target="_blank"> Sertifikayı Doğrula</a>
      </div>

      <div class="modal-card">
        <img src="aws-cert.jpg" alt="AWS Security" />
        <h4>AWSPupilica Cybersecurity Bootcamp</h4>
        <a href="https://example.com" target="_blank"> Sertifikayı Doğrula</a>
      </div>

      <div class="modal-card">
        <img src="aws-cert.jpg" alt="AWS Security" />
        <h4>Cisco Network Academy: Introduction to AI</h4>
        <a href="https://example.com" target="_blank"> Sertifikayı Doğrula</a>
      </div>

      <div class="modal-card">
        <img src="aws-cert.jpg" alt="AWS Security" />
        <h4>AWS Cloud Security</h4>
        <a href="https://example.com" target="_blank"> Sertifikayı Doğrula</a>
      </div>

      <div class="modal-card">
        <img src="aws-cert.jpg" alt="AWS Security" />
        <h4>AWS Cloud Securit</h4>
        <a href="https://example.com" target="_blank"> Sertifikayı Doğrula</a>
      </div>

      <div class="modal-card">
        <img src="aws-cert.jpg" alt="AWS Security" />
        <h4>AWS Cisco Network Academy: Python Essentials 1&2</h4>
        <a href="https://example.com" target="_blank"> Sertifikayı Doğrula</a>
      </div>

    </div>

  `,

  education:`
    <h2> EDUCATION DETAILS</h2>
    <p><b>Piri Reis Üniversitesi</b> - Computer Engineering (%100 English)</p>
  `,

  skills: `
    <h2> SKILLS </h2>
    <ul style="margin-left: 20px; margin-top: 10px; color:#a0a5b5; line-height: 1.8;">
      <li><b>Techinical Languages:</b> C, C++, Python, HTML</li>
      <li><b>Tools:</b> VS Code, Git, GitHub </li>
      <li><b>Languages: Turkisk(Native), English(B2)</li>
    </ul>
  `,

  projects: `
    <h2> PROJECTS & LABS</h2>
    <p style="color:#a0a5b5;"></p>
  `,

  experience: `
    <h2> EXPERIENCE</h2>
    <p style="color:#a0a5b5;">QNB 101 Online Intern Program(August 2026): Participated in the intensive 3-week QNB 101 Online Intern Program focusing on banking techonologies, financal systems and corporate business workflows.</p>
  `,

  volunteer: `
    <h2> VOLUNTEER WORK</h2>
     <ul style="margin-left: 20px; margin-top: 10px; color:#a0a5b5; line-height: 1.8;">
      <li><b>IT Club / Data Science Team Member: </li>
      <li><b>Aerospace Club / Aerospace Engineering Team Member: </li>
      <li><b>AI SUMMİT: </li>
    </ul>
    
  `
};

// DOM Materials
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');

// Modal Open Function
function openModal(key) {
  if (modalData[key]) {
    modalBody.innerHTML = modalData[key];
    modalOverlay.classList.add('active');
  }
}

// Modal Close Function
function closeModal() {
  modalOverlay.classList.remove('active');
}

// Close Modal on Outside Click
function closeModalOnOutsideClick(event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
}