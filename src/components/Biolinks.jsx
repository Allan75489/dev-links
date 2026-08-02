    import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram, FaPasta} from "react-icons/fa";
    import Animacao from "./Animacao";
    const links = [
        { icon: <FaGithub />, label: 'Meu GitHub', url: 'https://github.com/Allan75489' },
        { icon: <FaLinkedin />, label: 'Meu Linkedin', url: 'https://www.linkedin.com/in/allan-gustavo-da-silva-carvalho-ba97813b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { icon: <FaWhatsapp />, label: 'Meu Whatsapp', url: 'https://wa.me/5583991998747' },
        {icon: <FaEnvelope />,label: "E-mail", url: "mailto:alangustavodasilvacarvalho@gmail.com"},
        { icon: <FaInstagram />, label: "Instagram",url: "https://www.instagram.com/allangustavocarvalho?igsh=MXg2dzA2dmQzd2p4NQ=="},
        { icon: <FaPasta />,  label: "Portfólio",  url: "https://portfolio-pi-ochre-hvtu0pqy8g.vercel.app"

},
        
        ];

        export default function BioLinks() {
        return (
            <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white flex flex-col items-center py-12 px-4">
            <Animacao />
            <div className="absolute inset-0 z-10 w-full h-full">
            </div>
            
            <style>
                {`
                @keyframes pulse-border {
                    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
                }
                `}
            </style>

            <div className="flex flex-col items-center">
                
                <div className="relative z-20">
                <img
                src="/foto.jpg"
                    alt="Foto de perfil"
                    className="w-24 h-24 rounded-full border-4 border-[#1E2939] animate-pulse-border"
                    style={{ animation: 'pulse-border 2s infinite' }}
                />
                </div>
                <h1 className="text-2xl font-bold mt-2 z-10">Allan Gustavo</h1>
                <p className="text-gray-400 z-10">Desenvolvedor Front-end 💻</p>
            </div>

            <div className="mt-8 w-full max-w-md space-y-4 z-10">
                {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-all duration-200 p-4 rounded-xl shadow-lg border border-gray-800 hover:border-[#6B539D] transform hover:scale-101"
                >
                    <div className="flex items-center space-x-3">
                    <span className="text-xl">{link.icon}</span>
                    <div>
                        <span className="font-medium text-white leading-tight">{link.label}</span>
                        {link.extra && (
                        <div className="text-sm text-green-400 font-bold">
                            {link.extra}
                        </div>
                        )}
                    </div>
                    </div>
                    <span className="text-gray-400">↗</span>
                </a>
                ))}
            </div>
            <footer className='p-5'>
                <p>&copy; Allan Gustavo 2026</p>
            </footer>
            </div>
        );
        }