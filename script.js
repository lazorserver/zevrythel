        function toggleMenu(id) {
            const el = document.getElementById(id);
            el.querySelector('.submenu').classList.toggle('active');
            el.classList.toggle('open');
        }
        
        function openModal(title, text, link) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalText').innerHTML = text;
            document.getElementById('dlLink').href = link;
            document.getElementById('modalOverlay').classList.add('active');
        }

        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('active');
        }
        
        document.getElementById('modalOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'modalOverlay') closeModal();
        });
        
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) e.preventDefault();
        });