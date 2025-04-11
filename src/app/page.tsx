import Link from 'next/link';

const links = [
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/mustafasarikaya',
    color: 'bg-blue-600'
  },
  {
    title: 'Email',
    url: 'mailto:mustafa.sarikaya@mail.utoronto.ca',
    color: 'bg-red-600'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/mustafasar1kaya',
    color: 'bg-sky-500'
  },
  {
    title: 'Mustafa GPT',
    url: 'https://mustafa-gpt.com',
    color: 'bg-green-600'
  },
  {
    title: 'Hotel Booking UI',
    url: 'https://mustafasarikaya.github.io/hotel-booking-ui',
    color: 'bg-purple-600'
  },
  {
    title: 'Toronto Mounting',
    url: 'https://mustafasarikaya.github.io/torontomounting',
    color: 'bg-orange-600'
  },
  {
    title: 'Playouth',
    url: 'https://playouth.ca',
    color: 'bg-yellow-600'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center py-16 px-4">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Mustafa Sarikaya</h1>
          <p className="text-gray-400">Software Engineer & Full Stack Developer</p>
        </div>
        
        <div className="space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white w-full py-3 px-4 rounded-lg font-medium text-center block transition-transform hover:scale-105 hover:opacity-90`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
