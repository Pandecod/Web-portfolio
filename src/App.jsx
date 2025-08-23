import React from 'react';
import DataImage from './data';
import { listTools, listProyek } from './data';
import CV from '/assets/CV.pdf';
import { toast } from 'react-toastify';
const App = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '160cea4c-84b9-4189-b3e3-795c761caf09');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('');
      toast.success('Form berhasil dikirim!');
      event.target.reset();
    } else {
      console.log('Terjadi kesalahan', data);
      alert(data.message);
      setResult('');
    }
  };

  return (
    <div className="bg-white text-gray-900  z-20">
      {/* hero */}
      <section className="pt-32 grid md:grid-cols-2 items-center xl:gap-0 gap-6 grid-cols-1 container mx-auto p-14 md:px-20 lg:px-32 w-full">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-3xl md:text-5xl/tight font-bold">Hi, Saya Pande</h1>
          <h3 className="text-xl md:text-2xl/tight font-semibold mb-3 text-blue-600">Web Developer & Frontend Enthusiast</h3>
          <p className="text-sm md:text-base/loose mb-6 text-gray-600">
            Saya berfokus pada pengembangan website modern yang responsif, cepat, dan ramah pengguna. Passion saya adalah menciptakan solusi digital yang tidak hanya fungsional, tetapi juga memberikan pengalaman terbaik bagi pengguna.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href={CV} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm md:text-base text-white shadow">
              Download CV <i className="ri-download-line ri-lg" />
            </a>
            <a href="#Projects" className="px-5 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition text-sm md:text-base text-blue-600">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg" />
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero image" className="w-[500px] rounded-3xl md:ml-auto hidden md:block  rounded-lg animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </section>

      {/* about */}
      <section id="About" className="container mx-auto p-14 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-12" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className="w-full md:w-1/2 flex justify-center ">
          <img src={DataImage.aboutImage} alt="About Me" className="w-full max-w-md rounded-3xl " loading="lazy" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:self-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            About <span className="underline underline-offset-4 decoration-blue-600 font-light">Me</span>
          </h1>
          <p className="mb-10 max-w-lg text-center md:text-left text-gray-600">
            Saya adalah seorang developer dengan minat besar pada frontend & backend development. Saat ini saya terus mengasah keterampilan untuk membangun aplikasi web yang modern, scalable, dan mudah digunakan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-blue-600">3+</h2>
              <p className="text-gray-500 mt-2">Tahun Pengalaman</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">5+</h2>
              <p className="text-gray-500 mt-2">Proyek Terselesaikan</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-600">100%</h2>
              <p className="text-gray-500 mt-2">Komitmen Belajar & Berkembang</p>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          My <span className="underline underline-offset-4 decoration-blue-600 font-light">Skills</span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          {' '}
          Tools & teknologi yang sering saya gunakan
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="" className="w-14 bg-white p-1 border border-gray-200 rounded" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="text-gray-500">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* projects */}
      <section id="Projects" className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          My <span className="underline underline-offset-4 decoration-blue-600 font-light">Projects</span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Beberapa proyek yang sudah saya kerjakan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-gray-50 rounded-md mt-3 border border-gray-200 hover:shadow-md transition" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="proyek Image" className="rounded-md" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-gray-600 mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-gray-300 bg-gray-100 rounded-md font-semibold text-gray-700" key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div>
                  <a href="" className="bg-blue-600 p-3 rounded-lg block hover:bg-blue-700 mt-8 text-center text-white">
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact */}
      <div className="text-center py-20 px-6 lg:px-32 w-full" id="Contact">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Contact <span className="underline underline-offset-4 decoration-blue-600 font-light">With Me</span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-md mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Jangan ragu untuk menghubungi saya melalui form berikut
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-700 space-y-6" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 text-left">
              <label className="block mb-2 font-medium text-gray-700">Name</label>
              <input className="w-full border border-gray-300 bg-gray-50 text-gray-900 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="Name" placeholder="Your Name" required />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input className="w-full border border-gray-300 bg-gray-50 text-gray-900 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="Email" placeholder="Your Email" required />
            </div>
          </div>

          {/* Message */}
          <div className="text-left">
            <label className="block mb-2 font-medium text-gray-700">Pesan</label>
            <textarea className="w-full border border-gray-300 bg-gray-50 text-gray-900 rounded-lg py-3 px-4 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" name="Message" placeholder="Message" required></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-12 rounded-lg shadow-md transition font-medium">{result ? result : 'Kirim Pesan'}</button>
          </div>
        </form>
      </div>

      {/* footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
        <div className="container mx-auto px-6 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Pande.</h2>
              <p className="text-gray-400 text-sm leading-relaxed"> Web Developer yang berfokus pada pengembangan website modern dengan teknologi terbaru.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#Hero" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#About" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#Projects" className="hover:text-blue-400">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#Contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Terhubung dengan saya</h3>
              <div className="flex gap-4">
                <a href="https://github.com/pandecod" target="_blank" className="hover:text-blue-400">
                  <i className="ri-github-fill ri-xl" />
                </a>
                <a href="https://www.linkedin.com/in/i-wayan-pande-uliyantara-40766b318/" target="_blank" className="hover:text-blue-400">
                  <i className="ri-linkedin-box-fill ri-xl" />
                </a>
                <a href="https://instagram.com" target="_blank" className="hover:text-blue-400">
                  <i className="ri-instagram-line ri-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Pande. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
