export default function Footer() {

    const attributions = [
        { name: "Blaine Frazier", link: "https://sketchfab.com/bncorley"},
        { name: "Ofke David", link: "https://sketchfab.com/OfekDavid"},
        { name: "minedesel", link: "https://sketchfab.com/minedesel"},
        { name: "k.", link: "https://sketchfab.com/k_nelms"},
        { name: "Black Snow", link: "https://sketchfab.com/BlackSnow02"},
        { name: "Niraj", link: "https://sketchfab.com/niraj.upadhyay"},
        { name: "LightSwitch", link: "https://sketchfab.com/edwardlewis450"},
        { name: "David Zerba", link: "https://sketchfab.com/DavidZerba"},
        { name: "Meerschaum Digital", link: "https://sketchfab.com/meerschaumdigital"},
    ]

    return (
        // <footer className="absolute text-xs bg-gray-900 bottom-0 px-6 py-2 mb-2 mx-2 rounded-full font-[Roboto]">
        <footer className="absolute bottom-0 text-xs bg-[#00000087] px-6 py-2 mb-2 mx-2 rounded-full font-[Roboto]">    
            <p className="inline text-wrap">Special thanks to:</p>
            {attributions.map((attribute, key) => (
               key < attributions.length-1 ? <a key={key} className="" href={attribute.link}> {attribute.name},</a>
               : <a key={key} className="" href={attribute.link}> and {attribute.name}</a>
            ))}
        </footer>
    )
}