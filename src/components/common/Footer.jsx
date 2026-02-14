import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            padding: '30px 20px',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            marginTop: 'auto',
            borderTop: '1px solid var(--surface-color)',
            backgroundColor: 'var(--bg-color)'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.6' }}>
                    ⚠️warninng perlu di ketahui☢️
                    Semua konten di website ini tidak disimpan di server kami. Kami hanya menampilkan data dari API pihak ketiga.
                    Kami tidak bertanggung jawab atas konten yang ditampilkan.
                </p>
                <p style={{ marginBottom: '10px' }}>
                    <Link to="/disclaimer" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                        Disclaimer
                    </Link>
                </p>
                kalo dah baca jangan lupa join 😂
                klik tautan di bawah🤓👇
                <a href="https://chat.whatsapp.com/KdTdRrGbezhAAxKZ5fBhJ5?mode=gi_t" target="_blank" rel="noopener noreferrer">
  Klik untuk join gb sekumpulan orang gabut 😎✅
</a>
                <p style={{ fontSize: '0.85rem' }}>
                    &copy; {new Date().getFullYear()} JansenFlix. API provided by Zeldvorik.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
