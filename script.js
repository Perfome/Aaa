document.addEventListener('DOMContentLoaded', () => {
    const luxuryContainer = document.querySelector('.luxury-container');

    // Rastgele altın partikülleri oluşturma
    function createGoldParticle() {
        const particle = document.createElement('div');
        particle.classList.add('gold-particle');
        luxuryContainer.appendChild(particle);

        // Rastgele başlangıç pozisyonu
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        // Rastgele boyut
        const size = Math.random() * 3 + 1; // 1px - 4px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Rastgele animasyon süresi
        const duration = Math.random() * 5 + 3; // 3s - 8s
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`; // Gecikme ile başlasın

        // Belli bir süre sonra partikülü kaldır
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    // Belirli aralıklarla partikül oluştur
    setInterval(createGoldParticle, 300); // Her 300ms'de bir partikül

    // Partikül stili için CSS'e eklemeyi unutma!
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .gold-particle {
            position: absolute;
            background-color: var(--gold-accent);
            border-radius: 50%;
            opacity: 0;
            filter: blur(1px);
            animation: floatAndFade 5s forwards infinite;
            z-index: 10;
        }

        @keyframes floatAndFade {
            0% {
                transform: translate(0, 0);
                opacity: 0;
            }
            20% {
                opacity: 0.6;
            }
            80% {
                opacity: 0.4;
            }
            100% {
                transform: translate(calc((Math.random() - 0.5) * 200px), calc((Math.random() - 0.5) * 200px));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);


    // Sayfa yüklendikten sonra çiçekleri ve başlığı görünür yap
    const title = document.querySelector('.title');
    const flowers = document.querySelectorAll('.flower');

    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';

    flowers.forEach((flower, index) => {
        // CSS animasyonları zaten devreye girecek, burada sadece görünürlük başlangıç değerini ayarlıyoruz.
        // Asıl animasyon 'growAndRotate' keyframes ile CSS'te yönetiliyor.
    });

    // Küçük bir interaktif dokunuş: fare üzerinde hafif parlama
    luxuryContainer.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Arka plan gradient konumunu değiştir
        luxuryContainer.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(30, 0, 40, 0.7) 0%, var(--dark-bg) 70%)`;
    });
});
